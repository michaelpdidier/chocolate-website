import React from "react";
import { useMediaQuery } from 'react-responsive';

export default function Step(props) {

    /*
    properties: 
    id, media (image/video/gif), description
    */

    /*
        The color function alternates backghround color every fifth element
    */
    function color() {
        switch (props.id % 5) {
            case 0:
                return ('var(--dark-brown)')
            case 1:
                return ('var(--med-dark-brown)')
            case 2:
                return ('var(--light-brown)')
            case 3:
                return ('var(--main-brown)')
            case 4:
                return ('var(--med-light-brown')
        }
    }

    const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

    return (
        <section className="step" style={{"backgroundColor":color()}}>
            <div className="step--media" style={{"order":1}}>
                <img src={props.media} />
            </div>
            {/* the flexbox `order` attribute is used to conditionally reorder the image and description
            divs. On desktop image/description will alternate left right every other one.
            On mobile, the order will always be description -> image.  */}
            <div className="step--description" style={{"order": isMobile ? 0 : props.id % 2}}>
                <p>{props.description}</p>
            </div>
        </section>
    )
}