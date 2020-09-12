import React, { Component } from 'react';
import axios from 'axios';
import Chart from './components/chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { 
      data: []
     };
}

callAPI() {
    axios.get("http://localhost:9000/")
      .then(res => {
        const data = res.data;
        this.setState({
          data
        });
      });
}

componentDidMount() {
    this.callAPI();
}

  render(){
    return(
    <div className="App">
      <Chart data = {this.state.data} />
    </div>
    )
  };
}

export default App;
