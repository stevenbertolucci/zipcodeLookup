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
Since I written this app using React, requesting data is very simple by using the fetch method to request data from the backend server, which is from Big Data Cloud API. 

The URL that I used is: `https://api.bigdatacloud.net/data/reverse-geocode-client?city={query}&localityLanguage=en`

The code to fetch data from Big Data Cloud API is: 
async function getLocation() {
        const response = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?city={query}&localityLanguage=en")
        const jsonData = await response.json()
        setQuery(jsonData)
        console.log(jsonData)
        console.log(jsonData.postcode)
    }

## UML Diagram
![UML Diagram](https://user-images.githubusercontent.com/13703308/236877383-c2a2fdf7-7b51-4d1d-b9f6-94c472b8c0c0.png)


