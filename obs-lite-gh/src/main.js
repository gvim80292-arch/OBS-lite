const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 780,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#0b0b0d',
    titleBarStyle: 'hiddenInset',
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, 'icon.png'),
  })

  win.loadFile('index.html')
  Menu.setApplicationMenu(null)
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit())
