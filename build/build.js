import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactAntEditableTagGroup'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    antd: 'antd'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
