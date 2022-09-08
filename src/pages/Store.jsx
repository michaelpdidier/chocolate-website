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
            <div id='store-header'>
                <h1>Welcome to our Chocolate Store!</h1>
                <p>This store is currently under construction. And, I'm still deciding whether we want a store at all. </p>
                <p> Maybe we just want to just give away all of our chocolate, because we love sharing the love. </p>
            </div>
            <section className="cards-list">
                {chocolateBars}
            </section>
        </main>
    );
};

export default Store;

