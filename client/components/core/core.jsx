import React from 'react';

export default MainLayout = ({header, component, footer}) => (
  <div>
    {header}

    {component}

    {footer}
  </div>
)