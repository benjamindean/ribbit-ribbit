// @flow
import React, { PureComponent } from 'react';
import { TouchableHighlight, View } from 'react-native';
import PlayProgressBarFullWidth from '../Components/PlayProgressBarFullWidth';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import colors from '../Styles/colors';
import styles from '../Styles/main';

export default class PlayButtonFullWidth extends PureComponent {
	render() {
		return (
			<View>
				<TouchableHighlight
					style={styles.recordButtonFullWidth}
					onPressIn={this.props.onPressIn}
					onPressOut={this.props.onPressOut}>
					<Entypo name={this.props.name} size={this.props.size} color={colors.dark} />
				</TouchableHighlight>
				<PlayProgressBarFullWidth
					progress={100}
					pattern={this.props.pattern}
				/> 
			</View>
		);
	}
}

PlayButtonFullWidth.defaultProps = {
	size: 60,
	name: 'controller-record'
};

PlayButtonFullWidth.propTypes = {
	onPressIn: PropTypes.func.isRequired,
	onPressOut: PropTypes.func.isRequired,
	name: PropTypes.string,
	size: PropTypes.number
};
