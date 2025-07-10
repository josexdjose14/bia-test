import Link from "next/link";

export default function Page() {
    return (
        <main className="flex content-center justify-items-center">
            <p className="font-extrabold">welcome to my test</p>
            <Link
                href="/dashboard"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            > continue
            </Link>
        </main>
    );
}