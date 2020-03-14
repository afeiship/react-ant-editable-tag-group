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
    items: PropTypes.array,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    const { items } = inProps;
    this.state = {
      items
    };
  }

  template = ({ item, index }, cb) => {
    const { items } = this.state;
    return (
      <Tag closable key={index} onClose={cb}>
        <Input
          ref={(input) => (this.input = input)}
          type="text"
          size="small"
          defaultValue={item}
          className={`${CLASS_NAME}__input`}
          onBlur={(e) => {
            items[items.length - 1] = e.nativeEvent.target.value;
            this.setState({ items }, () => {
              this.handleChange({
                target: {
                  value: items
                }
              });
            });
          }}
        />
      </Tag>
    );
  };

  templateCreate = ({ items }, cb) => {
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
    const { className, items, onChange, ...props } = this.props;
    const _items = this.state.items;

    return (
      <ReactInteractiveList
        items={_items}
        template={this.template}
        templateCreate={this.templateCreate}
        templateDefault={this.templateDefault}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}></ReactInteractiveList>
    );
  }
}
