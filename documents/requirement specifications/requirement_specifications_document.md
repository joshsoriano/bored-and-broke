
### Requirements Specification Document
### Bored & Broke “B&B”
Social Activity Web-Based Application
<hr></hr>

### Table of Contents
Requirements Specification Document							           
Bored & Broke	 										           
Social Activity Web-Based Application 

#### 5 Requirements Specification
5.1   Introduction	 										           
5.2   CSCI Component Breakdown	 										           
5.3   Functional Requirements by CSC	 										           
&nbsp;&nbsp;5.3.1   Web Frontend Component	 										           
  5.3.2   Database Component	 										           
&nbsp;&nbsp;5.3.3   Server Component	 										           
5.4   Performance Requirements by CSC	 										           
5.5   Environmental Requirements by CSC	 										           
&nbsp;&nbsp;5.5.1   Development Environment Requirements	 										           
&nbsp;&nbsp;5.5.2   Execution Environment Requirements  	 										           
                                         
						          				           

### 5 Requirements Specification              
#### 5.1         Introduction
This Software Requirements Specification (SRS) documents the requirements for the Bored & Broke (B&B) Website Application. Bored & Broke is a browser-based application that will allow users to connect based on activities that they have a mutual interest in. On the website, the user will be asked to create a profile, which will store information such as location, name, and saved activities. The user can then see and save activities in their location. When a user saves an activity, they are brought to that activity’s page. On that page, they can see more information about the activity, such as photos and exact location, as well as a list of the other users who have saved that activity. The user is then able to contact those users individually through a third-party messaging app. The Bored & Broke system has three components: a web frontend that will be comprised of various web pages, a database to store user and activity data, and a server backend that will call API’s and handle data transfer between the frontend and the database.

