import React from "react";

type CarType = {
    manufacturer: string
    model: string
}

type NewComponentType = {
    topCars: CarType[]
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <table>
            <tbody>
            {props.topCars.map((objCars, index) => {
                return(
                    <tr key={index}>
                        <th>{index+1}</th>
                        <td>{objCars.manufacturer}</td>
                        <td>{objCars.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )

}