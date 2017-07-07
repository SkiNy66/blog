import React from 'react';
import { Button } from 'semantic-ui-react';

const Like = ({ count, like }) => (
  <div>
    <Button
      onClick={() => like()}
      color='red'
      content={ count }
      icon='heart'
      label={
        {
          basic: true,
          color: 'red',
          pointing: 'left',
          content: 'Likes'
        }
      }
    />
  </div>
);

export default Like;
