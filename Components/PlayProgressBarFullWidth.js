// @flow
import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import PropTypes from 'prop-types';
import colors from '../Styles/colors';

export default class ProgressBar extends PureComponent {
	render() {
		return (
			<Progress.Bar
				progress={this.props.progress}
				color={colors.black}
				thickness={this.props.thickness}
				borderRadius={0}
				borderWidth={this.props.borderWidth}
				animationType={this.props.animationType}
				style={styles.progress}
			/>
		);
	}
}

ProgressBar.defaultProps = {
	progress: 0,
	thickness: 40,
	borderWidth: 0,
	animationType: 'spring'
};

ProgressBar.propTypes = {
	progress: PropTypes.number,
	thickness: PropTypes.number,
	borderWidth: PropTypes.number,
	animationType: PropTypes.string
};

const styles = StyleSheet.create({
	progress: {
	}
});
