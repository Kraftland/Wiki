function setThemePreference() {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDarkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

// Check the user's system preference and set the theme on page load
setThemePreference();

// Listen for changes in system preference and update the theme accordingly
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setThemePreference);

