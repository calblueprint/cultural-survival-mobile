// Learn more https://docs.expo.io/guides/customizing-metro

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require('expo/metro-config');
// TODO: Implement using an import statement instead of require. 
// import { getDefaultConfig } from 'expo/metro-config';

module.exports = getDefaultConfig(__dirname);
// TODO: Implement using export statement instead of module.exports
// export default getDefaultConfig(__dirname);