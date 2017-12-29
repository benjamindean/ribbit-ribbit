// @flow
import React, { PureComponent } from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import colors from '../Styles/colors';
import styles from '../Styles/main';

export default class Button extends PureComponent {
	render() {
		return (
			<View style={styles.roundButton}>
				<TouchableNativeFeedback
					onPress={this.props.onPress}
					background={TouchableNativeFeedback.Ripple(colors.ripple, true)}>
					<View style={styles.roundButton}>
						<Entypo
							name={this.props.name}
							size={this.props.size}
							color={colors.black}
						/>
					</View>
				</TouchableNativeFeedback>
			</View>
		);
	}
}

Button.defaultProps = {
	size: 40
};

Button.propTypes = {
	onPress: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	size: PropTypes.number
};
