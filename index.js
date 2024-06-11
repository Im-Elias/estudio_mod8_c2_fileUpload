import express from "express";
import expressFileUpload from "express-fileupload";
import router from "./routes/router.js";

const app = express();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

//express-fileupload middleware
app.use(
  expressFileUpload({
    limits: {
      fileSize: 5000000, // 5 MB
    },
    abortOnLimit: true,
    responseOnLimit: "El peso del archivo excede el máximo permitido",
  })
);

//middleware
app.use(express.static("public"));

//Routes
app.use("/", router);
