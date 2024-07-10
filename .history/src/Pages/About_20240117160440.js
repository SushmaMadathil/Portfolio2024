import React from 'react';
import '../Stylesheets/Introduction.scss';
//import '../Stylesheets/Typography.scss';

function Introduction(props) {
    return (
        <div className="background">
        <div className="logo-img" >S K M</div>

            <div className="heading-primary">
              <div className="heading-primary--main">
                  {console.log(props)}
                {props.data.name}
                </div>
                <div className="heading-primary--sub">{props.data.label}</div>
            </div>
  



            
        </div>
    )
}


export default Introduction;