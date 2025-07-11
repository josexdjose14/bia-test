'use client'
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { redirect, useSearchParams } from 'next/navigation'
import { Country } from '../lib/definitions';
import '@/app/ui/global.css';

export default function Page() {
    const searchParams = useSearchParams();
    const data = searchParams.get('data');
    const country: Country = data ? JSON.parse(decodeURIComponent(data)) : null;

    if (!country) return <p>No country data received.</p>;
    const goBack = () => {
        console.log("regresando");
        redirect("/");
    }

    return (
        <section className="h-full w-full bg-gray-100 p-4 w-full flex flex-col bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
            {/* btn header */}
            <div className="py-4">
                <button
                    onClick={goBack}
                    className="w-auto flex flex-norwap gap-1 px-4 py-2 items-center rounded shadow-md cursor-pointer bg-dark-text dark:bg-dark-element"
                >
                    <ArrowLeftIcon className="w-4" />
                    Back
                </button>
            </div>
            {/* content */}
            <div className="py-0 flex flex-col justify-between sm:flex-row items-center">
                {/* flag */}
                <div className="w-full sm:w-2/5 aspect-[4/3] overflow-hidden flex justify-center items-center">
                    <img
                        src={country.flags.svg}
                        alt={country.flags.alt}
                        className="object-cover w-full h-auto"
                    />
                </div>

                {/* info */}
                <div className="w-full sm:w-2/5 flex-col sm:flex-row gap-4 py-4">
                    {/* title */}
                    <div className='py-2 w-full sm:1/2'>
                        <h3 className="font-extrabold text-2xl">{country.name.common}</h3>
                    </div>
                    {/* medium data */}
                    <div className='py-2 flex flex-col sm:flex-row sm:items-start'>
                        <div className='w-full md:w-1/2 flex flex-col justify-center py-2'>
                            <p className="mb-1 font-light">
                                <span className="font-semibold">Native Name:</span> {Object.values(country.name.nativeName)[0].common}
                            </p>
                            <p className="mb-1">
                                <span className="font-semibold">Population:</span>{' '}
                                {country.population}
                            </p>
                            <p className="mb-1">
                                <span className="font-semibold">Region:</span> {country.region}
                            </p>
                            <p className="mb-1">
                                <span className="font-semibold">Subregion:</span> {country.subregion}
                            </p>
                            <p className="">
                                <span className="font-semibold">Capital:</span> {country.capital[0]}
                            </p>
                        </div>
                        <div className='w-full md:w-1/2 flex flex-col justify-center py-2'>
                            <p className="mb-1">
                                <span className="font-semibold">Top Level Domain:</span> {country.tld[0]}
                            </p>
                            <p className="mb-1">
                                <span className="font-semibold">Currencies:</span> {Object.keys(country.currencies).join(", ")}
                            </p>
                            <p>
                                <span className="font-semibold">Languajes:</span>{' '}
                                {Object.values(country.languages).join(", ")}
                            </p>
                        </div>
                    </div>
                    {/* borders */}
                    <div className='flex flex-col sm:flex-row justify-start items-start'>
                        <div className='w-full sm:w-2/5 sm:m-0'>
                            <span className="font-semibold break-words w-full mb-2 sm:mb-0">Border Countries:</span>
                        </div>
                        <div className='w-full sm:w-3/5 flex flex-row flex-wrap sm:m-0'>
                            {country.borders.map((bord) => (
                                <span key={bord} className='py-1 px-2 m-1 rounded shadow-md bg-dark-text dark:bg-dark-element'>{bord}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
