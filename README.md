# EXCO LIVE - CODING CHALLENGE

## Brief
Clients is requesting to host a “live stream” event on the existing platform called Exco Live. Exco Live requires all its 10,000 students (users) across multiple classes to attend the live event at a specified time where they will check-in to the event, view the live stream, and check-out at the end of the live stream. 

## Prompts
(1) Your task is to design and build a system that supports client requirements below. The focus of this project is system design, database query optimization, and server scalability.

(2) Please write a test script to evaluate the program’s scalability. The test should provide prove that the system is able to support the numbers of users anticipated.

## Features & Requirements
**A. Check-In & Test Connections**
* Check-in is required for every user to track attendance and ensure minimum system requirements are met. A user should land on the check-in page before entering the live stream page.
* A user only needs to be checked in once throughout the lifespan of an event. If a user has already been checked in, they are to land directly on the live stream page.

_Check-in process has two steps:_
1. Test Connection
  * To test connection, load an image file on page entry. Determine user’s internet speed using any available load information.
  * If the internet speed exceeds minimum requirement, allow user to continue to step 2.
2. Check-in Attendance
  * To check in, a user needs to enter their last 4 digits of their username.
  * A user is able to check-in other employees from the same class. To do so, display a list of all users from the same class, also with option to enter the last 4 digits of their usernames. 
  * After a user finishes selecting other users to check-in (or none), clicking on “Check-In” button will update user database with respective check-in timestamp for all checked-in users, then redirect user to the live stream page.

**B. Live Stream Page**
* Assume the video is streamed through a third party service. You may use any sample m3u8 url for the live stream.
* When a user lands on the live stream page, the video should auto play.
* Display the total number of attendance in real time.

**C. Check-out**
* At the end of the live event, a check-out prompt should appear to allow users to checkout.
* Users will be presented with a list of all users who they have checked-in for, including themselves.
* Clicking on “Check-Out” button will update user database with respective check-out timestamps for all check-out users. 

## Run Project
> npm run start