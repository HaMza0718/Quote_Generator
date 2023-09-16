import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
      <div className="main">
      <h1 className="top_head">'Random Quote Generator'</h1>
        <div className="card">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner"><h1 classNameName="heading">"{this.state.advice}"</h1></div>
        </div>
          <button className="button" onClick={this.fetchAdvice}>Give Me Advice</button>
      </div>
      </>
    );
  }
}

export default App;
