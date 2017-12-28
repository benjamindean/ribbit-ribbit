// @flow
import React, { PureComponent } from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import colors from '../Styles/colors';
import styles from '../Styles/main';
import { Entypo } from '@expo/vector-icons';

export default class PlayButton extends PureComponent {
	render() {
		return (
			<TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple(colors.ripple, true)}
				onPressIn={this.props.onPressIn}
				onPressOut={this.props.onPressOut}>
				<View style={styles.recordButton}>
					<Entypo name="controller-record" size={60} color={colors.black} />
				</View>
			</TouchableNativeFeedback>
		);
	}
}
