# react-ant-editable-tag-group
> Editable tag group for ant.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S antd@3
npm install -S @jswork/react-ant-editable-tag-group
```

## properties
| Name      | Type   | Required | Default | Description                                 |
| --------- | ------ | -------- | ------- | ------------------------------------------- |
| className | string | false    | -       | The extended className for component.       |
| value     | array  | false    | []      | Default value.                              |
| onChange  | func   | false    | noop    | The change handler.                         |
| min       | number | false    | 0       | The minimum tag number.                     |
| max       | number | false    | 20      | The maximum tags number.                    |
| quick     | bool   | false    | false   | If use keymap `enter` key to quick add tag. |
| readOnly  | bool   | false    | -       | If set readOnly.                            |
| disabled  | bool   | false    | -       | If set disabed.                             |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-editable-tag-group/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-editable-tag-group/dist/style.scss";

  // customize your styles:
  $react-ant-editable-tag-group-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntEditableTagGroup from '@jswork/react-ant-editable-tag-group';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-editable-tag-group/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-editable-tag-group/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-editable-tag-group
[version-url]: https://npmjs.org/package/@jswork/react-ant-editable-tag-group

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-editable-tag-group
[license-url]: https://github.com/afeiship/react-ant-editable-tag-group/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-editable-tag-group
[size-url]: https://github.com/afeiship/react-ant-editable-tag-group/blob/master/dist/react-ant-editable-tag-group.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-editable-tag-group
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-editable-tag-group
