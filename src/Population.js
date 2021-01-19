import React, { useEffect, useState } from 'react';
import './Population.css';
import {POPULATION_API} from './Constants';

function State(props) {
    const {name, pop} = props;
    return (<tr>
        <td>{name}</td>
        <td>{pop}</td>
    </tr>)
}

function Population() {
    const [data, setData] = useState([]);

    // Get Population Data
    useEffect(() => {
        fetch(POPULATION_API).then((accept) => {
            let data = accept.json();
            return data;
        }).then((data) => {
            setData(data);
        });
    }, []);

    // Get Senators?
    useEffect(() => {
        const senatePage = "https://www.senate.gov/senators/index.htm";
        fetch(senatePage).then((accept) => {
            console.log(accept);
            return accept.text();
        }).then((data) => {
            console.log(data);
        });
    })

    const states = data.slice(1).map((value) => {
        return <State name={value[0]} pop={value[1]} key={value[2]} />
    });
    return <div>
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Population
                    </th>
                </tr>
            </thead>
            <tbody>
                {states}
            </tbody>
        </table>
    </div>
}

export default Population;
