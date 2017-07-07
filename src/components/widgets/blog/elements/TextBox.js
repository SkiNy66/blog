import React from 'react';

const TextBox = (props) => (
  <span>{props.children}</span>
);

TextBox.defaultProps = {
  text: 'No text'
};

TextBox.propTypes = {
  text: React.PropTypes.string
};

export default TextBox;
