# react-ant-editable-tag-group
> Editable tag group for ant.

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    newText: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: [],
    onChange: noop,
    newText:'New Tag'
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-ant-editable-tag-group --registry=https://registry.npm.taobao.org
```

```js
import ReactAntEditableTagGroup from 'react-ant-editable-tag-group';
```

```scss
// customize your styles:
$react-ant-editable-tag-group-options:(
);

@import 'node_modules/react-ant-editable-tag-group/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-ant-editable-tag-group --save
// import : import ReactAntEditableTagGroup from 'react-ant-editable-tag-group'

class App extends React.Component{
  state = {
    value:['tag1','tag2']
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e.target.value);
  };

  render(){
    return (
      <div className="hello-react-ant-editable-tag-group">
        <ReactAntEditableTagGroup value={this.state.value} onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}

```
