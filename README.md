![Bored & Broke](https://github.com/joshsoriano/bored-and-broke/blob/master/src/images/logo-black.png)

###### Mary Alverson, Mathew Sanders, Megan Karbowski, Josh Soriano, Jordan Woods, George Sarantinos and Mackenzie Tjogas 

Bored & Broke is a browser-based application that will allow users to connect based on activities that they have a mutual interest in. On the website, the user will be asked to create a profile, which will store information such as location, name, and saved activities. The user can then see and save activities in their location. When a user saves an activity, they are brought to that activity’s page. On that page, they can see more information about the activity, such as photos and exact location, as well as a list of the other users who have saved that activity. The user is then able to contact those users individually through a third-party messaging app. The Bored & Broke system has three components: a web frontend that will be comprised of various web pages, a database to store user and activity data, and a server backend that will call API’s and handle data transfer between the frontend and the database.

### www.boredbroke.com

### Run the Bored & Broke Application Locally

Install git and node before executing the following instrutions.           
To run the Bored & Broke application, first clone the repository with the command:                
`git clone https://github.com/joshsoriano/bored-and-broke.git`           

Then run the following commands:         
`cd bored-and-broke`               
`npm install`           
Next, change the database that your application will access by modifying the db/index.js file.           

OPTIONAL: If you want to seed the database with some fake information, run the command:            
`npm run seed`               
Finally, run the command:              
`npm start`                  
This starts the application locally on your computer using your default browser. Access it on any browser by going to:     `http://localhost:3000`      

### Stop the Application
To stop the application, hit `ctrl + C` in the command prompt and then type `Y` when prompted.          
Delete the directory that was created when the repository was cloned in order to remove this application from your computer.
