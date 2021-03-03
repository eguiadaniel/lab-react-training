import React, { Component } from 'react';
import profiles from './data/berlin.json';
import './FaceBook.css';


class Facebook extends Component {
  render() {
    // const {
    //   name,
    //   rating,
    //   img
    // } = this.props;

    console.log(profiles)

    // const listItems = profiles.forEach((profile) => {
    // console.log(profile.firstname))}
    
  const listItems = profiles.map((profile) =>
  // <div className="">{profile.firstName}</div>
  
  <div key={profile.firstname + profile.lastname} className="FaceBook">
  {/* <div className="FaceBook-img-container"> */}
  {/* <div className="FaceBook-img"> */}
          <img className="FaceBook-img" src={profile.img} alt={profile.lastname}></img>
            <ul> 
              <li><strong>First Name: </strong>{profile.firstName}</li>
              <li><strong>Last Name: </strong>{profile.lastName}</li>
              <li><strong>Country: </strong>{profile.country}</li>
              <li><strong>Type: </strong>{profile.isStudent && "Student" || "Teacher"}</li>
            </ul>
        {/* </div> */}
        {/* </div> */}
      </div>)

    return (
      <div className="Facebook">
         {listItems}
        {/*<div>
          <img src={profile.img}></img>
            <ul> 
              <li>{profile.firstname}</li>
              <li>{profile.lastname}</li>
              <li>{profile.country}</li>
              <li>{profile.type}</li>
            </ul>
        </div> */}
      </div>
    );
  }
}

export default Facebook;

// {"firstName": "Aaron", "lastName": "Newell", "country": "England", "img": "https://i.imgur.com/CFgX3Xx.png", "isStudent": false},


