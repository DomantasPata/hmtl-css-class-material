import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

let cars = [
  {
    year: 2000,
    make: "Audi",
  },
  {
    year: 2020,
    make: "BMW",
  },
  {
    year: 2024,
    make: "Skoda",
  },
];

app.get("/", (req, res) => {
  const query = req.query;
  if (query.year) {
    const filterCars = cars.filter((c) => c.year === +req.query.year);
    res.json(filterCars);
  } else {
    res.json(cars);
  }
});

app.post("/", (req, res) => {
  const body = req.body;
  cars.push(body);
  res.json({
    success: true,
  });
});

app.put("/", (req, res) => {
  const body = req.body;
  cars[0].make = body.make;
  cars[0].year = body.year;

  res.json(cars[0]);
});

app.delete("/", (req, res) => {
  cars.splice(0, 1);

  res.json({
    success: true,
  });
});

app.listen(3000, () => console.log("app listening on port 3000"));
