import { useState } from "react";
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleDarkMode() {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("light-mode", isDarkMode);
  }

  return (
    <header className="header-container">
      <p className="header-text">Where in the world?</p>
      <div className="dark-mode-container">
        <i className="fa-solid fa-moon"></i>
        <span onClick={handleDarkMode}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </header>
  );
}

export default Header;
