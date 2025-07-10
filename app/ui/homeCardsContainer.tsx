import { Country } from "../lib/definitions"
import HomeCard from "./homeCard"

interface Props {
    countryListX: Country[] | null
}

export default function CountriesTable({ countryListX }: Props) {
    return (
        <section className="grid gap-6 p-4
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  xl:grid-cols-4
  max-w-screen-xl mx-auto">
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