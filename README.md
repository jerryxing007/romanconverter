# About

This is a Roman numeral converter that allows you to convert a number (1-3999) to a Roman numeral. It contains two parts: the server and the client-ui.

## Run the server

1) `cd server`;
2) `npm install` to install packages;
3) `npm start` to run the server [http://localhost:8080/romannumeral?query={integer}];
4) `npm test` to test server APIs.

## Run the client

1) `cd client-ui`;
2) `npm install` to install packages;
3) `npm start` to run the client UI [http://localhost:3000];
4) `npm test` to test client application.

## File structure

root
├── client
│ ├── node_modules
│ ├── public
│ ├── src
│ │ ├── App.css
│ │ ├── App.js
│ │ └── App.test.js
│ │ └── index.js
│ ├── package-lock.json
│ ├── package.json
├── server
│ ├── node_modules
│ ├── index.js
│ ├── package-lock.json
│ ├── package.json
│ ├── test.js
│ ├── utils.js
├── README.md

## Dependencies

1) @express is used as the server as it is simple and easy to use.
2) @jest and @supertest are used for API testing.
3) @adobe/react-spectrum is used as a component library as it is a powerful UI tool and super easy to use.
4) @jest and @testing-library are used for client testing.
