const DOM = React.DOM;

const items = [ 
  { 
    image: {
      src: 'http://www.seoded.ru/beginner/img/meta-tegi.jpg',
      width: '50px',
      height: '50px',
      alt: 'pic'
    },
    id: '1',
    text: 'Sometext1'
  },
  { 
    image: {
      src: 'http://www.seoded.ru/beginner/img/meta-tegi.jpg',
      width: '50px',
      height: '50px',
      alt: 'pic'
    },
    id: '2',
    text: 'Sometext2'
  },
  { 
    image: {
      src: 'http://www.seoded.ru/beginner/img/meta-tegi.jpg',
      width: '50px',
      height: '50px',
      alt: 'pic'
    },
    id: '3',
    text: 'Sometext3'
  }
];

const Image = ({...props}) => (
  <img { ...props } />
);

const TextBox = (props) => (
  <span>{props.children}</span>
);

const BlogItem = ({image, text}) => (
  <div>
    <Image {...image} />
    <br/>
    <TextBox>{text}</TextBox>
  </div>
);

class BlogList extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = { items };
  }
  
  render() {
    const {items} = this.state;
    const aaa = items.map((a) =>
      React.createElement(BlogItem, {key: a.id, ...a})
//      <BlogItem key={a.id} {...a} />
    );

    return <div>{aaa}</div>
  }
};

ReactDOM.render(
  React.createElement(BlogList, {items}),
  document.getElementById('app')
);
