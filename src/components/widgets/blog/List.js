import React from 'react';

// import { map } from 'lodash/collection';
//
// import { Item } from 'semantic-ui-react';

import BlogItem from './Item';

const BlogList = ({ items, like}) => (
  <div>
    { items.map(
      (element) => (
        <BlogItem key={element.id} {...element} like={() => like(element.id)}/>
      )
    ) }
  </div>
);

BlogList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object),
  like: React.PropTypes.func.isRequired
};

export default BlogList;
