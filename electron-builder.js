const artifactName =
  process.env.DEBUG_PROD === 'true'
    ? `$\{name}-$\{version}-$\{arch}-debug.$\{ext}`
    : `$\{name}-$\{version}-$\{arch}.$\{ext}`;

module.exports = {
  productName: '1upvision Producer',
  artifactName,
  appId: 'com.1upvision.producer',
  copyright: 'Copyright © 2019 1upvision.com',
  files: [
    'app/dist/',
    'app/app.html',
    'app/main.prod.js',
    'app/main.prod.js.map',
    'package.json'
  ],
  dmg: {
    contents: [
      {
        x: 130,
        y: 220
      },
      {
        x: 410,
        y: 220,
        type: 'link',
        path: '/Applications'
      }
    ]
  },
  win: {
    target: ['nsis', 'msi']
  },
  linux: {
    target: ['deb', 'rpm', 'snap', 'AppImage'],
    category: 'Development'
  },
  directories: {
    buildResources: 'resources',
    output: 'release'
  }
};
