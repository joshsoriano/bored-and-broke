# 10.0 Testing
## 10.1 Unit Test Plan 
This portion of our document serves to explain the software development process that will be used to make the tests needed for our application. The following sections will discuss our software testing strategies and outline the Unit Test and Integration plans that we will use in the coming weeks. Overall this document aims to explain how we will test our application at all of it’s various levels. 

### 10.1.1 Unit Test Descriptions
#### 10.1.1.1 Activity
The activity.js functionality will be tested with mock API responses. ActivityTest.js will create responses that will then be parsed into activity objects by activity.js’s retrieve() function. The output of that function will be checked to see that the objects are created as expected. 

#### 10.1.1.2 Deduplicator
The deduplicator.js functionality will be tested by inputting various lists of activity objects and calling getUniqueActivities() from the deduplicatorTest.js file. Then it will be asserted that the returned list of activities is the expected list. This list would have no duplicates. A test database will be created using sequelize-mock in order to mockif the activities are already in the database or not.

#### 10.1.1.3 Database
The database.js functions will be tested using sequelize-mock. Unit tests for every function will be created in the databaseTest.js file to check that their outputs match what is expected.
#### 10.1.1.4 Sequelize
The sequelize.js file connects to our actual database. This is tested with an authentication function that asserts true when the connection is able to be established. This is in sequelizeTest.js.
#### 10.1.1.5 Models 
The models.js file defines models which represent tables of our database. Calling sequelize.sync() after the models have been defined and manually checking what the database looks like from the MySQL workbench application is sufficient to see that the models are creating the tables as expected.

### 10.2.1 Integration Test Descriptions 

#### 10.2.1.1 SavedActivities 
Each saved activity will have a “More Info” button, and clicking it will show the third state of our singleActivityModal. 
Pressing the “unsave button” on an activity will successfully remove it from the saved activities page. 

#### 10.2.1.2 Homepage 
The “search” button successfully applies the user’s filters and returns the activities they are looking for
The “More info” button on each activity brings up the savedActivityModal. 

#### 10.2.1.3 Single Activity Modal
Once a user clicks “save”, the input for a tagline appears. This tagline is saved. If a user clicks “Skip” on the tagline process OR if he/she clicks “save” of their inputted tagline, the carousel of users who also saved this event will appear. 
The “exit” button on the modal will take the user back to their original screen.

#### 10.2.1.4 Activity
The Homepage should display many Activities which each display a picture, a title, and a description.
Upon clicking "More Info", a Single Activity Modal should appear. 

#### 10.2.1.5 LoginCreateAccount
When navigating to boredbroke.com, the first page to appear should be the LoginCreateAccount page.
If the user has previously logged in, the LoginCreateAccount page should automatically redirect to the Homepage. 
If the user has not previously logged in, the LoginCreateAccount page should appear with an active "Continue with Facebook" button. 

#### 10.2.1.6 LoginButton
When the user clicks the "Continue with Facebook" button, a new window should open allowing them to login to Bored & Broke using Facebook. 
Upon clicking "Cancel", the user should be redirected back to the LoginCreateAccount page. 
Upon clicking "OK", the user should be redirected to the Homepage of Bored & Broke. 
The user's ID from Facebook should be stored. 

#### 10.2.1.7 NavBar
Upon clicking the user dropdown menu in the NavBar, the user should see four options: Homepage, Saved Activities, Settings, and Logout. 
When the user clicks Homepage, they should be redirected to the Homepage. 
When the user clicks Saved Activities, they should be redirected to the Saved Activities page. 
When the user clicks Settings, they should be redirected to the settings page. 
When the user clicks Logout, they should be redirected to the LoginCreateAccount page and be logged out from Bored & Broke on Facebook. 

#### 10.2.1.8 Settings
When the user visits the Settings page, they should see the input field to change the name associated with their account.
The email that is linked to their account should be displayed, but the user should not be able to modify it.
The user should be able to enter a new Bio or modify an existing Bio for their account.
If the user would like to no longer use the Bored&Broke application, they should be able to deactivate their account, and by doing so, be redirected to the Login page.
The user should be able to save their changes and return to the homepage.

#### 10.2.1.9 HomepageSettings
When the user is on the Homepage, they should see three search parameters to filter events near them.
There should be an input field for the user to enter the zipcode they would like to search within.
The user should be able to pick a radius in miles for the distance they would like to search within.
The user should be able to set a maximum amount of money for the events to cost.
There should be a Search button for the user to apply the search parameters to the Activity Feed.

## 10.3 Module Dependencies
The database.js file makes references activity.js, sequelize.js, and models.js. Since it is dependent on their outputs, the tests for database.js should be completed afterwards. 

![module dependencies](https://raw.githubusercontent.com/joshsoriano/bored-and-broke/master/documents/test%20plan%20document/moduleDependencies.png)
