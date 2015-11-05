Install:

- NodeJs
- Express
- Python 2.7

Steps
1. Add python install path to PATH environment variable
2. cd into the rita directory
3. Open rita\routes\index.js and fix path to python script
4. Run "npm i"
5. run "npm install -g nodemon"
6. Run "npm start" 
7. Go to http://localhost:3000/

FAQ (or some reasons I sat scratching my head)
Q: Why doesn't npm start work on debian
A: node installs to /usr/bin/nodejs, not /usr/bin/node as one would expect.  Create a symlink from /usr/bin.nodejs -> /usr/bin/node
