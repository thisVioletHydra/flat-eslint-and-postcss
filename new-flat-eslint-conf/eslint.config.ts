import antfu from '@antfu/eslint-config';

import { baseRules } from './src/baseRules.js';
import { htmlRules } from './src/htmlRules.js';
import { jsdocRules } from './src/jsdocRules.js';
import { jsoncRules } from './src/jsoncRules.js';
import { perfectionistRules } from './src/perfectionistRules.js';
import { startedConfig } from './src/startedConfig.js';
import { stylisticRules } from './src/stylisticRules.js';
import { tsRules } from './src/tsRules.js';
import { unicornRules } from './src/unicornRules.js';
import { vueRules } from './src/vueRules.js';

export default antfu(

  startedConfig(),
  baseRules(),
  htmlRules(),

  perfectionistRules(),

  unicornRules(),

  stylisticRules(),
  tsRules(),
  vueRules(),
  jsdocRules(),
  jsoncRules(),
);