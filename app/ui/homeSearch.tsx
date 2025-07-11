"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { defaultSearch, regionList } from "../lib/static-data";
import { Country } from "../lib/definitions";
import { getCountriesByName, getCountriesByRegion } from "../lib/api";
import { useDebouncedCallback } from "use-debounce";

// interface Props {
//     searchX: [string, Dispatch<SetStateAction<string>>],
//     selectX: [string, Dispatch<SetStateAction<string>>],
// }

interface Props {
    countrySet: Dispatch<SetStateAction<Country[]>>;
}

export default function HomeSearch({ countrySet }: Props) {

    const updateCountriesByName = useDebouncedCallback(async (name: string) => {
        if (!name.trim()) {
            countrySet(defaultSearch);
            return
        };

        console.log("Fetching by name:", name);
        const newData = await getCountriesByName(name);
        console.log(newData);
        countrySet(newData);
    }, 2000);

    const updateCountriesByRegion = useDebouncedCallback(async (region: string) => {
        if (!region.trim()) {
            countrySet(defaultSearch);
            return
        }

        console.log("Fetching by region:", region);
        const newData = await getCountriesByRegion(region);
        console.log(newData);
        countrySet(newData);
    }, 2000);

    return (
        <section className="w-full flex flex-col sm:flex-row gap-4 sm:gap-1 justify-between py-2 pr-4 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
            <div className="flex items-center gap-2 py-2 px-4 rounded shadow-md w-full md:w-1/3 bg-dark-text dark:bg-dark-element">
                <MagnifyingGlassIcon width={24} height={24} />
                <input type="text" placeholder="Search for a country..." onChange={(e) => updateCountriesByName(e.target.value)} className="focus:outline-none focus:ring-0 focus:border-transparent placeholder-light-input" />
            </div>

            <select name="region" id="region" onChange={(e) => updateCountriesByRegion(e.target.value)} className="py-2 px-4 rounded shadow-md w-54 focus:outline-none focus:ring-0 focus:border-transparent bg-dark-text dark:bg-dark-element">
                <option value="">
                    Filter by region
                </option>
                {regionList.map((region) => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </select>
        </section >
    )
}