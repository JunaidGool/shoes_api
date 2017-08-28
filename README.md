# Shoes_API
### A Rest-API that :
* Lists all the shoes that are availble within the current stock.
* Filter for all the shoes for a given brand that are available.
* Filter for all the shoes for a given size that are available.
* Filter for all the shoes for a given brand and size that are available.
* Updates the stock levels when a shoe is sold.
* Adds a new shoe to the available stock.

### Getting Started
* Clone, download or fork this respository https://github.com/JunaidGool/shoes_api to your machine from GitHub.

### Prerequisites
* A prefered text editor or IDE which would allow you to write your desired code.
  https://en.wikipedia.org/wiki/Integrated_development_environment<br/>
  https://en.wikipedia.org/wiki/Text_editor
  
* A prefered CLI (command line interface).<br/>
  https://en.wikipedia.org/wiki/Command-line_interface
  
* A stable version of node.js for your operating system requirements.</br>
  https://nodejs.org </br>
  https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm

* A stable version of MongoDB.<br/>
  https://www.mongodb.com/what-is-mongodb
  
* RoboMongo (optional).<br/>
  https://robomongo.org/
  
* Postman (optional).<br/>
  https://www.getpostman.com/
  
### Installing
1. Access the package.json file, this file contains all the required dependencies to be installed.
   Below is what the package.json file will look like.

    {<br/>
  "name": "shoes-rest-api",<br/>
  "version": "1.0.0",<br/>
  "description": "",<br/>
  "main": "index.js",<br/>
  "scripts": {<br/>
    "test": "echo \"Error: no test specified\" && exit 1"<br/>
  },<br/>
  "engines": {<br/>
    "node": "6.10.2"<br/>
  },<br/>
  "author": "",<br/>
  "license": "ISC",<br/>
  "dependencies": {<br/>
    "body-parser": "^1.17.2",<br/>
    "express": "^4.15.3",<br/>
    "mongoose": "^4.11.5",<br/>
    "multer": "^1.3.0"<br/>
  }<br/>
}<br/>

To find out more about these dependencies please view the links below
* Mongoose.</br>
  https://www.npmjs.com/package/mongoose

* ExpressJS.</br>
  https://en.wikipedia.org/wiki/Express.js<br/>
  https://expressjs.com<br/>

* Body-Parser.</br>
  https://www.npmjs.com/package/body-parser
  
* Multer. </br>
  https://www.npmjs.com/package/multer
  
2. Open your CLI (command line interface) and navigate to your working folder.
3. When you have navigated to the working folder, input this command in your CLI.
   * npm install --save</br>
   This will install all the required dependencies.<br/>
4. Your development environment will now be setup.

### Starting the APP
1. Open mongoDB and get your server started.
   https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/ <br/>
   https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-ubuntu/ <br/>
   https://treehouse.github.io/installation-guides/mac/mongo-mac.html <br/>
  
2. On a seperate screen on your CLI, navigate to your working folder.Once you are in the appropriate folder
   input this command * nodemon
  



  




