// op1 fetch
import { Country } from "@/app/lib/definitions";
import axios from "axios"

const BASE_URL = "https://restcountries.com/v3.1";
const FIELDS = "?fields=name,population,region,capital,flags,subregion,languages,currencies,borders,tld";

// export async function getCountriesByRegion(region: string): Promise<Country[]> {
//   const res = await fetch(`${BASE_URL}/region/${region}?fields=${FIELDS}`)
//   if (!res.ok) throw new Error("failed to fetch countries by region")
//   return res.json()
// }
// export async function getCountriesByName(name: string): Promise<Country[]> {
//   const res = await fetch(`${BASE_URL}/name/${name}?fields=${FIELDS}`)
//   if (!res.ok) throw new Error("failed to fetch countries by name")
//   return res.json()
// }

// op2 axios
export async function getCountriesByRegion(region: string) {
    try {
        const response = await axios.get(`${BASE_URL}/region/${region}?fields=${FIELDS}`);
        console.log(response);
        return (response.data);
    } catch (error) {
        console.error(error);
        return [];
    }
}
export async function getCountriesByName(name: string) {
    try {
        const response = await axios.get(`${BASE_URL}/name/${name}?fields=${FIELDS}`);
        console.log(response);
        return (response.data);
    } catch (error) {
        console.error(error);
        return [];
    }
}

// op3 axios esp
// const api = axios.create({
//     baseURL: BASE_URL,
//     timeout: 5000,
// })
// export async function getCountriesByRegion(region: string): Promise<Country[]> {
//     const res = await api.get<Country[]>(`/region/${region}`, {
//         params: { fields: FIELDS },
//     })
//     console.log(res)
//     return res.data
// }
// export async function getCountriesByName(name: string): Promise<Country[]> {
//     const res = await api.get<Country[]>(`/name/${name}`, {
//         params: { fields: FIELDS },
//     })
//     console.log(res)
//     return res.data
// }
