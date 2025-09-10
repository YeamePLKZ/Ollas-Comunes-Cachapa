import { ExpoRoot } from 'expo-router';
import { registerRootComponent } from 'expo';

import { RequireContext } from 'expo-router/build/types';

// @ts-ignore: Type mismatch between Webpack and Expo Router
const ctx: RequireContext = require.context('./app');

export function App() {
  return <ExpoRoot context={ctx} />;
}

export default registerRootComponent(App);