import React from "react";
const WhoToFollowListItem = (
        {
        who = { userName: 'NASA', handle: 'nasa', avatarIcon: 'nasa.jpg' }
        }
    ) => {
    return(
    <li className="list-group-item">
    <div className="row">
        <div className="col-2 align-self-center">
            <img className="rounded-circle" height={40} src={`/images/${who.avatarIcon}`}/>
        </div>
        <div className="col-8 align-self-center">
            <div className="fw-bold">{who.userName}</div>
            <div>@{who.handle}</div>
        </div>
        <div className="col-2 align-self-center">
            <button className="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
    </div>
    </li>
    );
};

export default WhoToFollowListItem;