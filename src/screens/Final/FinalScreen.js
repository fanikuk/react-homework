import React from 'react';
import { Link } from 'react-router-dom';
import './final.scss';
import { PATHS as ROUTES } from '../../routes/paths';

class FinalScreen extends React.PureComponent {
  render() {
    return (
      <div className="final">
        <h3 className="final__title">Покупка успешно завершена</h3>
        <Link className="final__link" to={ROUTES.CATEGORY}>Перейти в начало</Link>
      </div>
    );
  }
}
export default FinalScreen;
