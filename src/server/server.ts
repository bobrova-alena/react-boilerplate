import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import appPath from '../../utils/path';

config();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(appPath.clientDist));
app.use(express.static(appPath.public));

app.get('/*', function (req: Request, res: Response) {
  res.sendFile(appPath.client);
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
