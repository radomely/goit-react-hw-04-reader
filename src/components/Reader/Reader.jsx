import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Publication from './Publication';
import Counter from './Counter';
import styles from './Reader.module.css';

const getPageNumberFromLocation = (location, items) => {
  const pageNumber = Number(queryString.parse(location.search).item);
  return pageNumber > 0 && pageNumber <= items.length ? pageNumber : 1;
};
export default class Reader extends Component {
  static propTypes = {
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { history, location, items } = this.props;
    const pageNumber = getPageNumberFromLocation(location, items);

    history.replace({
      pathname: location.pathname,
      search: `item=${pageNumber}`,
    });
  }

  handleIncrement = () => {
    const { history, location, items } = this.props;
    history.push({
      ...location,
      search: `item=${getPageNumberFromLocation(location, items) + 1}`,
    });
  };

  handleDecrement = () => {
    const { history, location, items } = this.props;
    history.push({
      ...location,
      search: `item=${getPageNumberFromLocation(location, items) - 1}`,
    });
  };

  render() {
    const { items, location } = this.props;
    const pageNumber = getPageNumberFromLocation(location, items);

    return (
      <div className={styles.reader}>
        <Publication
          title={items[pageNumber - 1].title}
          text={items[pageNumber - 1].text}
        />
        <Counter
          pageNumber={pageNumber}
          lastPage={items.length}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
