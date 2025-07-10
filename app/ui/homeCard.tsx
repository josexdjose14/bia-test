'use client';
import Image from "next/image"
import { Country } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";


interface Props {
    country: Country
}

export default function HomeCard({ country }: Props) {

    const router = useRouter();

    const goToCountry = () => {
        console.log("ir a");
        router.push(`/country?data=${encodeURIComponent(JSON.stringify(country))}`);
    };

    return (
        <article className="w-full shadow-md rounded overflow-hidden cursor-pointer transition-transform hover:scale-[1.01]" onClick={goToCountry}>
            <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                    src={country.flags.svg}
                    alt={country.flags.alt || "flag"}
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="flex flex-col p-4">
                <h2 className="font-extrabold text-lg mb-3">{country.name.common}</h2>
                <p className="text-sm mb-1">
                    <span className="font-semibold">Population:</span>{" "}
                    {country.population}
                </p>
                <p className="font-semibold mb-1">
                    <span className="font-semibold">Region:</span> {country.region}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Capital:</span>{" "}
                    {country.capital?.[0] || "N/A"}
                </p>
            </div>
        </article>
    )
}