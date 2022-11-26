import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <section className="footer">
            <p>{"© " + year + " by Michael & Catherine Didier"}</p>
        </section>
    )
}