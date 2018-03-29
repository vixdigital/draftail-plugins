import React from 'react';
import ReactDOM from 'react-dom';
import { DraftailEditor } from 'draftail';

import { IS_IE11 } from '../../config/wagtailConfig';

import Icon from '../Icon/Icon';

export { default as Link } from './decorators/Link';
export { default as Document } from './decorators/Document';
export { default as ImageBlock } from './blocks/ImageBlock';
export { default as EmbedBlock } from './blocks/EmbedBlock';

export { default as ModalWorkflowSource } from './sources/ModalWorkflowSource';

import {
  INLINE_CONTROL,
  BLOCK_CONTROL,
  ENTITY_CONTROL,
  BR_ICON,
} from '../../constants/ui';

/**
 * Registry for client-side code of Draftail extensions.
 */
const PLUGINS = {};
const DECORATORS = [];
const CONTROLS = [];

const registerPlugin = (plugin) => {
  PLUGINS[plugin.type] = plugin;
  return PLUGINS;
};

const registerDecorator = (decorator) => {
  DECORATORS.push(decorator);
  return DECORATORS;
};

const registerControl = (control) => {
  CONTROLS.push(control);
  return CONTROLS;
};

/**
 * Wraps a style/block/entity type’s icon with an icon font implementation,
 * so Draftail can use icon fonts in its toolbar.
 */
export const wrapWagtailIcon = type => {
  const isIconFont = type.icon && typeof type.icon === 'string';
  if (isIconFont) {
    return Object.assign(type, {
      icon: <Icon name={type.icon} />,
    });
  }

  return type;
};

/**
 * Initialises the DraftailEditor for a given field.
 * @param {string} selector
 * @param {Object} options
 * @param {Element} currentScript
 */
const initEditor = (selector, options, currentScript) => {
  // document.currentScript is not available in IE11. Use a fallback instead.
  const context = currentScript ? currentScript.parentNode : document.body;
  // If the field is not in the current context, look for it in the whole body.
  // Fallback for sequence.js jQuery eval-ed scripts running in document.head.
  const field = context.querySelector(selector) || document.body.querySelector(selector);

  const editorWrapper = document.createElement('div');
  editorWrapper.className = 'Draftail-Editor__wrapper';
  editorWrapper.setAttribute('data-draftail-editor-wrapper', true);

  field.parentNode.appendChild(editorWrapper);

  const serialiseInputValue = rawContentState => {
    field.value = JSON.stringify(rawContentState);
  };

  const blockTypes = options.blockTypes || [];
  const inlineStyles = options.inlineStyles || [];
  let entityTypes = options.entityTypes || [];

  entityTypes = entityTypes.map(wrapWagtailIcon).map((type) => {
    const plugin = PLUGINS[type.type];

    // Override the properties defined in the JS plugin: Python should be the source of truth.
    return Object.assign({}, plugin, type);
  });

  const enableHorizontalRule = options.enableHorizontalRule ? {
    description: "Horizontal Rule",
  } : false;

  const rawContentState = JSON.parse(field.value);

  const editor = (
    <DraftailEditor
      rawContentState={rawContentState}
      onSave={serialiseInputValue}
      placeholder="Write here..."
      spellCheck={true}
      enableLineBreak={{
        description: "Line Break",
        icon: BR_ICON,
      }}
      showUndoControl={{ description: "Undo" }}
      showRedoControl={{ description: "Redo" }}
      maxListNesting={4}
      // Draft.js + IE 11 presents some issues with pasting rich text. Disable rich paste there.
      stripPastedStyles={IS_IE11}
      {...options}
      blockTypes={blockTypes.map(wrapWagtailIcon)}
      inlineStyles={inlineStyles.map(wrapWagtailIcon)}
      entityTypes={entityTypes}
      enableHorizontalRule={{
        description: "Horizontal Rule",
      }}
      decorators={DECORATORS}
      blockTypes={[
          BLOCK_CONTROL.HEADER_TWO,
          BLOCK_CONTROL.HEADER_THREE,
          BLOCK_CONTROL.HEADER_FOUR,
          BLOCK_CONTROL.HEADER_FIVE,
          BLOCK_CONTROL.UNORDERED_LIST_ITEM,
          BLOCK_CONTROL.ORDERED_LIST_ITEM,
      ]}
      inlineStyles={[INLINE_CONTROL.BOLD, INLINE_CONTROL.ITALIC]}
    />
  );

  const draftailEditor = ReactDOM.render(editor, editorWrapper);

  // Bind editor instance to its field so it can be accessed imperatively elsewhere.
  field.draftailEditor = draftailEditor;
};

const draftail = {
  initEditor,
  registerPlugin,
  registerDecorator,
  registerControl,
};

export default draftail;
