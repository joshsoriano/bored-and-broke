# Software Design Description Document

## 6.1 Introduction
This document presents the architecture and detailed design for the software for the Bored & Broke (B&B) project. This project will allow users to create an account using their Facebook account login information. They will then be able to browse through a selection of activities within a selected distance, get information about them, and save them to their saved page.  When saving an activity, the user can add an activity specific bio for other users, who have saved the activity, to see. After saving an activity, the user can look through the other bios for that event. The user can then contact another user by clicking on their activity specific bio, which will then lead them to Facebook messenger. 

### 6.1.1 System Objectives
The objective of this application is to provide users with activities to do that are within their budget. The activities shown are only ones located in their area. Their location, radius, and price range can easily be changed on multiple pages of the website. “Likes” are not displayed so true interest drives the attraction to events. Users are also given the opportunity to meet new people within their area who have saved the same events as them. Meeting new people based on their taglines and bios creates genuine connection, rather than interest based on appearances that is generally found in applications that use pictures. The site will be easy to navigate, with a dropdown provided on every page so the user can easily switch from one page to another. 

### 6.1.2 Hardware, Software, and Human Interfaces
#### 6.1.2.1 Human Interface: Mouse and Keyboard
In order to navigate through the interface, a user will make use of a mouse and a keyboard, which will allow the user to interact and initiate events on the web application through clicks and keypresses.
#### 6.1.2.2 Human Interface: Machine
Users will be required to use a machine in order to access the web application. This machine must be a desktop computer, laptop, or mobile device, all of which make use of a monitor or screen that allows an interface to be displayed. 
#### 6.1.2.4 Software Interface: Graphical User Interface (GUI)
Users will interact with Bored and Broke’s Graphical User Interface. This graphical interface makes use of different interface elements such as dropdown menus for navigation, image thumbnails to display a library of activities, modals for displaying a specific activity, and buttons typically used for submitting and saving user-modified information.
#### 6.1.2.5 Software Interface: Database
The database holds all the data from the web application. Data that will be stored include activities and user account information. The user interface interacts with the database in order to give the user the proper information they are searching for.
#### 6.1.2.6 Software Interface: Server
The server hosts the web application as well as all the information stored within the database.
#### 6.1.2.7 Hardware Interface: Wireless/Wired Networking
Since Bored and Broke is a web based application, a wired or wireless connection will be needed in order to access the application via a web browser.

## 6.2 Architectural Design
The overall design of our system is split up into four sets, the Web Frontend, Backend, AWS Elastic Beanstalk, and AWS RDS (PostgreSQL DB). The Web Frontend set of class definitions includes the display of the Login page, Homepage, Saved Activities, Activity Modal, and Settings page. The Backend set includes verifying the User’s Facebook login information, getting the activities from the various APIs, adding these activities to the database, displaying all of the activities, getting a single activity, getting the user’s saved activities, getting the user’s settings, changing or setting the user’s settings, and opening the database connection. The AWS Elastic Beanstalk set will include loading, building and deploying our web application. The AWS RDS set will include connecting to the web application. The Web Frontend set is connected to the Backend set and AWS Elastic Beanstalk set. The Backend set is connected to the Web Frontend, AWS Elastic Beanstalk and AWS RDS. The AWS set is connected to the Web Frontend and the Backend. The AWS RDS is connected to the Backend.

### 6.2.1 Major Software Components
#### 6.2.1.1 - Web Frontend
This component will be made up of four pages that allow the user to interact with the application. The first of the four pages is the Login/Create Account page, which will handle user login or account creation. Next is the Settings page, which will show user account information.  Third is the Homepage that will be populated with the activities that the user can navigate through.  Each activity, if clicked on, will lead to a single activity modal, which holds more information about the specific activity.  The final page is the Saved Activities page, which shows all of the activities that a user has saved from the Homepage. 
#### 6.2.1.2 - Database
This component will store all of the activity and user account information. Queries will be used to access the information within the database and apply it to the user interface, as well as save information, gained from the user interface, into the database.
#### 6.2.1.3 - Backend
This component allows the user interface to interact with the database and handle the constant transferring/requesting of data. Users will be able to view and adjust their account information, such as price range and location.  Furthermore, activities can be saved to the database in order for its information to be retrieved later. The backend will also handle the multiple different API calls that return activity information, as well as provide login/account creation capabilities. 

### 6.2.2 Major Software Interactions
The source code of the B&B source code is loaded onto an Amazon Web Services (AWS) Elastic Beanstalk. The AWS service then deploys the B&B application by running the code on a server. The Elastic Beanstalk allows the B&B application to send and accept HTTP requests, which calls the following API’s to gather information about various activities: Eventful, EventBrite, and TicketMaster. The Facebook Account API is also called to verify users through Facebook login.

The PostgreSQL database runs through the AWS Relational Database Service (RDS). The B&B application connects to the the database by opening a connection using the Sequelize.js package. Functions in the B&B application also use Sequelize.js to run SQL queries to input and retrieve information

### 6.2.3 Architectural Design Diagrams
#### UML Case Diagram
![Case Diagram](UML Case Diagram.PNG)
#### State Diagram
![State Diagram](stateDiagram.png)
#### Class Diagram
![Class Diagram](architectureClassDiagrams.png)


