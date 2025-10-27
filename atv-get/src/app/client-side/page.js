"use client"
import { useEffect, useState } from "react"
import Houses from "../components/houses";

export default function ClientSideHouses() {
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://wizard-world-api.herokuapp.com/Houses")
            .then((res) => res.json())
            .then((data) => {
                setHouses(data);
                setLoading(false);
            })
    }, []);

    if (loading) return <p> Loading... </p>; 

    return(
        <ul>
            {houses.map((house) => (
                <Houses key={house.id} house={house}/>
            ))}
        </ul>
    )
}