#Introduction
Boilerplate for developing a hybrid or desktop app based on jspm, React & OnsenUI.
The bundled version can then be integrated in either a cordova or an electron application.

[jspm](http://jspm.io/)

[React](https://facebook.github.io/react/)

[Onsen UI for React](https://onsen.io/react/)

[Cordova](https://cordova.apache.org/)

[Electron](http://electron.atom.io/)

#Setup

    npm install
    jspm install

####!!! jspm install issue !!!
After running jspm install make sure to change these lines in the src/jspm_config.js
 
from 

    paths: {
        "npm:*": "src/jspm_packages/npm/*",
        "github:*": "src/jspm_packages/github/*"
      }

into

    paths: {
        "npm:*": "jspm_packages/npm/*",
        "github:*": "jspm_packages/github/*"
      }

jspm keeps overwriting the paths values by adding the 'src/' dir


#Workflow
    
    // start browser sync for development
    make up
    
    // make a self executable jspm bundle of the app
    make bundle-sfx
    
    // copy the index.bundle.html into the bundle folder as index.html    
    make copy-index
    
    // copy the assets folder into the bundle folder
    make copy-assets
    
#State Components

#UI Components

#Services

#Styling

#Test

#Issues
