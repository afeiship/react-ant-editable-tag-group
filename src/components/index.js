import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Tag, Icon, Input } from 'antd';
import ReactInteractiveList from '@feizheng/react-interactive-list';

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
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: [],
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = {
      value
    };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  template = ({ item, index }, cb) => {
    const { value } = this.state;
    return (
      <Tag closable key={index} onClose={cb}>
        <Input
          ref={(input) => (this.input = input)}
          type="text"
          size="small"
          defaultValue={item}
          className={`${CLASS_NAME}__input`}
          onBlur={(e) => {
            value[value.length - 1] = e.nativeEvent.target.value;
            this.setState({ value }, () => {
              this.handleChange({
                target: {
                  value: value
                }
              });
            });
          }}
        />
      </Tag>
    );
  };

  templateCreate = ({ value }, cb) => {
    const create = () => {
      cb();
      setTimeout(() => {
        this.input.focus();
      });
    };
    return (
      <Tag onClick={create} className={`${CLASS_NAME}__new`}>
        <Icon type="plus" />
        新增
      </Tag>
    );
  };

  templateDefault = () => {
    return '';
  };

  handleChange = (inEvent) => {
    const { onChange } = this.props;
    onChange(inEvent);
  };

  render() {
    const { className, value, onChange, ...props } = this.props;
    const _value = this.state.value;

    return (
      <ReactInteractiveList
        items={_value}
        template={this.template}
        templateCreate={this.templateCreate}
        templateDefault={this.templateDefault}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}></ReactInteractiveList>
    );
  }
}
