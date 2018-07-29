import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { parseMarkdown } from './MarkdownPage';

import './MarkdownColumnPage.css';

class MarkdownColumnPage extends Component {
  static propTypes = {
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { content } = this.props;

    // TODO: Only parse when the content changes.
    return (
      <div className="MarkdownColumnPage">
        {content &&
          content.map((columnContent, i) => [
            <div className="MarkdownColumnPage__column">
              {parseMarkdown(columnContent)}
            </div>,
            i < content.length - 1 && (
              <div className="MarkdownColumnPage__spacer" />
            ),
          ])}
      </div>
    );
  }
}

export default MarkdownColumnPage;
