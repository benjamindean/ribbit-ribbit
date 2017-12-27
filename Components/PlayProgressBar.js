// @flow
import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../Styles/colors';

export default class ProgressBar extends PureComponent {
	render() {
		return (
			<Progress.Circle
				size={250}
				progress={this.props.progress}
				color={colors.black}
				thickness={5}
				borderWidth={0}
				useNativeDriver={true}
				animationType="timing"
				style={styles.progress}
			/>
		);
	}
}

const styles = StyleSheet.create({
	progress: {
		position: 'absolute'
	}
});
