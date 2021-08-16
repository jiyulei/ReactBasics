import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's go to beach!",
        iconName: "sun",
    },

    winter : {
        text: "it's chilly!",
        iconName: "snowflake",
    }
}

const getSeaon = (lat, month) =>{
    if(month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter'; 
    } else {
        return lat < 0 ? 'summer' : 'winter'; 
    }
}

const SeasonDisplay = props => {
    const season = getSeaon(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
   
    return <div className={`seasonDisplay ${season}`}> 
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{ text }</h1>
        <i className={`icon-right massive ${iconName} icon`} />
     </div>;
};

export default SeasonDisplay;