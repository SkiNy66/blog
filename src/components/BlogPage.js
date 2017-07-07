import React from 'react';
import { items as staticItems } from 'constants/static/items';
import BlogList from 'components/widgets/blog/List';
import _ from 'lodash';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { staticItems };
    this.like = this.like.bind(this);
  }

  render() {
    const { staticItems } = this.state;

    return (
      <div>
        <BlogList items={ staticItems } like={ this.like } />
      </div>
    );
  }

  like (itemId) {
    const { staticItems } = this.state;
    const incrementedItemIndex = _.findIndex(staticItems, { id: itemId });
    const updatedItems = _.cloneDeep(staticItems);

    ++updatedItems[incrementedItemIndex].count;

    this.setState({ staticItems: updatedItems });
  }
}

export default BlogPage;
