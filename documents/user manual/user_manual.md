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

### Using Bored & Broke

#### Login
![login](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/bb-login.png)
![fb login](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/facebook-login.png)

After navigating to www.boredbroke.com when not logged in, the user will automatically be taken to the login page. When the user clicks the “Continue with Facebook” button, they will be redirected to the Facebook login page. Clicking “OK” will close the Facebook login tab and bring them back to Bored & Broke which will redirect to the homepage. Clicking “Cancel” will bring them back to the Bored & Broke login page. 

If navigating to www.boredbroke.com while still logged in (did not click “Logout”), the login page will be bypassed and the user will be brought directly to the homepage. 

#### Homepage Settings

#### Navigation Bar
![nav](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/nav.png)
![nav dropdown](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/nav-dropdown.png)

Clicking on the user’s Facebook profile picture in the upper right-hand corner will prompt a dropdown which allows the users to toggle between the pages of Bored & Broke. The user’s options are the homepage, saved activities, settings, and logout (logs the user out of Bored & Broke and redirects them back to the login page). 

#### Activity Modal

#### Saved Activities
![saved activities](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/saved-activities.png)
![saved activities modal](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/saved-activities-modal.png)

On the saved activities page, the user can scroll to view all of the events that they have previously saved from the homepage. For each activity, they can click on the “More Info” button, which triggers a pop-up modal. On this modal, the user will be able to click through the other users that have saved this event using the arrows on either side of the carousel. The user can also click the “Unsave Event” button which will make the event disappear from the saved events page. 



