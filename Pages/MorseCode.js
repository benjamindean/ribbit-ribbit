// @flow
import React, { PureComponent } from 'react';
import { ToastAndroid, Vibration, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as PlayProgressBarActions from '../Actions/PlayProgressBar';
import * as PatternActions from '../Actions/Pattern';
import styles from '../Styles/main';

import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import rootReducer from '../Reducers/index';

class MorseCode extends PureComponent {
	static navigationOptions = {
		title: 'Morse Code'
	};

	render() {
		return (
			<Grid style={styles.container}>
				<Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(MorseCode);
