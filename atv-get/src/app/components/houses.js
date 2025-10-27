const Houses = ({ house }) => {
    return (
        <li key={house.id}>
            <strong> {house.name} </strong>
            <br/>
            <span> 
                <strong> Colors: </strong>
                    {house.houseColours}
                    <br/>  
                </span>
            <span> 
                <strong> Founder: </strong>
                    {house.founder}
                    <br/>  
            </span>
            <span> 
                <strong> Animal: </strong>
                    {house.animal}
                    <br/>
            </span>
            <br/>
        </li>
    );
}

export default Houses;