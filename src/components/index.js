import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Tag, Badge, Icon, Input, Button } from 'antd';
import ReactInteractiveList from '@feizheng/react-interactive-list';
import nxUnique from '@feizheng/next-unique';

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

  static getDerivedStateFromProps(inProps, inState) {
    const { value } = inProps;
    if (value !== inState.value) {
      return { value };
    }
    return null;
  }

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = {
      value
    };
  }

  // shouldComponentUpdate(inProps) {
  //   const { value } = inProps;
  //   if (value !== this.state.value) {
  //     this.setState({ value });
  //   }
  //   return true;
  // }

  template = ({ item, index }, cb) => {
    // TODO: tag.cloable will create ant-tag-hidden?
    return (
      <Tag key={index}>
        <Input
          ref={(input) => (this.input = input)}
          type="text"
          size="small"
          value={item}
          className={`${CLASS_NAME}__input`}
          onChange={this.handleInputChange.bind(this, index)}
          onBlur={this.handleInputBlur.bind(this, index)}
        />
        <Icon type="close" onClick={cb} />
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
      <Button
        size="small"
        type="dashed"
        icon="plus"
        onClick={create}
        className={`${CLASS_NAME}__new`}>
        新增
      </Button>
    );
  };

  templateDefault = () => {
    return '';
  };

  handleInputChange = (inIndex, inEvent) => {
    const { value } = this.state;
    const { onChange } = this.props;
    value[inIndex] = inEvent.target.value;
    const target = { value };
    this.setState(target, () => {
      onChange({ target });
    });
  };

  handleInputBlur = (inIndex, inEvent) => {
    const { value } = this.state;
    const { onChange } = this.props;
    const target = { value: nxUnique(value) };
    this.setState(target, () => {
      onChange({ target });
    });
  };

  handleInterChange = (inEvent) => {
    const { value } = inEvent.target;
    const { onChange } = this.props;
    const target = { value: nxUnique(value) };
    this.setState(target, () => {
      onChange({ target });
    });
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
        onChange={this.handleInterChange}
        {...props}
      />
    );
  }
}
