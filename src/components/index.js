import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import { Tag, Button } from 'antd';
import ReactInteractiveList from '@jswork/react-interactive-list';
import nxUnique from '@jswork/next-unique';
import AutosizeInput from 'react-input-autosize';

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
     * The minimum tag number.
     */
    min: PropTypes.number,
    /**
     * The maximum tags number.
     */
    max: PropTypes.number,
    /**
     * If use keymap `enter` key to quick add tag.
     */
    quick: PropTypes.bool,
    /**
     * If set readOnly.
     */
    readOnly: PropTypes.bool,
    /**
     * If set disabed.
     */
    disabled: PropTypes.bool
  };

  static defaultProps = {
    value: [],
    min: 0,
    max: 20,
    quick: false,
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
    this.state = { value };
  }

  template = ({ item, index }, cb) => {
    // TODO: tag.cloable will create ant-tag-hidden?
    const { disabled, readOnly } = this.props;
    return (
      <Tag key={index}>
        <AutosizeInput
          ref={(input) => (this.input = input)}
          type="text"
          size="small"
          value={item}
          disabled={disabled}
          readOnly={readOnly}
          className={`${CLASS_NAME}__input`}
          onChange={this.handleInputChange.bind(this, index)}
          onBlur={this.handleInputBlur.bind(this, index)}
          onKeyDown={this.handleInputKeyDown}
        />
        <i className={`${CLASS_NAME}__close`} onClick={cb}></i>
      </Tag>
    );
  };

  templateCreate = (_, cb) => {
    const create = () => {
      cb();
      setTimeout(() => this.input.focus());
    };
    return (
      <Button
        ref={(btn) => (this.btn = btn)}
        size="small"
        type="dashed"
        onClick={create}
        className={`${CLASS_NAME}__create`}>
        <i className={`${CLASS_NAME}__plus`}></i>
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

  handleInputBlur = () => {
    const { value } = this.state;
    const { onChange } = this.props;
    const _value = value.filter(Boolean);
    const target = { value: nxUnique(_value) };
    this.setState(target, () => {
      onChange({ target });
    });
  };

  handleInputKeyDown = (inEvent) => {
    const { quick } = this.props;
    if (inEvent.key === 'Enter') {
      !quick && inEvent.preventDefault();
      const dom = this.btn.buttonNode || this.btn;
      dom.focus();
    }
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
    const { className, value, onChange, min, max, quick, ...props } = this.props;
    const _value = this.state.value;

    return (
      <ReactInteractiveList
        min={min}
        max={max}
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
