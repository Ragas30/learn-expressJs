import express from "express";

const app = express();
const PORT = 3000;

// Route Middleware
const Middleware = (req, res, next) => {
  console.log("Middleware nya jalan kawan");
  next();
};

app.use(Middleware);

// Route Service
app.get("/", (req, res) => {
  res.json({
    succes: true,
    message: "Kontoll!!!",
  });
});

app.get("/error", (req, res, next) => {
  setTimeout(() => {
    try {
      throw new Error("Error Bangsat");
    } catch (err) {
      next(err);
    }
  }, 100);
});
const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    succes: false,
    message: "Kau Tidak Diterima CUiii!!!",
  });
};

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server berjalan di ${PORT}`);
});
