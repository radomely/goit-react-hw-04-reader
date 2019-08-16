import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Controls = ({ pageNumber, lastPage, onIncrement, onDecrement }) => (
  <section className={styles.controls}>
    <button
      type="button"
      onClick={onDecrement}
      className={styles.button}
      disabled={pageNumber === 1}
    >
      Назад
    </button>
    <button
      type="button"
      onClick={onIncrement}
      className={styles.button}
      disabled={pageNumber === lastPage}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
