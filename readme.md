This is a basic Alexa Skill App written in NodeJS. 
###### How to use
* Clone the repo
* `npm install`
* To start the server, use `node index.js`
    * This will run the application on port 3000
* Use `ngrok` to allow localhost:3000 to be tunnelled via `http`
    * `./ngrok http 3000`
* In Amazon Developer Console update the *interaction model* using `intent.json` and `utterances.txt`
* In configuration section of Amazon Developer Console, select HTTPS and use the `ngrok` endpoint
* Test via Simulator and also on the Echo, it should work!