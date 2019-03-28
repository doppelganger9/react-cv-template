import React from 'react';

function renderLine({icon, label, years}) {
    return (
        <li>
            <h4>
                <div style={{width: '1em', display: 'inline-block', textAlign:'center'}}><i className={`fa fa-${icon}`}></i></div>
                <div style={{width: '3.5em', display: 'inline-block', textAlign:'center'}}>{label}:</div>
                <div style={{width: '3em', display: 'inline-block', textAlign:'right'}}><em>{years} ans</em></div>
            </h4>
        </li>
    );
}


export default function() {
    const xpLines = [
        {icon:'cloud', label:'Web', years:17},
        {icon:'line-chart', label:'Agile', years:11},
        {icon:'mobile', label:'Mobile', years:8},
    ];
    return (
        <div className="container-block" style={{ backgroundColor: 'rgba(0,0,0,.1)', color:'white'}}>
            <ul className="list-unstyled">
                {xpLines.map(renderLine)}
            </ul>
        </div>
    );
}