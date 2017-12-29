// @flow
import React, { PureComponent } from 'react';
import { ToastAndroid, Vibration } from 'react-native';
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
	static navigationOptions = {
		title: 'Custom Pattern'
	};

	componentDidMount() {
		this.vibrateTime = new Stopwatch();
		this.pausedTime = new Stopwatch();
	}

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

		this.pausedTime.stop();
		this.pausedTime.reset();
		this.vibrateTime.stop();
		this.vibrateTime.reset();
	};

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

	render() {
		return (
			<Grid style={styles.container}>
				<Col>
					<Row size={1} />
					<Row size={2}>
						<Col>
							<PlayProgressBar
								progress={this.props.progress}
								pattern={this.props.pattern}
							/>
							<PlayButton onPressIn={this._onPressIn} onPressOut={this._onPressOut} />
						</Col>
					</Row>
					<Row size={2}>
						<Col>
							<Button onPress={this._playPattern} name="controller-play" />
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
		actions: {
			progressbar: bindActionCreators(PlayProgressBarActions, dispatch),
			pattern: bindActionCreators(PatternActions, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
