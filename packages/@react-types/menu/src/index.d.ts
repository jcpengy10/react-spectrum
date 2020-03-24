/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {CollectionBase, DOMProps, Expandable, MultipleSelection, StyleProps} from '@react-types/shared';
import {Key, ReactElement, RefObject} from 'react';
import {Node} from '@react-stately/collections';

export type FocusStrategy = 'first' | 'last';

export interface MenuTriggerState {
  isOpen: boolean,
  setOpen: (value: boolean) => void,
  focusStrategy: FocusStrategy,
  setFocusStrategy: (value: FocusStrategy) => void
}

export interface MenuTriggerProps {
  ref?: RefObject<HTMLElement | null>,
  type?: 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid',
  trigger?: 'press' | 'longPress',
  align?: 'start' | 'end',
  direction?: 'bottom' | 'top', // left right?
  closeOnSelect?: boolean,
  isDisabled?: boolean,
  isOpen?: boolean,
  defaultOpen?: boolean,
  onOpenChange?: (isOpen: boolean) => void,
  shouldFlip?: boolean
}

export interface SpectrumMenuTriggerProps extends MenuTriggerProps {
  children: ReactElement[]
}

export interface MenuProps<T> extends CollectionBase<T>, Expandable, MultipleSelection {
  autoFocus?: boolean,
  focusStrategy?: FocusStrategy,
  wrapAround?: boolean,
  onAction?: (key: Key) => void
}

export interface SpectrumMenuProps<T> extends MenuProps<T>, DOMProps, StyleProps {
}

export interface SpectrumMenuHeadingProps<T> {
  item: Node<T>
}