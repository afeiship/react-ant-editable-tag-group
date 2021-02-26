import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntEditableTagGroup from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items: ['tag1', 'tag2', 'tag3']
  };

  onRandom = (inEvent) => {
    const random = Math.floor(Math.random() * 10);
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const _items = items.slice(0, random);
    this.setState({ items: _items });
  };

  render() {
    const { items } = this.state;
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-editable-tag-group">
        <p>
          <button className="button is-primary isfullwidth" onClick={this.onRandom}>Set Random Items</button>
        </p>
        <ReactAntEditableTagGroup
          quick
          value={items}
          onChange={(e) => {
            this.setState({ items: e.target.value });
          }}
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
