import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import useTheme from "../contexts/theme";

function Nav() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    if (themeMode === "light") {
      darkTheme();
      console.log("dark mode implemented");
    } else {
      lightTheme();
      console.log("light mode implemented");
    }
  };
  return (
    <nav className="dark:bg-section-background py-4 sticky top-0 z-50 shadow-md bg-white">
      <ul className="flex justify-center items-center flex-wrap list-none p-0 m-0 flex-col md:flex-row md:justify-center">
        <li className="my-2 mx-4 md:my-0">
          <a
            className="no-underline font-medium transition-colors duration-300 text-sm uppercase tracking-wide hover:text-accent dark:text-text dark:hover:text-accent"
            href="#overview"
          >
            Overview
          </a>
        </li>
        <li className="my-2 mx-4 md:my-0">
          <a
            className="no-underline font-medium transition-colors duration-300 text-sm uppercase tracking-wide hover:text-accent dark:text-text dark:hover:text-accent"
            href="#authentication"
          >
            Authentication
          </a>
        </li>
        <li className="my-2 mx-4 md:my-0">
          <a
            className="no-underline font-medium transition-colors duration-300 text-sm uppercase tracking-wide hover:text-accent dark:text-text dark:hover:text-accent"
            href="#endpoints"
          >
            Endpoints
          </a>
        </li>
        <li className="my-2 mx-4 md:my-0">
          <a
            className="no-underline font-medium transition-colors duration-300 text-sm uppercase tracking-wide hover:text-accent dark:text-text dark:hover:text-accent"
            href="#tutorial"
          >
            Tutorial
          </a>
        </li>
        <li className="my-2 mx-4 md:my-0">
          <a
            className="no-underline font-medium transition-colors duration-300 text-sm uppercase tracking-wide hover:text-accent dark:text-text dark:hover:text-accent"
            href="#code-examples"
          >
            Code Examples
          </a>
        </li>
        <li className="my-2 mx-4 md:my-0">
          <a
            className="no-underline font-medium transition-colors duration-300 text-sm uppercase tracking-wide hover:text-accent dark:text-text dark:hover:text-accent"
            href="#pricing"
          >
            Pricing
          </a>
        </li>
        <li className="my-2 mx-4 md:my-0 flex items-center">
          <button onClick={onChangeBtn}>
            {themeMode === "light" ? (
              <FaSun className="w-6 h-6 text-slate-500 hover:text-accent" />
            ) : (
              <FaMoon className="w-6 h-6 text-white hover:text-accent" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
