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

<hr>
  
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

### Changes by Harshita (06/10/2022)
- Register Component
  - Confirm password added
- AddPost Component
  - Used 'location' to go back to previous page instead of navigation
- Other small html and css changes      

<hr>

### Changes by Harshita (08/10/2022)
- AddPost Component
  - Added functionality for selecting file from system
  - Added preview of the file being uploaded
  - Updated css as required
  - upload post function present here calls the upload post function from post service
- Services Folder
  - Created new service -> PostTasts
- PostTasks Service
  - Contains post upload function
    - Post upload functionality introduced
    - seperate folder is being created for posts 
    - posts folder contains keymail for each user
    - inside the keymail there will be posts uploaded by each user
    - different folder for profile pics will be created in near future
  - contains post delete function
  - contains fetch user posts function
    - fetches posts for a particular loged in user
  - contains fetch all posts function
    - fetches all the posts uploaded till date
    - gets the url of each post and pushes it into a list
  - contains save metadata of file function  
- src folder
  - Created new folder -> Classes
- Classes Folder     
  - Contains ts file that holds class for metadata of post
- Post metadata File 
  - contains class PostMetadata
  - Metadata of post contains the following 
    - keymail
    - name
    - post_url
    - post
    - fileType
- PostList component
  - imported PostTasks service
  - fetched the list of url of all the posts
  - displayed all the posts in PostList html    
  
<hr>

### Changes by Harshita (10/10/2022)
- PostTasks Service
  - Updated function save metadata of file
  - Now it uploades metadata into the firebase
  - Creating error while adding image url (calling it invalid)
  - So updating firestore without adding url
  - Works fine
- Postmetadata.ts
  - post_url datatype changed to string
  - Still getting invalid url error while updating data to firestore

<hr>

### Changes by Harshita (10/10/2022)
- PostTasks Service 
  - Resolved error of duplicate posts in post list component and therefore home component
  - Added function to fetch metadata of posts from firestore but it's not working as per requirement
- Classes
  - Created new class FetchedPostData
- FetchedPostData.ts
  - Contains data of the post fetched from the database
- Userdata Service
 - Updated service class
 - Fixed all the problems faced due to the changes
- Home component
  - User data was not being properly fetched
  - Updated the function as required
  - Now it fetches data as per requirement   
  
<hr>

### Changes by Omkar (11/10/2022)
- PostTasks Service
  - Fixed issue with metadata not being fetched
  - Fixed import for firestore from compat
  - Metadata Succesfully displayed on console using snapshot.doc.data()
Note to Harshita :- Assign data from doc to a array if possible and access as per required

<hr>

### Changes by Omkar and Harshita (12/10/2022)
- Added custom favicon for the website

<hr>

### Changes by Harshita (12/10/2022)
- PostTasks Service
  - Removed get all posts function because fetched data was undefined when returned.
- PostList component
  - Added get all posts function in this component
  - Username and caption fetched successfully and are displayed with the post  
- Profile Component
  - Added icon to go to previous page
  - works fine
  - position not correct
- Task for Omkar
  - Add confirmation dailog before uploading the post 
  - Position the icon to go back in the profile component
  - After uploading the post, the data in the add post component should become empty

<hr>

### Changes by Harshita (13/10/2022)
- Post List component
  - Loading video type file -> works fine!  

<hr>  

### Changes by Omkar (14/10/2022)
- Main index
  - called header and footer before and after router outlet respectively
  - pending css updates to make it aesthetic
- Header Component
  - Added a simple home button (*convert it to a logo button*)
  - pending conversion to navbar
  - pending logout

<hr>

### Changes by Harshita (14/10/2022)
- PostList component
  - Updated some functions name as per the rules of clean coding
- Profile component
  - Created a function user_posts to get all posts with the metadata of the loged in user
  - Posts are diaplayed below the title posts in the profile page  

<hr>

