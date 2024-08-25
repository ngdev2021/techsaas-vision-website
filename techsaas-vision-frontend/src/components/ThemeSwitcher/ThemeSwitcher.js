


const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  const themes = [
    { value: 'default', label: 'Default' },
    { value: 'monopoly', label: 'Monopoly' },
    { value: 'foodie', label: 'Foodie' },
    { value: 'mafia', label: 'Mafia' },
    { value: 'drugGame', label: 'Drug Game' },
    { value: 'adultEntertainment', label: 'Adult Entertainment' },
    { value: 'foodieInfluencer', label: 'Foodie Influencer' },
    {
      value: 'socialMediaInfluencer',
      label: 'Social Media Influencer',
    },
  ];

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
  };

  return (
    <div className="theme-switcher">
      <label htmlFor="theme-select">Choose a theme: </label>
      <select id="theme-select" onChange={handleThemeChange}>
        {themes.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
