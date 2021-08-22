import { SERVER_PORT } from './global/enviroment';
import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

//bodyparser
server.app.use( bodyParser.urlencoded({extended: true}));
server.app.use( bodyParser.json());

//CORS
server.app.use( cors({origin: true, credentials: true}));

//routes
server.app.use('/', router);

//launch server
server.start( () => {
    console.log(`The server is running in the port ${ SERVER_PORT }`);
});


//another comment
