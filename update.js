const uaup = require('uaup-js');
const defaultStages = {
    Checking: "Checking For Updates!", 
    Found: "Update Found!",  
    NotFound: "No Update Found.", 
    Downloading: "Downloading...", 
    Unzipping: "Installing...", 
    Cleaning: "Finalizing...", 
    Launch: "Launching..." 
};
const updateOptions = {
    useGithub: true, // {Default is true} [Optional] Only Github is Currenlty Supported.
    gitRepo: "Applio-Installer", // [Required] Your Repo Name
    gitUsername: "IAHispano",  // [Required] Your GitHub Username.
    isGitRepoPrivate: false,  // {Default is false} [Optional] If the Repo is Private or Public  (Currently not Supported).

    appName: "Applio-Installer", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "Applio.Installer.BETA.exe", //[Required] The Executable of the Application to be Run after updating.

    progressBar: document.getElementById("download"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
    label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
    forceUpdate: false, // {Default is false} [Optional] If the Application should be forced updated.  This will change to true if any errors ocurr while launching.
    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
};

uaup.Update(updateOptions);