import React, { Component } from "react";
import Counter from "./counter";

// Class component
class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
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
