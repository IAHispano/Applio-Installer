const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const { exec } = require('child_process')

let mainWindow;

function createSplashWindow() {
  const splashWindow = new BrowserWindow({
    width: 400,
    height: 400,
    frame:false,
    resizable:false,
    maximizable:false,
    transparent:true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
  },
    title: 'Applio',
    icon: path.join(__dirname, 'images', 'favicon.png'),
  });

  splashWindow.loadURL(`data:text/html,
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Applio</title>
      <style>
      body {
          background-color: black;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          border-radius: 10px;
      }
      
      img {
          width: 250px; 
          height: auto; 
      }
  
      .container {
          display: flex;
          flex-direction: column; /* Apila los elementos verticalmente */
          align-items: center; /* Centra los elementos horizontalmente */
      }
  
      .fade-out {
          opacity: 0;
          transition: opacity 0.5s ease-out;
      }
      .fade-in {
          opacity: 0;
          transition: opacity 0.5s ease-in;
      }
      </style>
      <script src="./update.js"></script>
  </head>
  <body>
      <div class="container">
          <img src="https://i.imgur.com/UYCcsNM.png" alt="Logo">
          <p style="    
          color: white;
          font-family: 'Helvetica';
          font-weight: 400;" id="download-label"></p>
      </div>
  </body>
  </html>
  `);
  splashWindow.show();

  splashWindow.once('ready-to-show', () => {
    setTimeout(() => {
      splashWindow.webContents.executeJavaScript('document.body.classList.add("fade-out");');

      setTimeout(() => {
        createMainWindow();
        splashWindow.close();
      }, 800); 
    }, 2000);
  });
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    show: false,
    autoHideMenuBar: true,
    maximizable: false,
    resizable: false,
    icon: path.join(__dirname, 'images', 'favicon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
  }
  });

  mainWindow.loadFile('./src/index.html');

  mainWindow.on('closed', () => {
    app.quit();
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

app.whenReady().then(() => {
  createSplashWindow();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createSplashWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
