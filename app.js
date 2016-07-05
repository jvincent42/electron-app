/* ---------- Electron init ------------------------------------------------- */
import { app, BrowserWindow } from 'electron'
/* ---------- Requires ------------------------------------------------------ */
/* ---------- Refs for garbage collection ----------------------------------- */
let window
/* -------------------------------------------------------------------------- */

function createBrowserWindow () {
    // Init Window
    window = new BrowserWindow({
        width:          800,
        height:         600,
        frame:          true,
        titleBarStyle:  'hidden-inset',
    })

    // Load template file
    window.loadURL(`file://${__dirname}/public/index.html`)

    // Open the DevTools.
    window.webContents.openDevTools()

    // Emitted when the window is closed.
    window.on('closed', () => {
        window = null
    })
}

app.on('ready', createBrowserWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (window === null) {
        createBrowserWindow()
    }
})
