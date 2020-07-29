import React from 'react';
import './card.scss';
import Stepper from '../../components/stepper/Stepper';
import CardLayout from '../../components/Card/CardLayout';

class CardScreen extends React.Component {
  render() {
    return (
      <>
        <Stepper />
        <CardLayout />
      </>
    );
  }
}
export default CardScreen;
