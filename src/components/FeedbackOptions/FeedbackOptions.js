import React, { Component } from 'react';
import shortid from 'shortid';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  getBtnColor = title => {
    switch (title) {
      case 'good':
        return 'green';
      case 'neutral':
        return '#e0a607';
      case 'bad':
        return 'red';
      default:
        return 'red';
    }
  };

  render() {
    const feedbackBtns = Object.keys(this.props.options);

    return (
      <ul className={css.btnList}>
        {feedbackBtns.map(item => {
          const btnId = shortid.generate();

          return (
            <li key={btnId}>
              <button
                className={css.button}
                type="button"
                title={item}
                style={{ backgroundColor: this.getBtnColor(item) }}
                onClick={this.props.onLeaveFeedback}
              >
                {item.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default FeedbackOptions;
