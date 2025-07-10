import { defaultSearch } from "../lib/static-data"
import HomeCard from "./homeCard"

export default function StaticHomeCardsContainer() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1">
            {
                defaultSearch.map((country) => (
                    <HomeCard country={country} key={country.name.common} />
                ))
            }
        </section>
    )
}