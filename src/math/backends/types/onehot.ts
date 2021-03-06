/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {NamedArrayMap} from '../../../util';
import {Array1D, Array2D} from '../../ndarray';
// tslint:disable-next-line:max-line-length
import {KernelInputConfig, KernelNode, TapeNodeInputGradientArrays} from '../tape_types';

export interface OneHotNode extends KernelNode {
  inputAndArgs: OneHotInputConfig;
  output: Array2D;
  gradient: (dy: Array2D, y: Array2D) => OneHotGradientInputArrays;
}

export interface OneHotInputConfig extends KernelInputConfig {
  inputs: OneHotInputArrays;
  args: {depth: number; onValue: number; offValue: number};
}

export interface OneHotInputArrays extends NamedArrayMap {
  indices: Array1D;
}

export interface OneHotGradientInputArrays extends TapeNodeInputGradientArrays {
  indices: () => Array1D;
}
