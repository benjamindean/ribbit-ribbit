// @flow
import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import PropTypes from 'prop-types';
import colors from '../Styles/colors';

export default class ProgressBar extends PureComponent {
	render() {
		return (
			<Progress.Circle
				size={this.props.size}
				progress={this.props.progress}
				color={colors.black}
				thickness={this.props.thickness}
				borderWidth={this.props.borderWidth}
				useNativeDriver={true}
				animationType={this.props.animationType}
				style={styles.progress}
			/>
		);
	}
}

ProgressBar.defaultProps = {
	size: 250,
	progress: 0,
	thickness: 20,
	borderWidth: 0,
	animationType: 'timing'
};

ProgressBar.propTypes = {
	size: PropTypes.number,
	progress: PropTypes.number,
	thickness: PropTypes.number,
	borderWidth: PropTypes.number,
	animationType: PropTypes.string
};

const styles = StyleSheet.create({
	progress: {
		position: 'absolute',
		alignSelf: 'center'
	}
});
