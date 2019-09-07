import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';

const sportRouter = require('./routes/sportRouter');

const PORT = 8081;
const SERVICE_NAME = 'sport';

const app = express();

// Basic middleware
app.use(helmet());
app.use(compression({level: 9}));
app.use(bodyParser.json());


app.use('/sport', sportRouter);

app.listen(PORT, () => console.log(`Service ${SERVICE_NAME} is running on port ${PORT}`));