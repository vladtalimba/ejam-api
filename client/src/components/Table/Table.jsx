import "./Table.css";

function Table({superHeroes}){

    // Buil table with all the superhero data.
    // Create a new table row for each element in the data array.
    return(
        <div className="tableContainer">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Superpower</th>
                        <th>Humility Score</th>
                    </tr>
                    {superHeroes.map((superhero, idx) => {
                        return(
                            <tr key={idx}>
                                <td>
                                    {superhero.name}
                                </td>
                                <td>
                                    {superhero.superPower}
                                </td>
                                <td>
                                    {superhero.humilityScore}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;