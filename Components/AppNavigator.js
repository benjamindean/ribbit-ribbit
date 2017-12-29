import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import CustomPattern from '../Pages/Custom';
import MorseCode from '../Pages/MorseCode';
import colors from '../Styles/colors';

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

const mapStateToProps = state => ({
	nav: state.nav
});

AppWithNavigationState.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AppWithNavigationState);
