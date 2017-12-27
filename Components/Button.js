// @flow
import React, { Component } from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import colors from '../Styles/colors';
import styles from '../Styles/main';
import { Entypo } from '@expo/vector-icons';

export default class Button extends Component {
	render() {
		return (
			<View style={styles.roundButton}>
				<TouchableNativeFeedback
					onPress={this.props.onPress}
					background={TouchableNativeFeedback.Ripple(
						colors.ripple,
						true
					)}>
					<View style={styles.roundButton}>
						<Entypo
							name={this.props.name}
							size={40}
							color={colors.black}
						/>
					</View>
				</TouchableNativeFeedback>
			</View>
		);
	}
}
