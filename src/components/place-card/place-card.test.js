import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceCard} from '../place-card/place-card.jsx';
import {MemoryRouter} from 'react-router-dom';

describe(`PlaceCard`, () => {
  it(`PlaceCard correctly renders`, () => {
    const card = {
      city: `Amsterdam`,
      name: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      price: 180,
      premium: true,
      stars: 100,
      url: `img/apartment-03.jpg`,
      coordinates: [52.3809553943508, 4.939309666406198]
    };
    const tree = renderer
      .create(<MemoryRouter>
        <PlaceCard
          place={card}
        />
      </MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
