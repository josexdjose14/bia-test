"use client";
import { MoonIcon } from "@heroicons/react/16/solid"
import { useDarkMode } from "../lib/useDarkMode";

export default function HomeHeader() {
    const { isDark, toggle } = useDarkMode();
    console.log(isDark)
    return (
        <header className="bg-blue-100 flex items-center justify-between w-full px-8 py-4 shadow bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
            <h1 className="font-extrabold break-words ">Where is the world?</h1>
            <div className="flex items-center gap-2 w-auto m-0 cursor-pointer" onClick={toggle}>
                <MoonIcon className="w-5 h-5" />
                <span className=" font-semibold break-words bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">{isDark ? "Dark mode" : "Light mode"}</span>
            </div>
            <div className="bg-red-100 dark:bg-blue-800">
                Test de modo oscuro
            </div>
        </header>
    )
}