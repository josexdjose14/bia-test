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
        redirect("/");
    }

    return (
        <section className="p-6 w-full">
            {/* btn header */}
            <div className="w-full mb-8 p-6 flex">
                <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                    Back
                </button>
            </div>
            {/* content */}
            <div className="flex flex-col sm:flex-col md:flex-row gap-8">
                {/* flag */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={country.flags.svg}
                        alt={country.flags.alt}
                        className="w-64 h-auto rounded shadow"
                    />
                </div>

                {/* info */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    {/* title */}
                    <div className='w-full'>
                        <h1 className="text-2xl font-bold mb-4">{country.name.common}</h1>
                    </div>
                    {/* medium data */}
                    <div className='w-full md:w-1/2 flex flex-col justify-center'>
                        <div className='w-full md:w-1/2 flex flex-col justify-center'>
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
                        <div className='w-full md:w-1/2 flex flex-col justify-center'>
                            <p className="mb-2">
                                <span className="font-semibold">Top Level Domain:</span> {country.tld[0]}
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">Currencies:</span> {Object.keys(country.currencies).join(", ")}
                            </p>
                            <p>
                                <span className="font-semibold">Languajes:</span>{' '}
                                {Object.values(country.languages).join(", ")}
                            </p>
                        </div>
                    </div>
                    {/* borders */}
                    <div className='w-full flex flex-col md:flex-row'>
                        <div>
                            <p className="font-semibold">Border Countries:</p>
                        </div>
                        <div>
                            {country.borders.map((bord) => (
                                <p key={bord} className='mb-4'>{bord}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
