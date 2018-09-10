import React, { Component } from 'react';

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
    newText: '新增'
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = {
      value,
      editing: false,
      inputValue: '',
    };
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    const { onChange } = this.props;
    if (value !== this.state.value) {
      this.setState({ value }, () => {
        onChange({ target: { value } });
      });
    }
  }

  _onClose = (inValue) => {
    const value = this.state.value.filter(item => item !== inValue);
    const { onChange } = this.props;
    this.setState({ value }, () => {
      onChange({ target: { value } });
    });
  };

  _onEditing = () => {
    this.setState({ editing: true }, () => {
      this.input.focus();
    });
  };

  _onInputChange = (inEvent) => {
    this.setState({ inputValue: inEvent.target.value });
  };

  _onInputConfirm = () => {
    const { inputValue, value } = this.state;
    const { onChange } = this.props;
    (inputValue && value.indexOf(inputValue) === -1) && value.push(inputValue)
    this.setState({ value, editing: false, inputValue: '', }, () => {
      onChange({ target: { value } });
    });
  };

  render() {
    const { editing, inputValue } = this.state;
    const { className, value, newText, ...props } = this.props;

    return (
      <section {...props} className={classNames('react-ant-editable-tag-group', className)}>
        {
          this.state.value.map((item) => {
            return (
              <Tag key={item} closable afterClose={() => this._onClose(item)}>
                {item}
              </Tag>
            );
          })
        }

        {
          editing && (
            <Input
              ref={input => this.input = input}
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
          !editing && (
            <Tag
              onClick={this._onEditing}
              className='react-ant-editable-tag-group-new'>
              <Icon type="plus" /> {newText}
            </Tag>
          )
        }
      </section>
    );
  }
}
