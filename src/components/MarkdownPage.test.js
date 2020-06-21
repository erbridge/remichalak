import { mount } from 'enzyme';
import React from 'react';
import MarkdownPage from './MarkdownPage';

it('mounts without crashing', () => {
  mount(
    <MarkdownPage
      path="/test-page-1"
      content={(props) => (
        <p {...props}>
          Some content with <a href="/test-page-2">a link</a> and an{' '}
          <img src="/test-image" alt="test" />
        </p>
      )}
    />,
  );
});
