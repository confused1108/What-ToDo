const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')


function getInstallerConfig () {
    console.log('creating windows installer')

    return Promise.resolve({
        appDirectory: path.join('release-builds/WhatToDo-win32-ia32/'),
        authors: 'Hitesh',
        noMsi: true,
        outputDirectory: path.join('release-builds/hits'),
        exe: 'WhatToDo.exe',
        setupExe: 'WhatToDo.exe'
    })
}