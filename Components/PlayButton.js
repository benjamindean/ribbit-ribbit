// @flow
import React, { PureComponent } from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import colors from '../Styles/colors';
import styles from '../Styles/main';

export default class PlayButton extends PureComponent {
	render() {
		return (
			<TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple(colors.ripple, true)}
				onPressIn={this.props.onPressIn}
				onPressOut={this.props.onPressOut}>
				<View style={styles.recordButton}>
					<Entypo name={this.props.name} size={this.props.size} color={colors.black} />
				</View>
			</TouchableNativeFeedback>
		);
	}
}

PlayButton.defaultProps = {
	size: 60,
	name: 'controller-record'
};

PlayButton.propTypes = {
	onPressIn: PropTypes.func.isRequired,
	onPressOut: PropTypes.func.isRequired,
	name: PropTypes.string,
	size: PropTypes.number
};
