const readlineSync = require('readline-sync');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Check if the user wants to perform a dry run
const isDryRun = process.argv.includes('--dry-run');

try {
  const getChanges = () =>
    execSync('git status --porcelain').toString().trim();

  let changes = getChanges();

  if (changes) {
    const changedFiles = changes
      .split('\n')
      .map((line) => line.slice(3));
    const parentDirectories = [
      ...new Set(changedFiles.map((file) => path.dirname(file))),
    ];

    let commitMessage = '';

    const directorySummary = parentDirectories.reduce((acc, dir) => {
      acc[dir] = (acc[dir] || 0) + 1;
      return acc;
    }, {});

    const directorySummaryString = Object.keys(directorySummary)
      .map((dir) => `${directorySummary[dir]} changes in ${dir}`)
      .join(', ');

    const fileExtensions = changedFiles.map((file) =>
      file.split('.').pop()
    );
    const extensionCounts = fileExtensions.reduce((acc, ext) => {
      acc[ext] = (acc[ext] || 0) + 1;
      return acc;
    }, {});

    const extensionSummary = Object.keys(extensionCounts)
      .map((ext) => `${extensionCounts[ext]} ${ext} file(s)`)
      .join(', ');

    if (changedFiles.length > 10) {
      console.log(
        `More than 10 files changed. Relevant changes: ${extensionSummary}`
      );
      const selectedDirs = readlineSync.keyInSelect(
        Object.keys(directorySummary),
        'Select the most relevant directory for the commit message:'
      );
      const additionalDetails = readlineSync.question(
        'Enter additional details for the commit message: '
      );
      commitMessage = `Updated ${extensionSummary} in ${
        Object.keys(directorySummary)[selectedDirs]
      } - ${additionalDetails}`;
    } else {
      commitMessage = `Updated ${extensionSummary} in ${directorySummaryString}`;
    }

    const detailedMessage = readlineSync.question(
      'Do you want to add more details to the commit message? (y/n): '
    );
    if (detailedMessage.toLowerCase() === 'y') {
      const additionalDetails = readlineSync.question(
        'Enter additional details: '
      );
      commitMessage += ` - ${additionalDetails}`;
    }

    // Detect the type of changes and suggest branch types
    let branchType = 'feature';
    if (changedFiles.some((file) => file.includes('bugfix/'))) {
      branchType = 'bugfix';
      commitMessage += ' #bugfix';
    } else if (
      changedFiles.some((file) => file.includes('feature/'))
    ) {
      branchType = 'feature';
      commitMessage += ' #feature';
    } else if (
      changedFiles.some((file) => file.includes('refactor/'))
    ) {
      branchType = 'refactor';
      commitMessage += ' #refactor';
    }

    // Confirm branch selection and create/switch branches if needed
    const branch = execSync('git branch --show-current')
      .toString()
      .trim();

    if (!branch.startsWith(branchType)) {
      const createBranch = readlineSync.question(
        `You're on branch ${branch}. Do you want to switch or create a ${branchType} branch? (y/n): `
      );

      if (createBranch.toLowerCase() === 'y') {
        const newBranchName = readlineSync.question(
          `Enter the ${branchType} branch name: `
        );
        if (isDryRun) {
          console.log(
            `Dry run: Would switch to branch ${branchType}/${newBranchName}`
          );
        } else {
          execSync(`git checkout -b ${branchType}/${newBranchName}`, {
            stdio: 'inherit',
          });
          console.log(
            `Switched to branch ${branchType}/${newBranchName}`
          );
        }
      }
    }

    // Save commit log
    if (!isDryRun) {
      fs.appendFileSync(
        'commit-log.txt',
        `${new Date()}: ${commitMessage}\n`
      );
    } else {
      console.log(
        `Dry run: Would append commit message to commit-log.txt`
      );
    }

    if (!isDryRun) {
      execSync('git add .');
      execSync(`git commit -m "${commitMessage}"`);
      console.log('Changes committed successfully.');
    } else {
      console.log(
        `Dry run: Would commit changes with message "${commitMessage}"`
      );
    }

    let newChanges = getChanges();
    if (newChanges) {
      console.log(
        'New uncommitted changes detected, committing again...'
      );
      if (!isDryRun) {
        execSync('git add .');
        execSync(
          'git commit -m "Additional changes detected and committed."'
        );
      } else {
        console.log(
          'Dry run: Would commit additional detected changes.'
        );
      }
    }

    if (!isDryRun) {
      execSync(`git push origin ${branch}`, { stdio: 'inherit' });
      console.log(`Pushed changes to ${branch} branch successfully.`);
    } else {
      console.log(`Dry run: Would push changes to ${branch} branch`);
    }

    if (
      ['src', 'config'].some((dir) => parentDirectories.includes(dir))
    ) {
      const deploy = readlineSync.question(
        'Changes detected in critical directories. Do you want to deploy? (y/n): '
      );
      if (deploy.toLowerCase() === 'y') {
        if (!isDryRun) {
          execSync('npm run deploy', { stdio: 'inherit' });
          console.log('Deployment completed.');
        } else {
          console.log('Dry run: Would run deployment');
        }
      } else {
        console.log('Skipping deployment.');
      }
    } else {
      console.log(
        'No critical changes detected. Skipping deployment.'
      );
    }
  } else {
    console.log('No changes to commit.');
  }
} catch (error) {
  console.error('An error occurred:', error.message);
}
