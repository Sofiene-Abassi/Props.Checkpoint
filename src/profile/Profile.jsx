import React from 'react'
import PropTypes from "prop-types";

function Profile(props) {
    return (
        <div>
            <h1 style={{fontFamily:"Papyrus"}}>My name is {props.FullName} </h1>
            <h2 style={{textAlign:"center"}}>{props.Bio}</h2>
            <h3 style={{color:"blue",fontFamily:"Lucida Handwriting"}}>He is also a {props.Profession}</h3>
            {props.children}
            {props.handleAlert(props.FullName)}

        </div>
    )
  
    
}



Profile.propTypes = {
    FullName : PropTypes.string,
    Bio : PropTypes.string,
    Profession : PropTypes.string,
};
Profile.defaultProps = {
    FullName: "The Batman",
    Bio: "Super Hero",
    Profession: "Detective and Crime Fighter",

   };

   export default Profile;
