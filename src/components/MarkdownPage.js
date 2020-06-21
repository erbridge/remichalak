import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { routeShape } from '../prop-types/routePropType';
import ExternalLink from './ExternalLink';
import './MarkdownPage.css';

const markdownComponents = {
  a({ href, children }) {
    const LinkComponent = href && href.startsWith('/') ? Link : ExternalLink;

    return <LinkComponent to={href}>{children}</LinkComponent>;
  },
};

class MarkdownPage extends Component {
  static propTypes = routeShape;

  state = {
    loadedStyles: [],
  };

  renderContent() {
    const { content } = this.props;

    if (!Array.isArray(content)) {
      return content({ components: markdownComponents });
    }

    return content.map((row, i) => {
      const part = Array.isArray(row) ? (
        <div className="MarkdownPage__columns">
          {row.map((column, j) => [
            <div key={j} className="MarkdownPage__column">
              {column({ components: markdownComponents })}
            </div>,
            j !== row.length - 1 && (
              <div key={`${j}-spacer`} className="MarkdownPage__spacer" />
            ),
          ])}
        </div>
      ) : (
        row({ components: markdownComponents })
      );

      return (
        <div key={i} className="MarkdownPage__part">
          {part}
        </div>
      );
    });
  }

  render() {
    return <div className="MarkdownPage">{this.renderContent()}</div>;
  }
}

export default MarkdownPage;
