import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PrizeSection from './components/PrizeSection';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/api/testApi")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <p className="App-intro">;{this.state.apiResponse}</p>
          <PrizeSection />
        </main>
      </div>
    );
  }
}

export default App;
