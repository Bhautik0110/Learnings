
const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.status(200).send("Home");
});

app.get("*", (req, res) => {
    res.send("Out of town!");
})

app.listen(3000, () => console.log("App is listening!"));
