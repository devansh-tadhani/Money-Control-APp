import React from "react";

export default function NEWS(props){
    return (
        <div>
            <h4>{props.heading}</h4>
            <p>{props.para}</p>
            <img
                src={props.imgUrl} alt="news img"/>
            <ul>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
            </ul>
            <hr/>
        </div>
    );
}