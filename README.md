# Zip Code Lookup

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4500](http://localhost:4500) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm install react-dom`

Needed for navigation

### `npm install react-scripts`

Needed to run the React App

## What this App Does

This microservice app looks up the city of the user and it returns a JSON object of the user's location. I wrote code to display the City, State, and Zipcode on the screen for testing purposes. 

This app will be on different port than The Directory so that it can be running 99.99% of the time, listening for request from users. 

## Which files to use?

The code for the zip code lookup will be in /src folder and the file is: searchZipCode.js
You may edit the html code to get rid of it or change it. Feel free to do whatever you desire. 

## How to REQUEST Data
Requesting data is very simple by using the fetch method to request data from the backend server, which is from Big Data Cloud API. 

The URL that I used is: `https://api.bigdatacloud.net/data/reverse-geocode-client?city={query}&localityLanguage=en`

The code to fetch data from Big Data Cloud API is: 
```JS
async function getLocation() {
        const response = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?city={query}&localityLanguage=en")
        ...
        ...
        ...
    }
```

## How to RECEIVE Data
Since I written the code using React, it is a little different from using Node.js but it is very similar. When your application calls my UI on port 4500, my UI will take in the location of the user and it will send you the data of the current geolocation of that user.

```JS
async function getLocation() {
        const response = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?city={query}&localityLanguage=en")
        const jsonData = await response.json()
        setQuery(jsonData)
        console.log(jsonData)
        console.log(jsonData.postcode)
    }
```
In the complete code above, the `getLocation()` function sends the geolocation of the user to the Big Data Cloud backend then the backend will, if successful, send the requested data back to you. On success, the response will be saved in JSON to the variable `jsonData`. Then we can set the data to `setQuery(jsonData)` to save the content of the response. I included the code `console.log(jsonData)` so that you can see the entire response from Big Data Cloud API. Additionally, since your UI only wanted to display the zipcode, I attached the code `console.log(jsonData.postcode)` so that your UI can only display the zip code rather than the entire JSON response.  

Successful Response will look like this: 
```JS
{
  "latitude": 32.81999969482422,
  "longitude": -116.91999816894531,
  "continent": "North America",
  "lookupSource": "ip geolocation",
  "continentCode": "NA",
  "localityLanguageRequested": "en",
  "city": "San Diego",
  "countryName": "United States of America (the)",
  "countryCode": "US",
  "postcode": "92021",
  "principalSubdivision": "California",
  "principalSubdivisionCode": "US-CA",
  "plusCode": "8545R39J+X2",
  "locality": "Winter Gardens",
  "localityInfo": {
    "administrative": [
      ...
      ...
      ...
      ...
}
```

## UML Diagram
![UML Diagram](https://user-images.githubusercontent.com/13703308/236877383-c2a2fdf7-7b51-4d1d-b9f6-94c472b8c0c0.png)


