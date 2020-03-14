import ReactAntEditableTagGroup from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items: ['tag1', 'tag2', 'tag3']
  };

  onRandom = (inEvent) => {
    const random = Math.floor(Math.random() * 10);
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const _items = items.slice(0, random);
    console.log('on random:', _items);
    this.setState({ items: _items });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="app-container">
        <p>
          <button onClick={this.onRandom}>Set Random Items</button>
        </p>
        <ReactAntEditableTagGroup
          value={items}
          onChange={(e) => {
            this.setState({ items: e.target.value });
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
