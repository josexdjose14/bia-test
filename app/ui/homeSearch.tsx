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
        <section className="w-full flex flex-row justify-between px-4 py-2">
            <div className="flex items-center gap-2">
                <MagnifyingGlassIcon width={24} height={24} />
                <input type="text" onChange={(e) => updateCountriesByName(e.target.value)} />
            </div>

            <select name="region" id="region" onChange={(e) => updateCountriesByRegion(e.target.value)}>
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