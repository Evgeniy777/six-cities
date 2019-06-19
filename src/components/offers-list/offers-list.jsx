import React from 'react';
import PropTypes from 'prop-types';
import {PlaceCard} from '../place-card/place-card.jsx';
import {connect} from 'react-redux';

const OffersList = (props) => {
  const {offers, onItemClick} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((it, i) => {
        return <PlaceCard
          place={it}
          key={i}
          onItemClick={() => onItemClick(it)}
        />;
      })}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    offers: state.offers
  });
};

export {OffersList};

export default connect(
    mapStateToProps
)(OffersList);

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  onItemClick: PropTypes.func
};
