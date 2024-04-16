import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { query, validationResult } from "express-validator";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Define validation rules for the city query parameter
const validateCityInput = [
  query("city")
];

app.get("/", (req: Request, res: Response) => {
  res.render("home.ejs");
});

app.post("/", validateCityInput, (req: Request, res: Response) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("error.ejs");
  }
  //

  // If validation succeeds, extract the city from the request body
  const city = req.body.city as string;

  // Send a success response with "yay"
  res.render('weather.ejs')
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
