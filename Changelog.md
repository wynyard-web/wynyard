# Changelog (all changes to be reported here)
<hr>

#### Previous Changes on the chat_test


### Changes by Omkar (17/9/2022)
Added Several Coded static modules
- Global Chat
  - Contains the chat component <b> Sidenav to open chat</b>
- Users Module
  - Login <b>Simple input field to get user id from user to enable chat etc</b>
- Structure
  - home <b>Contains the homepage component</b>
  - header <b>empty</b>
  - footer <b>empty</b>


<hr>

### changes by Harshita (18/9/2022)
Modified Routing
- Default path set as login for now
- added path to the homepage

<hr>

### changes by Harshita (18/9/2022)
Created register component
- Enabled registration (connected with firebase)
  - Created input fields for user details (No UI implemented yet)
  - Registration Fields
    - Full Name
    - Username
    - Email
    - Password
Login component
- Enabled login (connected with firebase)
  - Created input fields for user details (No UI implemented yet)
  - Login credentials include
    - Email
    - Password
Navigation
- Enabled inter navigation between register and login component
- Added new routes

<hr>

### Changes by Harshita (19/9/2022)
Login Component
- Designed frontend part (html and css)
- Added the custom background made by Omkar
- Checked earlier working of all buttons

<hr>

### Changes by Harshita (20/9/2022)
Login Component
- Updated UI for login page
  - updated login html and css files

<hr>


### Changes by Harshita (20/9/2022)
Registration Component
- Updated UI for registration page
  - updated registration html and css files

<hr>


### Changes by Omkar (21/9/2022)
Added and modified modules (Coded Static Modules and components - pending imports and exports)
- Posts Module (New)
  - added component for post card displayed on the post_list (empty static code)
  - added component for post thumbnail for post_grid (empty static code)
- Structure Module (Modifications)
  - added component for post_grid to display on profile pages (empty static code)
  - added component for post_list to display on homepage (empty static code)

<hr>


### Changes by Harshita (21/9/2022)
Chat component
- Updated chat html and css file
  - changed cursor hovering 

Post_List component
- Displaying list of recent posts (incomplete)  
  - adjusted scrolling of different components on home page (temporarily)

Profile component
- created for user profile in user module
- Designed UI (html and css)
- Created options menu using drawer layout 

<hr>


### Changes by Harshita and Omkar (22/9/2022)
- Modified css for profile component (Harshita)
- Added logo images (Omkar)

<hr>

### Changes by Harshita (28/9/2022)
- Profile Component
  - Added dailog box feature for edit profile button
- EditProfileDialog Component
  - Created this component to edit user profile
  - No new functionality added in this component yet.

<hr>

### Changes by Omkar (28/9/2022)
- Confirm Dialog Component
  - Standard compnent for a simple confirmation dialog box
- Chat Component
  - added functionality to delete user message (will add context menu with button to delete)

<hr>

### Changes by Harshita (01/10/2022)
- AddPost Component
  - Created AddPost Component
  - Designed UI for this component (html and css)
  - Added the path for this component in the routing module
  - Added navigation
    - From Profile component to AddPost component
    - From AddPost component back to Profile component
- Imported Posts module in the main module

<hr>

### Changes by Harshita (01/10/2022)
- Home Component
  - Updated UI for this component
  - Username is fetched from home component
- Chat Component
  - Updated UI for this component
  - Enabled enter key for sending chat  
- Register Component
  - key for registered user is now user's email
- Profile Component
  - Fetched full name of the user

<hr>

### Changes by Harshita (01/10/2022)
- Profile Component
  - fetched username using user email
- EditProfileDialog Component
  - updated html and ts file    

<hr>

### Changes by Omkar and Harshita (03/10/2022)
- Profile Component
  - Fetching data using get() method instead of onValue() method  
- Note for Omkar: Modify the get() for login and generate a service asap.   
<<<<<<< HEAD
  
### Changes by Omkar (04/10/2022)
- App Routing Module
  - Changed default page to the home page
- UserData Service
  - Simple service for setting and getting data for the user pages instead of querying database every time
    - User Data :- Contains all user data (set with email)
    - User Email :- Set once with email for login (acts as a session variable)
- Header Component
  - Simple Login Button to route to login
  - Logout button to clear set data 
- Home Component (Major Overhaul)
  - Added data fetching and setting using firebase + service
  - Simple fix to not let user access profile if username/email =""
  - Send username thorugh Userdat to chat
- Login Component
  - Sets a global email after login 
  - Attempt made to set entire user data dynamically but async prevents setting property as required

<hr>




