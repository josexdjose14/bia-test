import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { defaultSearch, regionList } from "../lib/static-data";
import { Country } from "../lib/definitions";
import { getCountriesByName, getCountriesByRegion } from "../lib/api";
import { useDebouncedCallback } from "use-debounce";
import { redirect } from "next/navigation";

export default function HomeSearch() {
    const updateSearch = useDebouncedCallback(async (op: number, search: string) => {
        if (op == 1) {
            if (!search.trim()) {
                redirect("/dashboard")
                return
            };

            console.log("fetch by name:", search);
            const newData = await getCountriesByName(search);
            console.log(newData);
        } else if (op == 2) {
            if (!search.trim()) {
                redirect("/dashboard")
                return
            }

            console.log("Fetching by region:", search);
            const newData = await getCountriesByRegion(search);
            console.log(newData);

        }
    }, 2000);

    return (
        <section className="w-full flex flex-row justify-between px-4 py-2">
            <div className="flex items-center gap-2">
                <MagnifyingGlassIcon width={24} height={24} />
                <input type="text" onChange={(e) => updateSearch(1, e.target.value)} />
            </div>

            <select name="region" id="region" onChange={(e) => updateSearch(2, e.target.value)}>
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