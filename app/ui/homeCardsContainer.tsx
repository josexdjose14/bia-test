import { Country } from "../lib/definitions"
import HomeCard from "./homeCard"

interface Props {
    countryListX: Country[] | null
}

export default function CountriesTable({ countryListX }: Props) {
    return (
        <section className="w-full grid gap-10 grid-cols-[repeat(auto-fit,minmax(300px,300px))] justify-center px-4 md:px-8 gap-y-12 gap-x-10">
            {countryListX && countryListX.length > 0 ? (
                countryListX.map((country) => (
                    <HomeCard country={country} key={country.name.common} />
                ))
            ) : (
                <span className="col-span-full text-center text-gray-500">
                    There are no countries that match your search criteria.
                </span>
            )}
        </section>
    )
}