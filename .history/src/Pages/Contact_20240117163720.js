import React from 'react';
import '../Stylesheets/About.scss';

function About(props) {
    return (
        <div className="background">
        <div className="logo-img" >S K M</div>

            <div className="heading-primary">
              <div className="heading-primary--main">
                {props.data.name}
                </div>
                <div className="heading-primary--sub">{props.data.label}</div>
            </div>            
        </div>
    )
}


export default About;