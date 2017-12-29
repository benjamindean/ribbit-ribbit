import React from 'react';
import { CustomPattern } from '../Pages/CustomPattern';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
	const rendered = renderer.create(<CustomPattern />).toJSON();
	expect(rendered).toMatchSnapshot();
});
