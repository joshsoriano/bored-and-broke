# User Manual
This document explains how to run and use the Bored & Broke application.

### Run the Bored & Broke Application Locally

To run the Bored & Broke application, first clone the repository with the command:                
`git clone https://github.com/joshsoriano/bored-and-broke.git`           

![clone url](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/gitclone.png)

Then run the following command:                
`npm install`           
Next, change the database that your application will access by modifying the db/index.js file.           
![database index file](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/dbindex.png)

OPTIONAL: If you want to seed the database with some fake information, run the command:            
`npm run seed`               
Finally, run the command:              
`npm start`                  
This starts the application locally on your computer using your default browser. Access it on any browser by going to:     `http://localhost:3000`      
![application in the browser](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/app.png)

### Stop the Application
To stop the application, hit `ctrl + C` in the command prompt and then type `Y` when prompted.          
Delete the directory that was created when the repository was cloned in order to remove this application from your computer.          
