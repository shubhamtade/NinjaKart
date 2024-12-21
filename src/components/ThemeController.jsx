import React, { useEffect, useState } from "react";

const ThemeController = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="label cursor-pointer">
        <span className="label-text">Light</span>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="label-text">Dark</span>
      </label>
    </div>
  );
};

export default ThemeController;
