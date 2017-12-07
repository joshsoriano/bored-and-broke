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

#### Navigation Bar
![nav](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/nav.png)
![nav dropdown](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/nav-dropdown.png)

Clicking on the user’s Facebook profile picture in the upper right-hand corner will prompt a dropdown which allows the users to toggle between the pages of Bored & Broke. The user’s options are the homepage, saved activities, settings, and logout (logs the user out of Bored & Broke and redirects them back to the login page). 

#### Saved Activities
![saved activities](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/saved-activities.png)
![saved activities modal](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/user%20manual/saved-activities-modal.png)

On the saved activities page, the user can scroll to view all of the events that they have previously saved from the homepage. For each activity, they can click on the “More Info” button, which triggers a pop-up modal. On this modal, the user will be able to click through the other users that have saved this event using the arrows on either side of the carousel. The user can also click the “Unsave Event” button which will make the event disappear from the saved events page. 

#### Settings   
The settings page is accessed by clicking on the “settings” option in the dropdown menu within the navigation bar at the top of the homepage. Once the user has been redirected to the page, they can change their display name and/or bio. The settings page also displays the email associated with the user’s account and allows them to deactivate their account. The user can deactivate their account by clicking on the “deactivate account” button. This button will expand with a dropdown making sure they really want to deactivate their account. The user can click the “NO!” button and the dropdown will close and the user can continue editing their settings. If the user decides they would actually like to deactivate their account then they can click the “Yes” button and their account will be removed from the database, they will be logged out of BoredBroke.com, and redirected to the Login/Create Account page.  

#### Homepage Settings  
When the user is on the homepage they can pick a city to search for events in with dropdown labeled “city”. Once the user clicks on the dropdown under “City:” they will be shown a list of cities to search within. The user can also select a maximum amount of money as another search parameter. The user can use the button on the slider under the _ label to set the event cost. Once the user has chosen a city and an amount of money, they can press the “Search” button to filter events according to their parameters.  

#### Activity Modal  
On the homepage, the user will see various activities within the city and price range they are searching. Each activiy has a “More Info” button that will open a pop-up window containing more information on that specific event. The popup window will show the user the event’s title, date, time, location, and price. Below this there will be a short description about the event if it has one. The user can save the event with the “Save Event” button at the bottom of the popup. If the user chooses to save the event, the popup will expand to show an input field for an optional tagline. The user can add a tagline about how they feel about this event or why they saved it and click “Save Tagline” or they can choose to not add a tagline by clicking “Skip”. Next the user will be able to see other people also interested in the event along with these user’s taglines if they have one. The user has the option to unsave events after saving them by clicking the “unsave” button on the popup window. The user is able to exit the popup window at anytime with the x button in the upper right corner of the window.  


