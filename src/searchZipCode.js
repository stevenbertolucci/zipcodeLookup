import React, { useState } from "react";

export default function SearchZipCode() {
    const [query, setQuery] = useState([]);

    if ({query} === "") {
      alert("Please enter a city.")
    }

    // Waits for user to send City Info
    const searchZipCode = async (e) => {
        e.preventDefault();
        console.log("Submitting the Form");
        getLocation()
        

    async function getLocation() {
        const response = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?city={query}&localityLanguage=en")
        const jsonData = await response.json()
        setQuery(jsonData)
        console.log(jsonData)
        console.log(jsonData.postcode)
        console.log("Data received!")
    }
      };

  // Display the output for testing  
  return (
    <>
        <form className="form" onSubmit={searchZipCode}> 
        <label className="label" htmlFor="query"> 
          {" "}
          City:
        </label>
        
        <button 
          type="submit" 
          name="thecity"
          className="button"
          value={query}
          onClick={(e) => setQuery(e.target.value)}>
          Search
        </button>
      </form>
      <p className="App-p">{query.city}</p>
      <p className="App-p">{query.principalSubdivision}</p>
      <p className="App-p">{query.postcode}</p>
    </>
  );
}