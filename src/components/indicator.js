import React from 'react';

function Indicator(props) {

    let cardClass = "card mb-3";
    let data = "";

    switch(props.category) {
        case "satisfaction":
            if (props.data > .85) {
                cardClass += " bg-success text-white";
            } else if (props.data > .5) {
                cardClass += " bg-warning text-white";
            } else {
                cardClass += " bg-danger text-white";
            }

            data = Math.ceil(props.data * 100) + " %";
            break;
        case "complaints":
            if (props.data < 3) {
                cardClass += " bg-success text-white";
            } else if (props.data < 10) {
                cardClass += " bg-warning text-white";
            } else {
                cardClass += " bg-danger text-white";
            }

            data = props.data;
            break;
        case "medical":
            if (props.data < .01) {
                cardClass += " bg-success text-white";
            } else if (props.data < .1) {
                cardClass += " bg-warning text-white";
            } else {
                cardClass += " bg-danger text-white";
            }

            data = Math.ceil(props.data * 100) + " %";
            break;
        case "flow":
            data = props.data;
            break;
        default:
    }

    return (
        <div className={cardClass}>
            <div className="card-body">
                <h6 className="card-subtitle mb-2">{props.name}</h6>
                <h5 className="card-title">{data}</h5>
            </div>
        </div>
    );
}

export default Indicator;