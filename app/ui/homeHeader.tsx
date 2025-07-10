"use client";
import { MoonIcon } from "@heroicons/react/16/solid"
import { useDarkMode } from "../lib/useDarkMode";

export default function HomeHeader() {
    const { toggle } = useDarkMode();
    return (
        <header className="flex items-center justify-between px-4 py-2 border border-black/10">
            <h1 className="text-lg font-semibold">Where is the world?</h1>

            <div className="flex items-center gap-2" onClick={toggle}>
                <MoonIcon className="w-2 h-2" />
                <span className="block sm:hidden text-sm text-very-dark-blue-text dark:pure-white">Dark mode</span>
            </div>
        </header>
    )
}