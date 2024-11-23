User Management Application
A React-based application for managing users, allowing you to add, edit, toggle status, and delete users.

Table of Contents
Overview
Features
Technologies Used
Setup and Installation
Usage
API Endpoints
File Structure
Future Enhancements
Author
Overview
This project provides a user-friendly interface to manage user records. Users can:

Add new entries with a name, role, and status.
Edit existing user details.
Toggle the user's status between "Active" and "Inactive".
Delete users from the list.
The app interacts with a backend API to store and retrieve user data.

Features
Add User: Create a new user with name, role, and status.
Edit User: Modify an existing user’s name and role.
Toggle Status: Change a user's status dynamically.
Delete User: Remove a user from the database.
Technologies Used
Frontend: React.js
Backend: Node.js (API for user management)
Styling: Bootstrap for responsive design
Setup and Installation
Prerequisites
Install Node.js (v16 or later).
Install npm or yarn.
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-repository/user-management-app.git  
cd user-management-app  
Install dependencies:

bash
Copy code
npm install  
Start the application:

bash
Copy code
npm start  
Open the app in your browser:

arduino
Copy code
http://localhost:3000  
Usage
Adding a User
Fill in the Name and Role fields in the form at the bottom of the page.
Click the Add User button to save the new user.
Editing a User
Click the Edit button next to a user.
Modify the Name and/or Role fields.
Click Save to update the user’s details.
Toggling Status
Click the Toggle Status button next to a user to change their status between "Active" and "Inactive".
Deleting a User
Click the Delete button next to a user to remove them from the list.
