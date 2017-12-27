// @flow
import React, { PureComponent } from 'react';
import {
	ToastAndroid,
	TouchableNativeFeedback,
	TouchableOpacity,
	Vibration,
	StatusBar,
	Platform,
	Text,
	View,
	StyleSheet,
	Dimensions
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Button from 'apsl-react-native-button';
import Stopwatch from 'timer-stopwatch';
import Icon from 'react-native-vector-icons/dist/Entypo';
import colors from './styles/colors';

export default class TabViewExample extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			pattern: []
		};
	}

	componentDidMount() {
		this.vibrateTime = new Stopwatch();
		this.pausedTime = new Stopwatch();
	}

	_updatePattern = time => {
		this.setState(prevState => ({
			pattern: [...prevState.pattern, time]
		}));
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

		this.setState({
			pattern: []
		});

		this.pausedTime.stop();
		this.pausedTime.reset();
		this.vibrateTime.stop();
		this.vibrateTime.reset();

		ToastAndroid.show('Pattern cleared', ToastAndroid.SHORT);
	};

	_playPattern = () => {
		if (this.state.pattern.length) {
			ToastAndroid.show(
				`Playing pattern: ${JSON.stringify(this.state.pattern)}`,
				ToastAndroid.LONG
			);
			Vibration.vibrate(this.state.pattern);
		}
	};

	render() {
		return (
			<Grid style={styles.container}>
				<Col>
					<StatusBar barStyle="light-content" backgroundColor="#ff4081" />
					<View style={styles.statusbar} />

					<Row size={1} />

					<Row size={2}>
						<Col>
							<View style={styles.recordButton}>
								<TouchableNativeFeedback
									background={TouchableNativeFeedback.Ripple(
										colors.ripple,
										true
									)}
									onPressIn={this._onPressIn}
									onPressOut={this._onPressOut}>
									<View style={styles.recordButton}>
										<Text style={styles.recordButtonText}>VIBRATE</Text>
									</View>
								</TouchableNativeFeedback>
							</View>
						</Col>
					</Row>

					<Row size={2}>
						<Col>
							<View style={styles.roundButton}>
								<TouchableNativeFeedback
									onPress={this._playPattern}
									background={TouchableNativeFeedback.Ripple(
										colors.ripple,
										true
									)}>
									<View style={styles.roundButton}>
										<Icon name="comtroller-play" size={30} color="#900" />
										<Text style={styles.buttonText}>PLAY</Text>
									</View>
								</TouchableNativeFeedback>
							</View>
						</Col>

						<Col>
							<View style={styles.roundButton}>
								<TouchableNativeFeedback
									onPress={this._resetPattern}
									background={TouchableNativeFeedback.Ripple(
										colors.ripple,
										true
									)}>
									<View style={styles.roundButton}>
										<Text style={styles.buttonText}>RESET</Text>
									</View>
								</TouchableNativeFeedback>
							</View>
						</Col>
					</Row>
				</Col>
			</Grid>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.dark
	},
	buttonText: {
		fontSize: 18,
		color: colors.black
	},
	recordButtonText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: colors.black
	},
	statusbar: {
		height: Platform.OS === 'ios' ? 20 : 24,
		backgroundColor: colors.semiDark
	},
	recordButton: {
		width: 250,
		height: 250,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.light,
		borderWidth: 5,
		borderRadius: 150,
		borderColor: colors.semiDark
	},
	roundButton: {
		width: 100,
		height: 100,
		borderRadius: 100,
		borderWidth: 3,
		borderColor: colors.semiDark,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.light
	}
});
