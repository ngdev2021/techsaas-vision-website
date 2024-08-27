const readlineSync = require('readline-sync');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

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

    if (changedFiles.some((file) => file.includes('bugfix/'))) {
      commitMessage += ' #bugfix';
    } else if (
      changedFiles.some((file) => file.includes('feature/'))
    ) {
      commitMessage += ' #feature';
    } else if (
      changedFiles.some((file) => file.includes('refactor/'))
    ) {
      commitMessage += ' #refactor';
    }

    fs.appendFileSync(
      'commit-log.txt',
      `${new Date()}: ${commitMessage}\n`
    );

    execSync('git add .');
    execSync(`git commit -m "${commitMessage}"`);
    console.log('Changes committed successfully.');

    let newChanges = getChanges();
    if (newChanges) {
      console.log(
        'New uncommitted changes detected, committing again...'
      );
      execSync('git add .');
      execSync(
        'git commit -m "Additional changes detected and committed."'
      );
    }

    const branch = execSync('git branch --show-current')
      .toString()
      .trim();
    if (!['main', 'develop'].includes(branch)) {
      console.log(`Switching to main or develop branch...`);
      execSync('git checkout main', { stdio: 'inherit' });
    }

    execSync(`git push origin ${branch}`, { stdio: 'inherit' });
    console.log(`Pushed changes to ${branch} branch successfully.`);

    if (
      ['src', 'config'].some((dir) => parentDirectories.includes(dir))
    ) {
      const deploy = readlineSync.question(
        'Changes detected in critical directories. Do you want to deploy? (y/n): '
      );
      if (deploy.toLowerCase() === 'y') {
        execSync('npm run deploy', { stdio: 'inherit' });
        console.log('Deployment completed.');
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
