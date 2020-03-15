# react-ant-editable-tag-group
> Editable tag group for ant.

## installation
```shell
npm install -S @feizheng/react-ant-editable-tag-group
```

## update
```shell
npm update @feizheng/react-ant-editable-tag-group
```

## properties
| Name      | Type   | Default | Description                                 |
| --------- | ------ | ------- | ------------------------------------------- |
| className | string | -       | The extended className for component.       |
| value     | array  | []      | Default value.                              |
| onChange  | func   | noop    | The change handler.                         |
| min       | number | 0       | The minimum tag number.                     |
| max       | number | 20      | The maximum tags number.                    |
| quick     | bool   | false   | If use keymap `enter` key to quick add tag. |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-editable-tag-group/dist/style.scss";

  // customize your styles:
  $react-ant-editable-tag-group-options: ()
  ```
2. import js
  ```js
  import ReactAntEditableTagGroup from '@feizheng/react-ant-editable-tag-group';
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
            quick
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

  ```

## documentation
- https://afeiship.github.io/react-ant-editable-tag-group/
