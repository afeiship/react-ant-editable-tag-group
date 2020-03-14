import ReactAntEditableTagGroup from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items: ['tag1', 'tag2', 'tag3']
  };
  render() {
    const { items } = this.state;
    return (
      <div className="app-container">
        <ReactAntEditableTagGroup
          value={items}
          onChange={(e) => {
            console.log(e.target.value.join('|'));
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
