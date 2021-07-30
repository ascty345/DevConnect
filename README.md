# DevConnect
This is an educational project taught by Brad Traversy. In this project, I built a fully functional website, which mimics a
small social network app that includes authentication, profiles and forum posts. 

Technology: React, NodeJs, CSS, HTML, JavaScript.

For the main repo please check out the link: [@bradtraversy/devconnector_2.0](https://github.com/bradtraversy/devconnector_2.0)

# What is the difference 👻?
In this project, I used 'redux' hooks (useDispatch, useSelector) to manage Redux's state instead of 'MapStateToProps' used in the Brad's course.
The reason is that I found Redux's hooks help to slim down the codes and that was easier for me to wrap my head around building React's components ✅. 

## Quick Start 🦜
    Add a default.json file in config folder with the following
    {
      "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
      "jwtSecret": "secret",
      "githubToken": "<yoursecrectaccesstoken>"
    }
    

### Install server dependencies
    npm install

### Install client dependencies
    cd client
    npm install
    
### Run both Express & React from root
    npm run dev

Now you can check the site on http://localhost:3000/
___

### Build for production

    cd client
    npm run build


### Test production before deploy
After running a build in the client 👆, cd into the root of the project.
And run...

Linux/Unix

    NODE_ENV=production node server.js

Windows Cmd Prompt or Powershell

    $env:NODE_ENV="production"
    node server.js
    
Check in browser on http://localhost:5000/
