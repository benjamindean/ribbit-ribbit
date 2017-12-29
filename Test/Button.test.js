import React from 'react';
import Button from '../Components/Button';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
	const rendered = renderer
		.create(<Button onPress={() => {}} name={'controller-play'} />)
    .toJSON();
    
	expect(rendered).toBeTruthy();
});
