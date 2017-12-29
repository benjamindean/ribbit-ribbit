import React from 'react';
import PlayButton from '../Components/PlayButton';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
	const rendered = renderer
		.create(<PlayButton onPressIn={() => {}} onPressOut={() => {}} name={'controller-play'} />)
    .toJSON();
    
	expect(rendered).toBeTruthy();
});
