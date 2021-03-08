import React, { Component } from 'react';
import profiles from './data/berlin.json';
import './FaceBook.css';

class Facebook extends React.Component {
  state = {
    profiles: profiles,
    selectedCountry : null
  }

  handleCountrySelect = (country) => {
    this.setState({
      selectedCountry: country
    })
    console.log(country)
  }

  render() {
    
    const countries = [];
    for (const profile of this.state.profiles) 
      {const country = profile.country;
      if(!countries.includes(country)){
        countries.push(country);
      }
    }

    return (
    <div>
      <span>{this.state.selectedCountry}</span><br></br>
      <button onClick={() => this.handleCountrySelect(null)} className={'facebook-btn ' + (this.selectedCountry === null ? 'highlighted' : '')}>All</button>
      {countries.map(country => <button key={country} onClick={() => this.handleCountrySelect(country)} className={'facebook-btn ' + (this.state.selectedCountry === country ? 'highlighted' : '')}>{country}</button>)}

      {this.state.profiles.map(profile => (

        <div key={profile.img} className={"profile " + (!this.state.selectedCountry || this.state.selectedCountry === profile.country ? 'highlighted' : '')}> 
          
          <img className="profile__image" src={profile.img} alt={profile.firstName+profile.lastName} />
          
          <ul className="profile__details">
            <li><strong>First Name: </strong>{profile.firstName}</li>
            <li><strong>Last Name: </strong>{profile.lastName}</li>
            <li><strong>Country: </strong>{profile.country}</li>
            <li><strong>Type: </strong> {profile.isStudent ? 'Student' : 'Teacher'}</li>
          </ul>
        
        </div>
      
      ))}
      </div>
  );
}
}



export default Facebook;

// {"firstName": "Aaron", "lastName": "Newell", "country": "England", "img": "https://i.imgur.com/CFgX3Xx.png", "isStudent": false},


