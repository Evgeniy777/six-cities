import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from '../main/main.jsx';
import {Provider} from 'react-redux';
import reduxMockStore from 'redux-mock-store';
import {PlaceMap} from '../place-map/place-map.jsx';
import {MemoryRouter} from 'react-router-dom';

describe(`Main`, () => {
  it(`Main correctly renders`, () => {
    const filteredOffers = [
      {
        city: `Paris`,
        name: `Beautiful & luxurious apartment at great location`,
        type: `Apartment`,
        price: 120,
        premium: true,
        stars: 93,
        url: `img/apartment-01.jpg`,
        coordinates: [52.3909553943508, 4.85309666406198]
      },
      {
        city: `Paris`,
        name: `Wood and stone place`,
        type: `Private room`,
        price: 80,
        premium: false,
        stars: 80,
        url: `img/room.jpg`,
        coordinates: [52.369553943508, 4.85309666406198]
      }
    ];

    const cities = [
      {
        name: `Paris`,
        coordinates: [52.38333, 4.9]
      },
      {
        name: `Cologne`,
        coordinates: [52.38333, 4.9]
      },
      {
        name: `Brussels`,
        coordinates: [52.38333, 4.9]
      },
      {
        name: `Amsterdam`,
        coordinates: [52.38333, 4.9]
      },
      {
        name: `Hamburg`,
        coordinates: [52.38333, 4.9]
      },
      {
        name: `Dusseldorf`,
        coordinates: [52.38333, 4.9]
      }
    ];

    const placesFilter = {
      POPULAR: `Popular`,
      PRICE_ASC: `Price: low to high`,
      PRICE_DESC: `Price: high to low`,
      TOP_RATED_FIRST: `Top rated first`
    };

    const initialState = {
      APP: {
        city: `Amsterdam`,
        placesFilter,
        sort: placesFilter.POPULAR
      },
      DATA: {
        cities,
        offers: [],
        filteredOffers: []
      },
      USER: {
        user: {},
        isAuthorizationRequired: false
      }
    };
    PlaceMap.prototype.componentDidMount = jest.fn();
    const mockStore = reduxMockStore();
    const store = mockStore(initialState);
    const tree = renderer
      .create(<MemoryRouter>
        <Provider store={store}>
          <Main
            filteredOffers={filteredOffers}
            city={cities[0].name}
          />
        </Provider>
      </MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
