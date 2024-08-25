import Dunrow from "./components/Dunrow";
const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
};
const response = await fetch(
    "https://raider.io/api/v1/characters/profile?region=eu&realm=twisting-nether&name=smollydk&fields=mythic_plus_best_runs",
    {
        method: "GET",
        headers: headersList,
    }
);
const data = await response.json();
const runs = await data.mythic_plus_best_runs;

console.log(runs[2].dungeon);

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form className="flex flex-col gap-1">
                <label htmlFor="search">Character</label>
                <input className="text-black" name="search" type="text" />
                <input
                    className="border rounded-sm cursor-pointer hover:bg-main-yellow hover:text-black"
                    type="submit"
                    value="Search"
                />
            </form>
            {runs.map((run, i) => (
                <Dunrow key={i} run={runs[i]} />
            ))}
        </main>
    );
}
