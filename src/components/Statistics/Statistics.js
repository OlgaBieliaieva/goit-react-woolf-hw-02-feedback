import React, { Component } from 'react';
import shortid from 'shortid';
import css from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const statFields = Object.keys(this.props);

    return (
      <ul className={css.statList}>
        {statFields.map(field => {
          const fieldId = shortid.generate();

          return (
            <li key={fieldId}>
              {field !== 'positivePercentage'
                ? `${field[0].toUpperCase() + field.slice(1)}: ${
                    this.props[field]
                  }`
                : `Positive feedback: ${this.props[field]}%`}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Statistics;
