import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Tag, Input, Icon } from 'antd';

export default class extends Component {
  /*===properties start===*/
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
  /*===properties end===*/

  constructor(inProps){
    super(inProps);
    this.state = {
      value: inProps.value,
      inputVisible: false,
      inputValue: '',
    };
  }

  _onClose = (inValue) => {
    const value = this.state.value.filter(item => item !== inValue);
    const { onChange } = this.props;
    this.setState({ value },()=>{
      onChange({ target:{ value }});
    });
  };

  _onShowInput = () => {
    this.setState({
      inputVisible: true
    }, () => {
      this.input.focus();
    });
  };

  _onInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  _onInputConfirm = () => {
    const { inputValue, value } = this.state;
    const { onChange } = this.props;
    if (inputValue && value.indexOf(inputValue) === -1) {
      value.push( inputValue );
    }
    this.setState({
      value,
      inputVisible: false,
      inputValue: '',
    },()=>{
      onChange({ target:{ value }});
    });
  };

  _saveInputRef = input => this.input = input;

  render() {
    const { inputVisible, inputValue } = this.state;
    const { className, value, newText,  ...props } = this.props;

    return (
      <section {...props} className={classNames('react-ant-editable-tag-group',className)}>
        {
          this.state.value.map((item, index) => {
            return (
              <Tag key={item} closable afterClose={() => this._onClose(item)}>
                {item}
              </Tag>
            );
          })
        }

        {
          inputVisible && (
            <Input
              ref={this._saveInputRef}
              type="text"
              size="small"
              className='react-ant-editable-tag-group-input'
              value={inputValue}
              onChange={this._onInputChange}
              onBlur={this._onInputConfirm}
              onPressEnter={this._onInputConfirm}
            />
          )
        }

        {
          !inputVisible && (
            <Tag
              onClick={this._onShowInput}
              className='react-ant-editable-tag-group-new'>
              <Icon type="plus" /> {newText}
            </Tag>
          )
        }
      </section>
    );
  }
}
