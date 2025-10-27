import Houses from "../components/houses";

export default async function ServerSideHouses() {
    const res = await fetch("https://wizard-world-api.herokuapp.com/Houses");
    const houses = await res.json();

    return (
        <ul>
            {houses.map((house) => (
                <Houses key={house.id} house={house}/>
            ))}
        </ul>
    );
}