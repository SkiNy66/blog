import React from 'react';

const TextBox = (props) => (
  <span>{props.children}</span>
);

TextBox.defaultProps = {
  text: 'No text'
};

TextBox.propTypes = {
  children: React.PropTypes.oneOfType(
    [
      React.PropTypes.string,
      React.PropTypes.array
    ])
};

export default TextBox;
