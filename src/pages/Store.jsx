import React from 'react';
import Card from "../components/Card"

import chocolateBarData from '../data/chocolateBarData.jsx'

const Store = () => {
    /* This generates a map of component objects with the data stored in chocolateBarData
        already passed into them. It's basically a map of <Card /> components 
    */
    const chocolateBars = chocolateBarData.map(item => {
        return (
            <Card
                key={item.id} // you need a key element to prevent warning
                {...item}
            />
        )
    })

    return (
        <main>
            <section className="cards-list">
                {chocolateBars}
            </section>
        </main>
    );
};

export default Store;

