class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Cambia el código debajo de esta línea

ReactDOMServer.renderToString(<App/>)