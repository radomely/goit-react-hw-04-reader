import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Publication = ({ title, text }) => (
  <article className={styles.publication}>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);
Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Publication;
