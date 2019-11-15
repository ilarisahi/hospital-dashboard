import React from 'react';

function PersonnelResource(props) {
    let badgeClass = "align-self-center badge";

    if (props.inUse > (props.total * .9)) {
        badgeClass += " badge-danger";
    } else if (props.inUse > (props.total * 0.6 )) {
        badgeClass += " badge-warning";
    } else {
        badgeClass += " badge-success";
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="d-flex">{props.name} <span className={badgeClass}>{props.inUse}/{props.total}</span></h5>
            </div>
        </div>
    );
}

export default PersonnelResource;