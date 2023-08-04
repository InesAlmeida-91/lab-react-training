import React, { useState } from "react";
import profiles from "../data/berlin.json";

function FaceBook() {  
    const [countries, setCountries] = useState("All");
    
    const allCountries = [];
        profiles.forEach((profile) => {
        if (!allCountries.includes(profile.country)) {//if the country name is not already  in the array
            allCountries.push(profile.country);
        }
        });
        
    const countryFilter = (selectedCountry) => {
        setCountries(selectedCountry);
        };
  
    return (
      <div>
        <div>
          {allCountries.map((country) => (
            <button key={country} onClick={() => countryFilter(country)} style={{background: countries === country ? "blue" : "transparent"}}>
              {country}
            </button>
          ))}
          <button onClick={() => countryFilter("All")}style={{background: countries === "All" ? "blue" : "transparent"}}>
            All
          </button>
        </div>

        {profiles.map((profile) => (
          <div key={profile.name} className="profile-container" style={{background: countries === profile.country ? "blue" : "transparent"}}>
            <div>
              <img className="profile-img" src={profile.img} alt="profile img" />
            </div>
            <div className="profile-info-container">
              <p>First Name: {profile.firstName}</p>
              <p>Last Name: {profile.lastName}</p>
              <p>Country: {profile.country}</p>
              <p>Type: {profile.isStudent ? "Student" : "Teacher"}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  
  export default FaceBook;