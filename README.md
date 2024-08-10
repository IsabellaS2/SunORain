# SunORain

SunORain is a weather application that allows users to get the current weather information for any city in the world. The app fetches weather data from the OpenWeatherMap API and presents it in a user-friendly interface. 

## Features

- **Get Current Weather**: Enter a city name to get the current weather conditions, including temperature, in Celsius, Fahrenheit, and Kelvin.
- **Responsive Design**: The app is designed to work on various screen sizes, including mobile devices.
- **Dynamic Weather Icons**: The app displays weather icons that change based on the current temperature.
- **Fun Weather Texts**: Provides fun and engaging text based on the current temperature.
- **Error Handling**: Handles errors gracefully with user-friendly messages and automatic redirection.


## Technologies Used

- **Frontend**: HTML, CSS, TypeScript, EJS (Embedded JavaScript templates)
- **Backend**: Node.js, Express
- **API**: OpenWeatherMap API

## Usage

### Home Page:

1. Enter a city name in the input field.
2. Click the "Get Weather" button to fetch and display the weather data.

### Weather Page:

- Displays the current weather information for the specified city.
- Provides buttons to convert the temperature to Celsius, Fahrenheit, or Kelvin.

### About Page:

- Provides instructions on how to use the app.

### Error Handling:

- If an error occurs (e.g., invalid city name), an error page is displayed with a message and automatic redirection to the home page.

## Code Overview

### Server Setup (`server.ts`)

- **Dependencies**: Imports necessary packages like Express, dotenv, bodyParser, express-validator, and node-fetch.
- **App Configuration**: Sets up middleware, including static file serving and body parsing.
- **Routes**:
  - **GET `/`**: Renders the home page.
  - **POST `/`**: Validates the city input, fetches weather data, and renders the weather page or error page.
  - **GET `/about`**: Renders the about page.
- **Weather Data Fetching**: fetchWeatherFromAPI function makes a request to the OpenWeatherMap API and returns the weather data.

### Views (`views/`)

- **EJS Templates**: Used for rendering dynamic content on the server side.
- **Home Page (`home.ejs`)**: Contains the form for entering the city name.
- **Weather Page (`weather.ejs`)**: Displays the weather information and includes temperature conversion functionality.
- **Error Page (`error.ejs`)**: Displays an error message and redirects to the home page.
- **About Page (`about.ejs`)**: Provides information on how to use the app.

### Static Files (`public/`)

- **CSS (`styles.css`)**: Contains styles for the app, including responsive design rules.
- **JavaScript (`index.js`)**: Handles client-side logic (if any).
- **Images**: Contains weather icons used on the weather page.


## Run

```bash
npm run dev 
npm start
```
