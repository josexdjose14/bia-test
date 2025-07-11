"use client";
import { MoonIcon } from "@heroicons/react/16/solid"
import { useDarkMode } from "../lib/useDarkMode";

export default function HomeHeader() {
    const { isDark, toggle } = useDarkMode();
    console.log(isDark)
    return (
        <header className="flex items-center justify-between w-full px-8 py-4 shadow-md mb-1 bg-dark-text text-light-text dark:bg-dark-element dark:text-dark-text text-base">
            <h1 className="font-extrabold break-words">Where is the world?</h1>
            <div className="flex items-center gap-2 w-auto m-0 cursor-pointer" onClick={toggle}>
                <MoonIcon className="w-5 h-5" />
                <span className=" font-semibold break-words">{isDark ? "Dark mode" : "Light mode"}</span>
            </div>
        </header>
    )
}