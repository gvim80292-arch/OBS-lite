const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 780,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#0b0b0d',
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, 'src', 'icon.png'),
  })
  win.loadFile(path.join(__dirname, 'src', 'index.html'))
  Menu.setApplicationMenu(null)
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit())
