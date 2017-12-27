// @flow
import React, { PureComponent } from 'react';
import { ToastAndroid, Vibration, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Stopwatch from 'timer-stopwatch';
import Button from '../Components/Button';
import PlayButton from '../Components/PlayButton';
import PlayProgressBar from '../Components/PlayProgressBar';
import * as PlayProgressBarActions from '../Actions/PlayProgressBar';
import * as PatternActions from '../Actions/Pattern';
import styles from '../Styles/main';

import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import rootReducer from '../Reducers/index';

class MainView extends PureComponent {
	componentDidMount() {
		this.vibrateTime = new Stopwatch();
		this.pausedTime = new Stopwatch();
	}

	_updatePattern = time => {
		this.props.patternobject.update(time);
	};

	_onPressIn = () => {
		this.pausedTime.stop();
		this._updatePattern(this.pausedTime.ms);
		this.pausedTime.reset();

		this.vibrateTime.start();
		Vibration.vibrate(5000);
	};

	_onPressOut = () => {
		this.pausedTime.start();

		this.vibrateTime.stop();
		this._updatePattern(this.vibrateTime.ms);
		Vibration.cancel();

		this.vibrateTime.reset();
	};

	_resetPattern = () => {
		Vibration.cancel();

		this.props.patternobject.reset();
		this.props.playprogressbar.reset();

		this.pausedTime.stop();
		this.pausedTime.reset();
		this.vibrateTime.stop();
		this.vibrateTime.reset();

		ToastAndroid.show('Pattern cleared', ToastAndroid.SHORT);
	};

	_updateProgressBar = () => {
		this.props.playprogressbar.reset();

		const percent = this.props.pattern.reduce((a, b) => a + b, 0) / 10;
		const interval = setInterval(() => {
			if (this.props.progress < 0.9) {
				this.props.playprogressbar.update(0.1);
			} else {
				clearInterval(interval);
			}
		}, percent);
	};

	_playPattern = () => {
		if (this.props.pattern.length) {
			this._updateProgressBar();

			ToastAndroid.show(
				`Playing pattern: ${JSON.stringify(this.props.pattern)}`,
				ToastAndroid.LONG
			);

			Vibration.vibrate(this.props.pattern);
		}
	};

	render() {
		return (
			<Grid style={styles.container}>
				<Col>
					<View style={styles.statusbar} />
					<Row size={1} />
					<Row size={2}>
						<Col>
							<View style={styles.recordButton}>
								<PlayProgressBar
									progress={this.props.progress}
									pattern={this.props.pattern}
								/>
								<PlayButton
									onPressIn={this._onPressIn}
									onPressOut={this._onPressOut}
								/>
							</View>
						</Col>
					</Row>

					<Row size={2}>
						<Col>
							<Button
								onPress={this._playPattern}
								name="controller-play"
							/>
						</Col>
						<Col>
							<Button onPress={this._resetPattern} name="cycle" />
						</Col>
					</Row>
				</Col>
			</Grid>
		);
	}
}

function mapStateToProps(state) {
	return {
		pattern: state.pattern,
		progress: state.progress
	};
}

function mapDispatchToProps(dispatch) {
	return {
		playprogressbar: bindActionCreators(PlayProgressBarActions, dispatch),
		patternobject: bindActionCreators(PatternActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
