const DOM = React.DOM;

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

const item = { 
  image: {
    src: 'http://www.seoded.ru/beginner/img/meta-tegi.jpg',
    width: '50px',
    height: '50px',
    alt: 'pic'
  },
  text: 'Sometext'
};

ReactDOM.render(
  React.createElement(BlogItem, item),
  document.getElementById('app1')
);

ReactDOM.render(
  React.createElement(BlogItem, item),
  document.getElementById('app2')

);
ReactDOM.render(
  React.createElement(BlogItem, item),
  document.getElementById('app3')
);
