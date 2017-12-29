// @flow
import React, { PureComponent } from 'react';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import colors from '../Styles/colors';
import styles from '../Styles/main';

export default class PlayButton extends PureComponent {
	render() {
		return (
			<TouchableHighlight
				style={styles.recordButton}
				underlayColor={colors.dark}
				onPressIn={this.props.onPressIn}
				onPressOut={this.props.onPressOut}>
				<Entypo name={this.props.name} size={this.props.size} color={colors.black} />
			</TouchableHighlight>
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
