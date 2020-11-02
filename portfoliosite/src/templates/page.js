import React from 'react';

export default ({pageContext}) => (
  <div>
    <h1>
      {pageContext.data.title}
    </h1>
  </div>
);