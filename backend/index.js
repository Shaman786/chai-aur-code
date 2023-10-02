require('dotenv').config()
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("hiteshdotcom");
});


app.get("/login", (req, res) => {
    res.send("<h1>please login at chai aur code</h1>");
});

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur Code</h2>")
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});


const server = Bun.serve({
    port: 3000,
    fetch(req) {
        return new Response("Bun!");
    }
})
console.log(`Listening on http://localhost:${server.port} ...`);