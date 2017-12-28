// @flow
import { Navigation } from 'react-native-navigation';
import CustomPattern from './Pages/Custom';

console.log(CustomPattern);

export function registerScreens(store, Provider) {
	Navigation.registerComponent('ribbitribbit.CustomPattern', () => CustomPattern, store, Provider);
}
