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
        <article className="border border-gray-300 rounded-lg shadow-sm w-full max-w-[300px] mx-2 my-2 p-4 bg-white" onClick={goToCountry}>
            <div className="mb-3">
                <Image
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`}
                    className="object-cover w-full rounded-md"
                    width={300}
                    height={150}
                />
            </div>

            <div>
                <h2 className="font-extrabold text-lg mb-3">{country.name.common}</h2>
                <p className="text-sm mb-1">
                    <span className="font-semibold">Population:</span>{" "}
                    {country.population.toLocaleString()}
                </p>
                <p className="text-sm mb-1">
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