![System Diagram](https://raw.githubusercontent.com/joshsoriano/Bored-and-Broke/master/Requirement%20Specifications/system-diagram.png)



#### 5.2    CSCI Component Breakdown
5.2.1    Web Frontend CSC  -- This component will be the interface for the 
application. It will consist of four pages and multiple activity modals. There 
will be the ability to create an account, adjust user settings, navigate through 
activities, save activities, and direct users to other user’s facebook pages.  							

&nbsp;&nbsp; 5.2.1.1    Login/Create Account Page CSU -- This unit will handle user login or account creation.      
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.1.1    Login With Facebook Button -- Initiates Facebook authentication via Facebook modal. Prompts user to login using their Facebook credentials.      										           
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.1.2    Create an Account Button -- Opens new window/tab linked to web address for Facebook account creation.     
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.1.3    Title module -- The title will include the web app name and page name.     		           
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.1.4    Logo module -- The web app logo is visible.       	 								 

&nbsp;&nbsp; 5.2.1.2    Settings Page CSU -- After creating an account with Facebook, first-time users will be shown a summary of the account information populated with information pulled from their public Facebook profile.     
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.2.1    Name Input Field module -- Input string for user’s name.             
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.2.2    Email Input Field module -- Input string for user’s email (associated with Facebook account); credential for access to web app.       										           
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.2.3    Password Input Field module -- Input string for user’s password; credential for access to web app.       
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.2.4    Location Input Field module -- Input string that filters activities based on their proximity to the location inputted.        										           
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.2.5    Price Range Slider module -- Slider that adjusts filter for desired price range of activities.       
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.2.6    Bio Input Field module -- Input string of with a maximum character limit. 	   					

&nbsp;&nbsp; 5.2.1.3    Homepage CSU -- This unit will be responsible for the organization and navigation of the activities. The page will also consist of ways to adjust specific settings and travel to other pages in the web frontend.          
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.3.1    Activities module -- Clickable objects that lead to activity modal.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.3.2    Price Slider module -- Slider that adjusts price range of activities.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.3.3    Location Input Field module -- Provides location for activities to be oriented around.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.3.4    Range Slider module -- Provides range around location that activities are located.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.3.5    Load Button module -- Loads activities based off information from price slider, range slider, and location input field.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.3.6    Drop-down Menu module -- Holds buttons that navigate to other pages.         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.3.6.1    Saved Activities Button -- Leads to Saved Activities Page.        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.3.6.1    Settings Button -- Leads to Settings Page.        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.3.6.1    Logout Button -- Logs out of account and leads to Login/Create Account Page.         


&nbsp;&nbsp; 5.2.1.4    Single Activity Modal CSU -- Holds information about a specific activity.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.4.1    Event information including date, location, time, and price.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.4.2    Carousel of profiles of those who also saved the event. Shows bio and event-specific taglines. Shows only a small number of profiles at a time.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.4.3    Message Button located under each profile -- Leads to the Facebook of the this user to accommodate messaging through Facebook.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.4.4    Right Arrow Button -- Leads to next set of attendees.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.4.5    Left Arrow Button -- Leads to previous set of attendees.         


&nbsp;&nbsp; 5.2.1.5    Saved Activities Page CSU -- Shows the user’s activities that they have saved through the Single Activity Modal.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.5.1    Page containing user’s saved events -- Thumbnails objects that lead to activity modal        
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.5.2    Drop-down Menu module -- Holds buttons that navigate to other pages        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.5.3    Scrollable Page           


5.2.2    Database CSC -- Will hold the user account information, as well as user’s saved activities.         
&nbsp;&nbsp; 5.2.2.1    Queries CSU -- units that will run queries on stored data        
&nbsp;&nbsp; 5.2.2.2    Indexing CSU -- units that will index stored data        
&nbsp;&nbsp; 5.2.2.3    Saving CSU -- units that will store data        



5.2.3    Server CSC -- This allows the user interface to interact with the database as well as various API’s. It will handle the transfer of information between the user and the database.        
&nbsp;&nbsp; 5.2.3.1    Activity information will be requested from various API’s using the user’s location and price range data.        
&nbsp;&nbsp; 5.2.3.2    The username and password of a user will be verified during login.        
&nbsp;&nbsp; 5.2.3.3    The user will be able to set and update their personal information, such as their price range, location and name.        
&nbsp;&nbsp; 5.2.3.4    Information for a specific activity can be retrieved from the database.        
&nbsp;&nbsp; 5.2.3.5   The user will be able to see their own information, such as their price range and name and th events they saved when they are logged in to the application.        
&nbsp;&nbsp; 5.2.3.6   An activity, including its information, can be saved to the database so that it can be retrieved later.        

#### 5.3     Functional Requirements by CSC        

5.3.1   Web Frontend 


5.3.1.1   Login/Create Account Page        
&nbsp;&nbsp; 5.3.1.1.1   The Login/Create Account Page should contain a “Login with Facebook” button.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.1.1.1    The “Login with Facebook” button should prompt a modal for users to log into Facebook using their Facebook credentials.        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.1.1.1.1 The modal should have input fields for the user’s email and password for Facebook.                
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.1.1.1.2 The modal should have a button to submit credentials.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.1.1.2   Logging in with Facebook should prompt a permissions dialog asking users to give permission for the app to receive their public info.        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.1.1.2.1 The permissions dialogue should contain a button to continue authentication.	        
5.3.1.1.2    The Login/Create Account Page shall contain a “Create an Account” button.        
&nbsp;&nbsp; 5.3.1.1.2.1    The “Create an Account” button should open up a new window/tab linked to Facebook’s “Create an Account” page.        
5.3.1.1.3    Successful login shall send a user to the homepage.        
5.3.1.1.4    Successful account creation shall send a user to the settings page.   


5.3.1.2   Settings Page         
&nbsp;&nbsp; 5.3.1.2.1    The Settings Page should, upon account creation, have the appropriate fields filled with information taken from the user’s public Facebook profile.        
&nbsp;&nbsp; 5.3.1.2.2    The Settings Page shall contain input fields for the following: Name, Email, Password, Bio, and Location.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.2.2.1    Input fields shall be editable.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.2.2.2    The Bio Input should have a maximum character limit.        
&nbsp;&nbsp; 5.3.1.2.3    The Settings Page shall contain a slider to adjust desired price range for activities.        
&nbsp;&nbsp; 5.3.1.2.4    The Settings Page shall have a button to save/submit changes made to the user’s settings.        


5.3.1.3   Homepage        
&nbsp;&nbsp; 5.3.1.3.1  The Homepage shall present activities.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.1.1    The activities should be listed vertically.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.1.2    The activities should be the width of the page.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.1.3    The activities shall be clickable.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.1.4    The activities shall lead to their specific modal upon click.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.1.5    The activities shall show the title of the activities.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.1.6    The activities shall show the location of the activities.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.1.7    The activities shall show the price of the activities.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.1.8    The activities should show an image of the activities.         
&nbsp;&nbsp; 5.3.1.3.2    The Homepage shall have a drop-down menu.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.2.1    The drop-down menu shall contain a button that leads to the saved activities page.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.2.2    The drop-down menu shall contain a button that leads to the settings page.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.2.3    The drop-down menu shall contain a button that logs out of the account.         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.2.3.1   The logout button shall lead to the login/create account page.         
&nbsp;&nbsp; 5.3.1.3.3    The Homepage shall have a slider to adjust the price range of the activities.         
&nbsp;&nbsp; 5.3.1.3.4    The Homepage shall have a slider to adjust the range of the activities from the given location.         
&nbsp;&nbsp; 5.3.1.3.5    The Homepage shall have a location input field for the activities to be located around.         
&nbsp;&nbsp; 5.3.1.3.5    The Homepage shall have a load button to refresh the activities.        
&nbsp;&nbsp; 5.3.1.3.6    The Homepage shall have a title section.	        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.6.1    The title section should have the application logo.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.3.6.2    The title section should have the application name.  


5.3.1.4   Single Event Modal        
&nbsp;&nbsp; 5.3.1.4.1   The Single Event Modal shall contain event information.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.4.1.1    Event information shall include the event location.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.4.1.2    Event information shall include the event price.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.4.1.3    Event information shall include the event time.         
&nbsp;&nbsp; 5.3.1.4.2    The single event modal should contain a carousel of profiles of users who saved the single event.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.4.2.1    The Carousel of profiles shall show a small subset of users at any given time.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.4.2.2    Each profile shall contain the user’s bios.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.4.2.3    Each profile shall contain the user’s event-specific taglines.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.4.2.4    Each profile shall contain a link to the user’s Facebook profile.        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.4.2.4.1    The link shall be clickable.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.4.2.5    The right arrow shall lead to the next subset of user profiles.        
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.4.2.6    The left arrow shall lead to the previous subset of user profiles.        


5.3.1.5   Saved Activities Page         
&nbsp;&nbsp; 5.3.1.5.1  The saved activities page shall show clickable thumbnails of user-saved activities.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.5.1.1 Each thumbnail should have a button to remove the event from the saved activities page.         
&nbsp;&nbsp;&nbsp;&nbsp; 5.3.1.5.1.2  Each thumbnail shall open a single event modal (see 5.3.1.4).        
&nbsp;&nbsp; 5.3.1.5.2  The saved activities page shall have a toggle to change view to the homepage.        
&nbsp;&nbsp; 5.3.1.5.3  The saved activities page shall be a scrollable page. 


5.3.2   Database 

5.3.2.1   The Database shall save User accounts.        
&nbsp;&nbsp; 5.3.2.1.1    User accounts shall contain their name.                        
&nbsp;&nbsp; 5.3.2.1.2    User accounts shall contain their email address.         
&nbsp;&nbsp; 5.3.2.1.3    User accounts shall contain their password.         
&nbsp;&nbsp; 5.3.2.1.4    User accounts shall contain their bio.        
&nbsp;&nbsp; 5.3.2.1.5    User accounts shall contain their location.        
&nbsp;&nbsp; 5.3.2.1.6    User accounts shall contain their price range.         
&nbsp;&nbsp; 5.3.2.1.7    User accounts shall contain a list of their saved events.        
&nbsp;&nbsp; 5.3.2.1.8    User accounts shall contain a connection to their Facebook.        
5.3.2.2    The Database shall save chosen Activities.        
&nbsp;&nbsp; 5.3.2.2.1    Activities shall contain the name of the activity.        
&nbsp;&nbsp; 5.3.2.2.2    Activities shall contain the price of the activity.        
&nbsp;&nbsp; 5.3.2.2.3    Activities shall contain the location of the activity.        
&nbsp;&nbsp; 5.3.2.2.4    Activities shall contain the date of the activity.        
&nbsp;&nbsp; 5.3.2.2.5    Activities shall contain the time it took place.        
&nbsp;&nbsp; 5.3.2.2.6    Activities shall contain a list of users that saved the activity.        
&nbsp;&nbsp; 5.3.2.2.7 Activities shall contain a unique Activity Id.        
5.3.2.3  The Database shall perform queries on stored data.        
5.3.2.4  The Database shall prevent errors from concurrent data modification. 


5.3.3   Server

5.3.3.1   There shall be a function that gathers activity information by making API calls.        
5.3.3.2    There shall be a function that verifies a user’s username and password by accessing the database.        
5.3.3.3   There shall be a function that saves a user’s information to the database.        
5.3.3.4   There shall be a function that returns a specific activity’s information from the database.        
5.3.3.5   There shall be a function that returns a specific user’s information from the database.        
5.3.3.6   There shall be a function that saves an activity’s information to the database.        


#### 5.4         Performance Requirements by CSC        
5.4.1    Login/Create Account Page Load Efficiency -- Upon entering URL of the web application, there should be no longer that a five second wait for the Login/Create Account Page to fully load.      
&nbsp;&nbsp; 5.4.1.1  Subordinate Control Elements -- Create account button immediately directs the users to the Facebook login modal.    
&nbsp;&nbsp;&nbsp;&nbsp; 5.4.1.1.1  Settings Page Load Efficiency -- After submission of Facebook credentials, the settings page loads in less than five seconds.    
&nbsp;&nbsp; 5.4.1.2    Transitional Immediacy --  Login With Facebook button immediately directs users to the Facebook account creation in a new window/tab.     


5.4.2    Homepage Load Efficiency -- Upon login, the Homepage will load in under five seconds.     


5.4.3    Interface -- All pages should load almost immediately as user navigates between the pages and modals of the frontend.     


5.4.4    Efficient Runtime -- API calls will run in at most five seconds.    
&nbsp;&nbsp; 5.4.4.1    Effective Updating -- Homepage will reload in at most five seconds if account parameters are adjusted in the settings, or on the Homepage when load button is clicked.    


5.4.5   Query Efficiency -- Database querying for account and saved activities should be under two seconds.  


5.4.6    Scalability -- Database will be structured for efficient data storage.   
&nbsp;&nbsp; 5.4.6.1    ACID Properties -- ACID properties will be implemented to ensure data safety and effectiveness of the database.   


5.4.7    Targeted Links -- Upon clicking a user’s account, redirect to their facebook page should take less than four seconds.    

#### 5.5     Environmental Requirements by CSC   
5.5.1    Developmental Environment Requirements.   
5.5.1.1 This application’s frontend shall use a JQuery, CSS, and HTML.  


5.5.2    Execution Environment Requirements     
&nbsp;&nbsp; 5.5.2.1    This application shall run on any browser that supports JavaScript.    
&nbsp;&nbsp; 5.5.2.2    To reach the application, the browser must have connection to the internet.    
 

