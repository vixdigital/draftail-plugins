import React from 'react';

import { INLINE_STYLE, BLOCK_TYPE, ENTITY_TYPE } from '../lib';

export const BR_ICON =
    'M.436 633.471l296.897-296.898v241.823h616.586V94.117h109.517v593.796H297.333v242.456z';

export const INLINE_CONTROL = {
    BOLD: { type: INLINE_STYLE.BOLD },
    ITALIC: { type: INLINE_STYLE.ITALIC },
    CODE: { type: INLINE_STYLE.CODE },
    UNDERLINE: { type: INLINE_STYLE.UNDERLINE},
    STRIKETHROUGH: {
        type: INLINE_STYLE.STRIKETHROUGH,
        icon: '#icon-strikethrough',
    },
    MARK: { type: INLINE_STYLE.MARK, icon: '#icon-info' },
    QUOTATION: { type: INLINE_STYLE.QUOTATION, icon: '#icon-quotes-right' },
    SMALL: { type: INLINE_STYLE.SMALL, icon: '#icon-font-size' },
    SAMPLE: { type: INLINE_STYLE.SAMPLE, icon: '#icon-lab' },
    INSERT: { type: INLINE_STYLE.INSERT, label: '+' },
    DELETE: { type: INLINE_STYLE.DELETE, label: '-' },
    KEYBOARD: { type: INLINE_STYLE.KEYBOARD },
    SUPERSCRIPT: { type: INLINE_STYLE.SUPERSCRIPT, icon: '#icon-superscript' },
    SUBSCRIPT: { type: INLINE_STYLE.SUBSCRIPT, icon: '#icon-subscript' },
};

export const BLOCK_CONTROL = {
    UNSTYLED: { type: BLOCK_TYPE.UNSTYLED },
    HEADER_ONE: { type: BLOCK_TYPE.HEADER_ONE },
    HEADER_TWO: { type: BLOCK_TYPE.HEADER_TWO },
    HEADER_THREE: { type: BLOCK_TYPE.HEADER_THREE },
    HEADER_FOUR: { type: BLOCK_TYPE.HEADER_FOUR },
    HEADER_FIVE: { type: BLOCK_TYPE.HEADER_FIVE },
    HEADER_SIX: { type: BLOCK_TYPE.HEADER_SIX },
    UNORDERED_LIST_ITEM: {
        type: BLOCK_TYPE.UNORDERED_LIST_ITEM,
    },
    ORDERED_LIST_ITEM: {
        type: BLOCK_TYPE.ORDERED_LIST_ITEM,
    },
    BLOCKQUOTE: { type: BLOCK_TYPE.BLOCKQUOTE, icon: '#icon-openquote' },
    CODE: { type: BLOCK_TYPE.CODE },
};