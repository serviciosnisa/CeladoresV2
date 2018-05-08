// (a) Configure Profound UI settings

pui["serverURL"] ="https://i5nisa.nisa.es";
pui["language"] = "en_US";
pui["no focus"] = true;

// (b) Change the way the "loading" screen looks

pui["loading animation"]["text"] = "One moment...";
pui["loading animation"]["top"] = 5;
pui["loading animation"]["left"] = 5;


// (c) This code starts the Profound UI framework.

window.onload = function() {
  pui.run({ "mobile": true });
};


// (d) Set up a JavaScript function that runs when the device
//     has initialized, here:

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  // Put custom code here that runs after Cordova has loaded
  // device APIs are not available until this event has fired
}
