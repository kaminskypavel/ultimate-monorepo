import * as express from 'express';
import { johnDoe, User } from '@ultimate-monorepo/models';
const app = express();
const port = 3001; // default port to listen

const user: User = johnDoe;

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.json(user);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
