import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import styles from './Reader.module.css';

const Counter = ({ pageNumber, lastPage, onIncrement, onDecrement }) => (
  <Fragment>
    <p className={styles.counter}>
      {pageNumber}/{lastPage}
    </p>
    <Controls
      pageNumber={pageNumber}
      lastPage={lastPage}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  </Fragment>
);
Counter.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
export default Counter;
