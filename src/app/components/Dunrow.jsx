export default async function Dunrow({ run }, key) {
    console.log(run);
    return (
        <li className="list-none flex items-center border p-2 min-w-96 justify-between">
            <div className="border-x p-1">
                <a
                    className="hover:text-main-yellow transition-colors duration-200"
                    target="_blank"
                    href={run.url}
                >
                    {run.dungeon}
                </a>
                <p className="text-xs">{run.short_name}</p>
            </div>
            <p className="border-x p-1">Keystone Level: {run.mythic_level}</p>
            <p className="border-x p-1">+ {run.num_keystone_upgrades}</p>
        </li>
    );
}
