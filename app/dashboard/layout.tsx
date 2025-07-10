import HomeSearch from "../ui/homeSearch";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full">
            <HomeSearch />
            {children}
        </div>
    );
}