import React from "react";
import useTheme from "../context/theme";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const toggleTheme = () => {
        if (themeMode === "light") {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    return (

        <button
            onClick={toggleTheme}
            className="text-2xl p-2 rounded-full transition duration-300 hover:rotate-12 hover:scale-110"
            aria-label="Toggle theme"
        >
            {themeMode === "light" ? (
                <FiMoon className="text-black" fill="black" />
            ) : (
                <FiSun className="text-yellow-500" />
            )}
        </button>
    );

}
