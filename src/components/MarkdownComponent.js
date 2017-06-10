import { Parser, ProcessNodeDefinitions } from 'html-to-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ExternalLink from './ExternalLink';

const htmlParser = new Parser();

const processNodeDefinitions = new ProcessNodeDefinitions(React);
const processingInstructions = [
  {
    shouldProcessNode(node) {
      return node.type && node.type === 'tag' && node.name && node.name === 'a';
    },
    processNode(node, children, index) {
      const LinkComponent = node.attribs &&
        node.attribs.href &&
        node.attribs.href.startsWith('/')
        ? Link
        : ExternalLink;

      return (
        <LinkComponent key={index} to={node.attribs.href}>
          {children}
        </LinkComponent>
      );
    },
  },
  {
    shouldProcessNode(node) {
      return true;
    },
    processNode: processNodeDefinitions.processDefaultNode,
  },
];

class MarkdownComponent extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  };

  render() {
    const { content } = this.props;

    // TODO: Only parse when the content changes.
    return (
      <div className="MarkdownComponent">
        {htmlParser.parseWithInstructions(
          content,
          () => true,
          processingInstructions,
        )}
      </div>
    );
  }
}

export default MarkdownComponent;
