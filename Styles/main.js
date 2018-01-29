import { StyleSheet, Platform } from 'react-native';
import colors from './colors';

export default (styles = StyleSheet.create({
	container: {
		backgroundColor: colors.dark
	},
	buttonText: {
		fontSize: 18,
		color: colors.black
	},
	recordButtonText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: colors.black
	},
	statusbar: {
		height: Platform.OS === 'ios' ? 20 : 24,
		backgroundColor: colors.semiDark
	},
	recordButtonFullWidth: {
		width: '100%',
		height: '100%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.light
	},
	recordButton: {
		width: 250,
		height: 250,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.light,
		borderWidth: 20,
		borderRadius: 125,
		borderColor: 'rgba(0, 0, 0, 0.1)'
	},
	roundButton: {
		width: 100,
		height: 100,
		borderRadius: 100,
		borderWidth: 3,
		borderColor: colors.semiDark,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.light
	},
	center: {
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	}
}));
