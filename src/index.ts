import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { query, validationResult } from "express-validator";
import fetch from "node-fetch";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const APIKey = process.env.APIKEY;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Define validation rules for the city query parameter
const validateCityInput = [query("city")];

app.get("/", (req: Request, res: Response) => {
  res.render("home.ejs");
});

app.post("/", validateCityInput, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("error.ejs");
    return;
  }

  // If validation succeeds, extract the city from the request body
  const city = req.body.city as string;

  try {
    const weatherData = await fetchWeatherFromAPI(city);
    res.render("weather.ejs", { weatherData });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.render("error.ejs");
  }
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

async function fetchWeatherFromAPI(city: string) {
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  const response = await fetch(APIUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch weather data for ${city}`);
  }
  return await response.json();
}

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
