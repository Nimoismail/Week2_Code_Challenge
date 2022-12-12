# Week2_Code_Challenge

# Description

In this project you will be building an app of voting for the cutest animal,
You will be using alocal API and building out the fronted for our app.
Week2-Code-Challenge.




# Installation

To use this repo on your machine requires some simple steps

open the Terminal command line: [CTRL+ALT+T]

Clone this repository

git clone https://github.com/Nimoismail/Week2_Code_Challenge

Change Directory: 

(cd Week2-Code-Challenge)

(Optional) Open it in Visual Studio Code

code .

# Running The Application

To run the application, you can use the following steps to run the app.

In your current folder install alocal jSON Server.

npm install -g json-server

Run the command below to launch the server

json-server --watch db.json


Check the code functionality by clicking on the Animal names enter,
any number in the output as LIKES test the functionality of the LIKES button.



Contact Informantion

Incase of any enquiries or contributions, u can  email me at nimo.sheikh@student.moringaschool.com

# Core Delivereble

Core Deliverables
As a user, I can:

See a list of all animal names. You will need to make a GET request to the following endpoint to retrieve the character data
 GET /characters

Example Response:

   {

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },

   {

     "id": 2,

     "name": "Mx. Monkey",

     "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",

     "votes": 0   }, ….]
Click on an animal’s name to see its details i.e image and number of votes. Note, you should only be displaying the details of one animal at a time. You can either use the character information from your first request or make a new request to this endpoint to get the character's details 
GET /characters/:id

Example Response: 
{

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },


## Auther
Project contibuted by
[Nimo](https://github.com/Nimoismail//Week2_Code_Challenge)

# License
'ISC'