### Changes by Harshita (14/10/2022)
- Profile Component
  - Implemented the function delete_post to delete the post of a loged in user
    - It deletes image or video from firebase storage
    - It also deletes the metadata from firebase firestore
  - Problem with the page reloading
    - After reloading the page user is loged out
    - Changes are not seen immediately after deleting the post
- Task for Omkar
  - Try to resolve the above mentioned problem (**tried and will be tried at a later date**)

<hr>

### Changes by Omkar (14/10/2022)
#### Major Overhaul
- Profile Component
  - Prepped component to accept bio
  - calling the edit dilog with the entire userdata
- EditProfile Dialog
  - Injecting data recieved from the profile component
  - calling function setafteredit()
  - used [value] in html and some minor spelling fixes 
- User Data Service
  - it preps the userdatamodel for bio with an empty bio (*done to avoid messing registration code*)
  - the called function basically does a few things
    - it updates the realtime document with keymail
    - if username is changed - chat and metadata have to be modified too
      - modifychat:- changes username for every chat posted by the user (*will have to add same functionality for comments*)
      - modifypost:- channges username in the postmetadata collection
- Post Task service
  - emit the progress amount for the upload
- Add Post
  - subscribes to the emitted progress amount
  - the progress value is used to animate a input slider (would look better with a matslider)
*Note* :- Try to get code from post list back in the post service 

<hr>

### Changes by Omkar (17/10/2022)
- Profile Component
  - Profile component calls post grid component instead of displaying statically
- Post List Component
  - Post list css modified to center the cards 
  - Post card now called to individually instantiate a component as per requirement
  - simple hover css applied
- Post Grid Component
  - using matgrid module to display all posts in a dynamic grid of 3 columns
  - calls individual thumnail element using ngfor
- Post Thumbnail Component
  - simple thumbnail for every post user has mad
  - fixed width of 500px, fixed height 300px
  - simple hover effect 
  - hover to play video
- Post Card Component
  - simple matcard to display individula posts
  - fixed size for image and videos
  - hover to play videos

<hr>

### Changes by Omkar (18/10/2022)
- Profile Component
  - commented dead code
  - sending keymail instead of entire data now
  - Css changes to hide scrollbar
- Post Grid
  - fetch posts for user in the component instead of getting posts from profile
- Home Component
  - added ngif to not even display profile/chat if not logged in
  - minor css fixes
- Header Component
  - Toollbar added
  - New Logo with complete name
  - basic routing
  - minor css
- Post Task service
  - reroute to home after adding post
  - *add functinoality for same after delete post*
- Post Thumbnail
  - deletinon call after confirmation
  - simple html fixes
  - added menu for view/delete - *view pending*
- App Component
  - simple html fixes
  - css fixes for sepration of components

<hr>

### Changes by Omkar (19/10/2022)
- Home
  - modified routerlink
  - minor css
- Header
  - temporary logout with refresh
- ProfilePostService
  - simple service to fetch data
- PostTask
  - navigation after deletion
- Post View Component
  - single card view for opened post through grid
  - added deletion code to card
  - css fixes
- Post Thumbnail
  - Navigation for individual card
  - minor css
- Post Card 
  - minor css fixes
  - added username before caption
- ChatComponent
  - minor css

<hr>

### Changes by Omkar (26/10/2022)
Minor Component withh static code
pending job

<hr>

### Changes by Harshita (27/10/2022)
## Major Change
- Posts Module
  - Created new component comments
- Comments component
  - created simple cards to display comments
  - created simple card to upload comment
  - Cards may be replaced later by something else
- PostCard component
  - Calling the comments component into the postCard component as a child
  - created function to add comment to a post
  - created function to fetch all the comments of a post with username and keymail
  - created child to parent communication from comments to postCard to send the new comment    
  - created parent to child communication from postCard to comments to send the comments array
  - Comments getting uploaded successfully
  - fetchComments function called in ngOnInit() and ngOnChnages()
  - fetchComments works successfully