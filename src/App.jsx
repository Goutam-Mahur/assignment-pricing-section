import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Overview from "./components/Overview";
import Authentication from "./components/Authentication";
import Endpoints from "./components/Endpoints";
import Tutorial from "./components/Tutorial";
import CodeExamples from "./components/CodeExamples";
import Pricing from "./components/Pricing";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-col min-h-screen font-sans leading-relaxed dark:text-text dark:bg-background">
        <Header />
        <Nav />
        <main className="flex-1 max-w-5xl my-8 mx-auto px-4 md:px-8">
          <Overview />
          <Authentication />
          <Endpoints />
          <Tutorial />
          <CodeExamples />
          <Pricing />
        </main>
      </div>
    </ThemeProvider>
  );
}


export default App;