"use client";
import { Suspense, useState } from "react";
import { Country } from "./lib/definitions";
import { defaultSearch } from "./lib/static-data";
import HomeSearch from "./ui/homeSearch";
import HomeCardsContainer from "./ui/homeCardsContainer";
import { CardsSkeleton } from "./ui/skeletons";

export default function Page() {
  const [countryList, setCountryList] = useState<Country[]>(defaultSearch);

  return (
    <main className="w-full flex flex-col p-4 gap-8 bg-light-background dark:bg-dark-background ">
      <HomeSearch countrySet={setCountryList} />
      <Suspense fallback={<CardsSkeleton />}>
        <HomeCardsContainer countryListX={countryList} />
      </Suspense>
    </main>
  );
}
