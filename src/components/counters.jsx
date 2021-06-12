import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

// https://www.youtube.com/watch?v=Ke90Tje7VS0
// https://hackernoon.com/reconciling-djangos-mvc-templates-with-react-components-3aa986cf510a
// https://www.google.com/search?q=react+on+top+of+django+template&oq=react+on+top+of+django+template&aqs=chrome..69i57j33i22i29i30l4.9606j0j7&sourceid=chrome&ie=UTF-8
