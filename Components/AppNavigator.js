import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import colors from '../Styles/colors';

import CustomPattern from '../Pages/Custom';
import MorseCode from '../Pages/MorseCode';

export const AppNavigator = TabNavigator(
	{
		CustomPattern: { screen: CustomPattern },
		MorseCode: { screen: MorseCode }
	},
	{
		tabBarOptions: {
			labelStyle: {
				fontSize: 12
			},
			style: {
				backgroundColor: colors.semiDark
			},
			activeTintColor: colors.light,
			indicatorStyle: {
				backgroundColor: colors.light
			}
		}
	}
);

const AppWithNavigationState = ({ dispatch, nav }) => (
	<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
