/* eslint-disable global-require */
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import RootNavigation from './src/navigation/RootNavigator';
// import QueriesDemo from './src/firebase/QueriesDemo';
// import AudioDemos from './src/firebase/AudioDemos';


async function loadResourcesAsync() {
  await Promise.all([
    // Pre-load other resources (i.e. images) here
    // TODO @david: remove unused font files after global styles are updated
    Font.loadAsync({
      'DMSans-Bold': require('./assets/fonts/DMSans-Bold.ttf'),
      'DMSans-Regular': require('./assets/fonts/DMSans-Regular.ttf'),
    }),
  ]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  /**
   * Load any resources or data that we need prior to rendering the app
   */
  useEffect(() => {
    async function prepare() {
      try {
        await loadResourcesAsync();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        // Tell the application to render
        setResourcesLoaded(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (resourcesLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setResourcesLoaded`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.

      await SplashScreen.hideAsync();
    }
  }, [resourcesLoaded]);

  return !resourcesLoaded ? null : (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <AudioDemos /> */}
      <RootNavigation />
    </View>
  );
}
