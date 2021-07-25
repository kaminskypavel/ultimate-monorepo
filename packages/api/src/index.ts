import * as express from "express";
import * as models from "@ultimate-monorepo/models";
const app = express();
const port = 3000; // default port to listen

console.log(models);
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!!");
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
