import * as React from 'react';

const TemplateWrapper = ({ children }) => (
  <div>
    <div>
      {children()}
    </div>
  </div>
);

export default TemplateWrapper;
