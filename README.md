# About

This is a Roman numeral converter that allows you to convert a number (1-3999) to a Roman numeral. It contains two parts: the server and the client-ui.

## Run the server

1) `cd server`;
2) `npm install` to install packages;
3) `npm start` to run the server: http://localhost:8080/romannumeral?query={integer};
4) `npm test` to test server APIs.

## Run the client ui

1) `cd client-ui`;
2) `npm install` to install packages;
3) `npm start` to run the client UI: http://localhost:3000;
4) `npm test` to test client application.

## Run the application with docker

1) In /client-ui/package.json, change `proxy` to `http://node-server:8080`;
2) `docker-compose up --build` to build and run node-server and react-client-ui containers;
3) open the ui in browser for testing: http://localhost:3000.

## File structure

root
├── client-ui
│ ├── node_modules
│ ├── public
│ ├── src
│ │ ├── App.css
│ │ ├── App.js
│ │ └── App.test.js
│ │ └── index.js
│ ├── package-lock.json
│ ├── Dcokerfile
│ ├── package.json
├── server
│ ├── node_modules
│ ├── Dcokerfile
│ ├── index.js
│ ├── package-lock.json
│ ├── package.json
│ ├── test.js
│ ├── utils.js
├── docker-compose.yml
├── README.md

## Dependencies

### server
1) @express is used as the server as it is simple and easy to use.
2) @jest and @supertest are used for API testing.
3) @winton is used as logging library as it provides multiple log levels, transport, and structured logging (logs can be found in the automatically generated app.log file). To further centralizing logs in cloud, Elasticsearch (https://www.elastic.co/webinars/introduction-elk-stack) is a good choice, and Grafana (https://grafana.com/) can be used for monitoring application metrics.

### client-ui
1) @adobe/react-spectrum is used as a component library as it is a powerful UI tool and super easy to use.
2) @jest and @testing-library are used for client testing.
