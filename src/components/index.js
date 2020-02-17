import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Tag, Icon, Input } from 'antd';

const CLASS_NAME = 'react-ant-editable-tag-group';

export default class ReactAntEditableTagGroup extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.array,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The new text.
     */
    newText: PropTypes.string
  };

  static defaultProps = {
    value: [],
    onChange: noop,
    newText: '新增'
  };

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = {
      value,
      editing: false,
      inputValue: ''
    };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.change(value);
    }
    return true;
  }

  change(inValue) {
    const { onChange } = this.props;
    const target = { value: inValue };
    this.setState(target, () => {
      onChange({ target });
    });
  }

  handleClose = (inValue) => {
    const value = this.state.value.filter((item) => item !== inValue);
    this.change(value);
  };

  handleEditing = () => {
    this.setState({ editing: true }, () => {
      this.input.focus();
    });
  };

  handleInputChange = (inEvent) => {
    this.setState({ inputValue: inEvent.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue, value } = this.state;
    inputValue && value.indexOf(inputValue) === -1 && value.push(inputValue);
    this.setState({ editing: false, inputValue: '' }, () => {
      this.change(value);
    });
  };

  render() {
    const { editing, inputValue } = this.state;
    const { className, value, onChange, newText, ...props } = this.props;

    return (
      <section
        className={classNames('react-ant-editable-tag-group', className)}
        {...props}>
        {this.state.value.map((item) => {
          return (
            <Tag key={item} closable onClose={this.handleClose}>
              {item}
            </Tag>
          );
        })}

        {editing && (
          <Input
            ref={(input) => (this.input = input)}
            type="text"
            size="small"
            className="react-ant-editable-tag-group-input"
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}

        {!editing && (
          <Tag
            onClick={this.handleEditing}
            className="react-ant-editable-tag-group-new">
            <Icon type="plus" /> {newText}
          </Tag>
        )}
      </section>
    );
  }
}
