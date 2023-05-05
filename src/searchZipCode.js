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
        setQuery(e.target.thecity)

        // Displays city info
        getLocation({city: `${query}`})
        .then((jsonResult => {
            console.log('Asynchronous "then" result:', jsonResult);
        })
        .catch(function(error) {
            console.error('Asynchronous "then" error:', error);
        }));

        (async function() {
            try {
                var jsonResult = await getLocation({city: `${query}`});
                console.log('Asynchronous "await" result:', jsonResult);
            } catch (error) {
                console.error('Asynchronous "await" error:', error);
        }
    })();

    async function getLocation() {
        const response = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?city={query}&localityLanguage=en")
        const jsonData = await response.json()
        setQuery(jsonData)
        console.log(jsonData)
        console.log(jsonData.postcode)
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
        <input
          type="text"
          name="thecity"
          className="input"
          placeholder={`"Type in the City"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <p className="App-p">{query.city}</p>
      <p className="App-p">{query.principalSubdivision}</p>
      <p className="App-p">{query.postcode}</p>
    </>
  );
}