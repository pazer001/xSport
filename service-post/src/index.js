import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';

const postRouter = require('./routes/postRouter');

const PORT = 8083;
const SERVICE_NAME = 'post';

const app = express();

// Basic middleware
app.use(helmet());
app.use(compression({level: 9}));
app.use(bodyParser.json());


app.use('/post', postRouter);

app.listen(PORT, () => console.log(`Service ${SERVICE_NAME} is running on port ${PORT}`));