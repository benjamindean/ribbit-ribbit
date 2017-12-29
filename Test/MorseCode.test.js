import React from 'react';
import { MorseCode } from '../Pages/MorseCode';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
	const rendered = renderer.create(<MorseCode />).toJSON();
	expect(rendered).toMatchSnapshot();
});
