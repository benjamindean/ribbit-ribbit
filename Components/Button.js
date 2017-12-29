// @flow
import React, { PureComponent } from 'react';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import colors from '../Styles/colors';
import styles from '../Styles/main';

export default class Button extends PureComponent {
	render() {
		return (
			<TouchableHighlight
				style={styles.roundButton}
				underlayColor={colors.dark}
				onPress={this.props.onPress}>
				<Entypo name={this.props.name} size={this.props.size} color={colors.black} />
			</TouchableHighlight>
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
