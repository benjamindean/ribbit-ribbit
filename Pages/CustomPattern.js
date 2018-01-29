// @flow
import React, { PureComponent } from 'react';
import { ToastAndroid, Vibration, Linking } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Stopwatch from 'timer-stopwatch';
import Button from '../Components/Button';
import PlayButtonFullWidth from '../Components/PlayButtonFullWidth';
import * as PlayProgressBarActions from '../Actions/PlayProgressBar';
import * as PatternActions from '../Actions/Pattern';
import * as qs from 'qs';
import styles from '../Styles/main';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class CustomPattern extends PureComponent {
	static navigationOptions = {
		title: 'Custom Pattern'
	};

	componentDidMount() {
		Linking.addEventListener('url', this._handleUrl);

		this.vibrateTime = new Stopwatch();
		this.pausedTime = new Stopwatch();
	}

	_handleUrl = url => {
		const queryString = url.replace(Expo.Constants.linkingUri, '');

		if (queryString) {
			const data = qs.parse(queryString);
			const pattern = data.pattern;

			if (pattern) {
				this.pattern.play(pattern);
			}
		}
	};

	_onPressIn = () => {
		this.pausedTime.stop();
		this.props.actions.pattern.update(this.pausedTime.ms);
		this.pausedTime.reset();
		this.vibrateTime.start();

		Vibration.vibrate(5000);
	};

	_onPressOut = () => {
		this.pausedTime.start();
		this.vibrateTime.stop();
		this.props.actions.pattern.update(this.vibrateTime.ms);
		this.vibrateTime.reset();

		Vibration.cancel();
	};

	_resetPattern = () => {
		this.props.actions.pattern.reset();
		this.props.actions.progressbar.reset();

		this._stopRecording();
	};

	_stopRecording() {
		this.pausedTime.stop();
		this.pausedTime.reset();
		this.vibrateTime.stop();
		this.vibrateTime.reset();
	}

	_updateProgressBar = () => {
		if (!this.props.pattern.length) {
			return;
		}

		this.props.actions.progressbar.reset();

		const percent = this.props.pattern.reduce((a, b) => a + b, 0) / 10;
		const interval = setInterval(() => {
			if (this.props.progress < 0.9) {
				this.props.actions.progressbar.update(0.1);
			} else {
				clearInterval(interval);
			}
		}, percent);
	};

	_playPattern = () => {
		this._updateProgressBar();
		this.props.actions.pattern.play(this.props.pattern);
	};

	_sharePattern = () => {
		this.props.actions.pattern.share('CustomPattern', this.props.pattern);
	};

	render() {
		return (
			<Grid style={styles.container}>
				<Col>
					<Row size={2}>
						<Col>
							<PlayButtonFullWidth 
								onPressIn={this._onPressIn} 
								onPressOut={this._onPressOut}
								progress={this.props.progress}
								pattern={this.props.pattern}
							/>
						</Col>
					</Row>
					<Row size={1} style={styles.center}>
						<Col>
							<Button onPress={this._resetPattern} name="cycle" />
						</Col>
						<Col>
							<Button onPress={this._playPattern} name="controller-play" />
						</Col>
						<Col>
							<Button onPress={this._sharePattern} name="share" />
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
		actions: {
			progressbar: bindActionCreators(PlayProgressBarActions, dispatch),
			pattern: bindActionCreators(PatternActions, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomPattern);
