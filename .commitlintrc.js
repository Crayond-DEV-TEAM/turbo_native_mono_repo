/** @type {import('cz-git').UserConfig} */

const fs = require('fs');
const path = require('path');
const apps = fs.readdirSync(path.resolve(__dirname, 'apps'));
const components = fs.readdirSync(path.resolve(__dirname, 'components'));
const features = fs.readdirSync(path.resolve(__dirname, 'features'));

module.exports = {
  rule: {},
  prompt: {
    useEmoji: true,
    markBreakingChangeMode: true,
    scopes: ['root', ...features, ...apps, ...components],
  },
};
