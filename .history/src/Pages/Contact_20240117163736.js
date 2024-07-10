import React from 'react';

function Contact() {
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