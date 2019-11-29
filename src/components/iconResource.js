import React from 'react';

function IconResource(props) {
    let iconClass = "fas fa-" + props.icon;
    let badgeClass = "align-self-center badge";
    let value = props.value;

    if (props.inUse !== undefined && props.total !== undefined) {
        if (props.inUse > (props.total * .9)) {
            badgeClass += " badge-danger";
        } else if (props.inUse > (props.total * 0.6 )) {
            badgeClass += " badge-warning";
        } else {
            badgeClass += " badge-success";
        }

        value = props.inUse + "/" + props.total;
    }

    return (
        <div className="card">
            <div className="card-body">
                {props.description && (
                    <span className="icon-resource-description">{props.description}</span>
                )}
                <h5 className="d-flex"><i className={iconClass}></i><span className={badgeClass}>{value}</span></h5>
            </div>
        </div>
    );
}

export default IconResource;