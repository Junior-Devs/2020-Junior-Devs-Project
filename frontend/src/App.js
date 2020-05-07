import React, { Component } from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    fetch("/api/getSomething")
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state

    return (
      <div>
        <HelloWorld text="Welcome to Junior Devs" />

        {list.length ? (
        <div>
          {list.map((item, index) => {
            return(
              <div key={index}>
                {item}
              </div>
            )
          })}
        </div>
        ) : (
          <div>
            <h2>No List Items found</h2>
          </div>
          )
        }
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("root"));