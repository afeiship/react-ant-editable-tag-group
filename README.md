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
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| value     | array  | []      | Default value.                        |
| onChange  | func   | noop    | The change handler.                   |


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

  ```

## documentation
- https://afeiship.github.io/react-ant-editable-tag-group/
