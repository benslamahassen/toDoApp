import app from './app';
import * as https from 'https';
import * as fs from 'fs';
const PORT = 3000;

const httpsOptions = {
	key: fs.readFileSync('./lib/config/key.pem'),
	cert: fs.readFileSync('./lib/config/cert.pem')
}
https.createServer(httpsOptions, app).listen(PORT, () => {
	console.log('Express server listening on port ' + PORT);
})
