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

Like.propTypes = {
  count: React.PropTypes.number,
  like: React.PropTypes.func.isRequired
};

Like.defaultProps = {
  count: 0,
};

export default Like;
