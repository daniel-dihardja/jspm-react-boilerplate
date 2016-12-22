#Introduction
Boilerplate for developing hybrid or desktop app based on JSPM, React & OnsenUI.
The bundled version of the app can then be integrated in either a cordova or an electron prject

[JSPM](http://jspm.io/)

[React](https://facebook.github.io/react/)

[Onsen UI for React](https://onsen.io/react/)

[Cordova](https://cordova.apache.org/)

[Electron](http://electron.atom.io/)

#Setup

    npm install
    jspm install

#Workflow
    
    // start browser sync for development
    make up
    
    // make a self executable JSPM bundle of the app
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