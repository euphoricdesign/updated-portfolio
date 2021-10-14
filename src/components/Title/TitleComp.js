import React from 'react';
import './TitleComp.scss'

const TitleComp = ({title, span}) => {
    return (
        <div className="title-wrapper">
            <h3 className="title">
                {title}
                <span>{span}</span>
            </h3>
        </div>
    );
};

export default TitleComp;