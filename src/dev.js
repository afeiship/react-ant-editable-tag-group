import './dev.scss';
import ReactAntEditableTagGroup from './main';

/*===example start===*/

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
        <ReactAntEditableTagGroup value={this.state.value} onChange={this._onChange} ref='rc1' />
        <ReactAntEditableTagGroup value={['tag1']} onChange={this._onChange} ref='rc2' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
