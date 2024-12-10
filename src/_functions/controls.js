// wp import
import { __ } from '@wordpress/i18n';
import {
    URLInput,
    RichText,
    MediaUpload,
    AlignmentToolbar,
} from '@wordpress/block-editor';
import { 
    TextControl,
    PanelBody,
    ToggleControl,
    SelectControl,
    RadioControl,
    SVG, 
    Path,
    Button,
} from '@wordpress/components';

// functions
import { 
    filterByAllowedValueKeys,
} from './utilities.js';


// internal vars

const marginPaddingSizes = [
    { value: '', label: __( '– unset –', 'bsx-blocks' ) },
    { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
    { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
    { value: '2', label: __( 'small', 'bsx-blocks' ) },
    { value: '3', label: __( 'medium', 'bsx-blocks' ) },
    { value: '4', label: __( 'large', 'bsx-blocks' ) },
    { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
];
const breakpointsWithUnset = [
    { value: '', label: __( '– unset –', 'bsx-blocks' ) },
    { value: 'xs', label: __( 'Default (XS up)', 'bsx-blocks' ) },
    { value: 'sm', label: __( 'SM up', 'bsx-blocks' ) },
    { value: 'md', label: __( 'MD up', 'bsx-blocks' ) },
    { value: 'lg', label: __( 'LG up', 'bsx-blocks' ) },
    { value: 'xl', label: __( 'XL up', 'bsx-blocks' ) },
];
const marginPaddingPositions = [
    { value: '', label: __( '– unset –', 'bsx-blocks' ) },
    { value: 'all', label: __( 'All', 'bsx-blocks' ) },
    { value: 't', label: __( 'Before', 'bsx-blocks' ) },
    { value: 'b', label: __( 'After', 'bsx-blocks' ) },
    { value: '2', label: __( 'Y (before & after)', 'bsx-blocks' ) },
    { value: '3', label: __( 'Left', 'bsx-blocks' ) },
    { value: '4', label: __( 'Right', 'bsx-blocks' ) },
    { value: '5', label: __( 'X (left & right)', 'bsx-blocks' ) },
];

const states = [
    { value: '', label: __( '– unset –', 'bsx-blocks' ) },
    { value: 'white', label: __( 'White', 'bsx-blocks' ) },
    { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
    { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
    { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
    { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
    { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
    { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
    { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
    { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
];

const textColorStates = [
    { value: '', label: __( '– unset –', 'bsx-blocks' ) },
    { value: 'white', label: __( 'White', 'bsx-blocks' ) },
    { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
    { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
    { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
    { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
    { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
    { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
    { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
    { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
    { value: 'muted', label: __( 'Muted', 'bsx-blocks' ) },
    { value: 'body', label: __( 'Body', 'bsx-blocks' ) },
    { value: 'white-50', label: __( 'White transparent', 'bsx-blocks' ) },
    { value: 'black-50', label: __( 'Black transparent', 'bsx-blocks' ) },
    { value: 'inherit', label: __( 'Inherit', 'bsx-blocks' ) },
];

// doesn’t have '', has additional 'text-link'
const btnStates = [
    { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
    { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
    { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
    { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
    { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
    { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
    { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
    { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
    { value: 'link', label: __( 'Link Button', 'bsx-blocks' ) },
    { value: 'text-link', label: __( 'Text link', 'bsx-blocks' ) },
];

const bgStates = [
    { value: '', label: __( '– unset –', 'bsx-blocks' ) },
    { value: 'white', label: __( 'White', 'bsx-blocks' ) },
    { value: 'white-opaque', label: __( 'White opaque', 'bsx-blocks' ) },
    { value: 'white-transparent', label: __( 'White transparent', 'bsx-blocks' ) },
    { value: 'black', label: __( 'Black', 'bsx-blocks' ) },
    { value: 'black-opaque', label: __( 'Black opaque', 'bsx-blocks' ) },
    { value: 'black-transparent', label: __( 'Black transparent', 'bsx-blocks' ) },
    { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
    { value: 'primary-opaque', label: __( 'Primary opaque', 'bsx-blocks' ) },
    { value: 'primary-transparent', label: __( 'Primary transparent', 'bsx-blocks' ) },
    { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
    { value: 'secondary-opaque', label: __( 'Secondary opaque', 'bsx-blocks' ) },
    { value: 'secondary-transparent', label: __( 'Secondary transparent', 'bsx-blocks' ) },
    { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
    { value: 'success-opaque', label: __( 'Success opaque', 'bsx-blocks' ) },
    { value: 'success-transparent', label: __( 'Success transparent', 'bsx-blocks' ) },
    { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
    { value: 'danger-opaque', label: __( 'Danger opaque', 'bsx-blocks' ) },
    { value: 'danger-transparent', label: __( 'Danger transparent', 'bsx-blocks' ) },
    { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
    { value: 'warning-opaque', label: __( 'Warning opaque', 'bsx-blocks' ) },
    { value: 'warning-transparent', label: __( 'Warning transparent', 'bsx-blocks' ) },
    { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
    { value: 'info-opaque', label: __( 'Info opaque', 'bsx-blocks' ) },
    { value: 'info-transparent', label: __( 'Info transparent', 'bsx-blocks' ) },
    { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
    { value: 'light-opaque', label: __( 'Light opaque', 'bsx-blocks' ) },
    { value: 'light-transparent', label: __( 'Light transparent', 'bsx-blocks' ) },
    { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
    { value: 'dark-opaque', label: __( 'Dark opaque', 'bsx-blocks' ) },
    { value: 'dark-transparent', label: __( 'Dark transparent', 'bsx-blocks' ) },
    { value: 'transparent', label: __( 'Transparent', 'bsx-blocks' ) },
];

const textAlignValues = [
    { value: '', label: __( '– unset –', 'bsx-blocks' ) },
    { value: 'left', label: __( 'left', 'bsx-blocks' ) },
    { value: 'center', label: __( 'Center', 'bsx-blocks' ) },
    { value: 'right', label: __( 'Right', 'bsx-blocks' ) },
];

const alignmentControls = [
    {
        icon: 'editor-alignleft',
        title: __( 'Align left', 'bsx-blocks' ),
        align: 'left',
    },
    {
        icon: 'editor-aligncenter',
        title: __( 'Align center', 'bsx-blocks' ),
        align: 'center',
    },
    {
        icon: 'editor-alignright',
        title: __( 'Align right', 'bsx-blocks' ),
        align: 'right',
    },
    {
        icon: 'editor-alignleft',
        title: __( '– unset –', 'bsx-blocks' ),
        align: '',
    },
];


// toggles

export const ignoreMailtoSpamProtectionToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Spam protected email link (default activated)', 'bsx-blocks' ) }
            checked={ ! value }
            onChange={ onChangeFunction }
            help={ __( 'If activated email will not be easily readable for machines.', 'bsx-blocks' ) }
        />
    )
}

export const targetToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Open in new tab', 'bsx-blocks' ) }
            checked={ value == '_blank' }
            onChange={ onChangeFunction }
        />
    )
}

export const disabledToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Disabled', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const belowNavbarToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Below navbar', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
            help={ __( 'Enable if element is overlayed by navbar and needs a spacer top.', 'bsx-blocks' ) }
        />
    )
}

export const touchFooterToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Touch footer', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
            help={ __( 'Enable if element touch footer without spacing.', 'bsx-blocks' ) }
        />
    )
}

export const inverseTextColorToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Inverse text color', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const headingInheritTextColorToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Inherit text color to headings', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const headingInheritFontWeightToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Inherit font weight to headings', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const roundedToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Rounded', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const alertToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Alert', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const isGalleryParentToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Is image gallery parent', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const bannerInnerToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Is Banner Inner', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const hiddenToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Hidden (optional)', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}



// url inputs

export const linkUrlInput = ( value, onChangeFunction ) => {
    return (
        <URLInput
            label={ __( 'Link URL', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            __nextHasNoMarginBottom={ true }
        />
    )
}

export const bgAttachmentFixedLimitedToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Limit fixed background', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
            help={ __( 'If enabled large displays (>=2.000px) will have static background attachement.', 'bsx-blocks' ) }
        />
    )
}

export const disableResponsiveDownsizingToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Disable responsive image downsizing', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
            help={ __( 'Enable if you don’t want smaller responsive image sizes, since small devices display image in large dimensions.', 'bsx-blocks' ) }
        />
    )
}

export const top0Toggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Top: 0', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}
export const bottom0Toggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Bottom: 0', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}
export const left0Toggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Left: 0', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}
export const right0Toggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Right: 0', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}


// text inputs

export const relInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Rel (optional)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const dataFnInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'data-fn (optional)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const dataFnOptionsInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'data-fn-options (optional)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const dataFnTargetInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'data-fn-target (optional)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const dataTgInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'data-tg (optional)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const iconKeyInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Icon key', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const portraitImgMaxWidthBreakpointInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Portrait image max width breakpoint (numeric in px)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
            help={ __( 'Portrait image will be shown up to this width.', 'bsx-blocks' ) }
        />
    )
}

export const roleInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Role (optional)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const tabindexInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Tabindex (optional)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const forInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'For (optional, required if Node Name is Label)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const typeInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'type (optional)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const onclickInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Onclick (optional)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const idInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'ID', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}


// selects

export const stateSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = states;
    return (
        <SelectControl 
            label={ __( 'State', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const bgColorSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = bgStates;
    return (
        <SelectControl 
            label={ __( 'Background Color', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const textColorSelect = ( value, onChangeFunction, allowedValues, label ) => {
    const defaultValues = textColorStates;
    return (
        <SelectControl 
            label={ !! label ? label : __( 'Text Color', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const buttonStateSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = btnStates;
    return (
        <SelectControl 
            label={ __( 'Color / Appearance', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const colorSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = states;
    return (
        <SelectControl 
            label={ __( 'Text Color', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const stateTypeSelect = ( value, onChangeFunction ) => {
    return (
        <SelectControl label={ __( 'Button Type', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ [
                { value: 'outline', label: __( 'Outline', 'bsx-blocks' ) },
                { value: '', label: __( 'Filled', 'bsx-blocks' ) },
            ] }
        />
    )
}

export const sizeSelect = ( value, onChangeFunction ) => {
    return (
        <SelectControl label={ __( 'Size', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ [
                { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                { value: 'sm', label: __( 'Small', 'bsx-blocks' ) },
                { value: 'lg', label: __( 'Large', 'bsx-blocks' ) },
            ] }
        />
    )
}

export const marginLeftSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Margin left', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}
export const marginRightSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Margin right', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}
export const marginBeforeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Margin before', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Spacer before element', 'bsx-blocks' ) }
        />
    )
}
export const marginAfterSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Margin after', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Spacer after element', 'bsx-blocks' ) }
        />
    )
}

export const resMarginBreakpointsSelect = ( value, onChangeFunction, allowedValues, sizeString ) => {
    const defaultValues = breakpointsWithUnset;
    return (
        <SelectControl 
            label={ __( 'Responsive margin breakpoint', 'bsx-blocks' ) + ( !! sizeString ? ' ' + sizeString : '' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}
export const resMarginPositionSelect = ( value, onChangeFunction, allowedValues, sizeString ) => {
    const defaultValues = marginPaddingPositions;
    return (
        <SelectControl 
            label={ __( 'Responsive margin position', 'bsx-blocks' ) + ( !! sizeString ? ' ' + sizeString : '' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}
export const resMarginSizeSelect = ( value, onChangeFunction, allowedValues, sizeString ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Responsive margin size', 'bsx-blocks' ) + ( !! sizeString ? ' ' + sizeString : '' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const displaySelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'block', label: __( 'Block', 'bsx-blocks' ) },
        { value: 'inline-block', label: __( 'Inline-block', 'bsx-blocks' ) },
        { value: 'inline', label: __( 'Inline', 'bsx-blocks' ) },
        { value: 'flex', label: __( 'Flex', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl label={ __( 'Display', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const verticalAlignSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'middle', label: __( 'Middle', 'bsx-blocks' ) },
        { value: 'baseline', label: __( 'Baseline', 'bsx-blocks' ) },
        { value: 'top', label: __( 'Top', 'bsx-blocks' ) },
        { value: 'bottom', label: __( 'Bottom', 'bsx-blocks' ) },
        { value: 'text-bottom', label: __( 'Text ottom', 'bsx-blocks' ) },
        { value: 'text-top', label: __( 'Text top', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl label={ __( 'Vertical align', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const alignItemsSelect = ( value, onChangeFunction, allowedValues, disabled, sizeString ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'start', label: __( 'Start', 'bsx-blocks' ) },
        { value: 'center', label: __( 'Center', 'bsx-blocks' ) },
        { value: 'end', label: __( 'End', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Align items', 'bsx-blocks' ) + ( !! sizeString ? ' ' + sizeString : '' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            disabled={ disabled }
        />
    )
}

export const paddingBeforeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Padding before', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer before', 'bsx-blocks' ) }
        />
    )
}
export const paddingAfterSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Padding after', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer after', 'bsx-blocks' ) }
        />
    )
}
export const paddingLeftSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Padding left', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer left', 'bsx-blocks' ) }
        />
    )
}
export const paddingRightSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Padding right', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer right', 'bsx-blocks' ) }
        />
    )
}

export const nodeNameSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'div', label: __( 'div', 'bsx-blocks' ) },
        { value: 'span', label: __( 'span', 'bsx-blocks' ) },
        { value: 'label', label: __( 'label', 'bsx-blocks' ) },
        { value: 'section', label: __( 'section', 'bsx-blocks' ) },
        { value: 'figure', label: __( 'figure', 'bsx-blocks' ) },
        { value: 'ul', label: __( 'ul', 'bsx-blocks' ) },
        { value: 'ol', label: __( 'ol', 'bsx-blocks' ) },
        { value: 'li', label: __( 'li', 'bsx-blocks' ) },
        { value: 'h1', label: __( 'h1', 'bsx-blocks' ) },
        { value: 'h2', label: __( 'h2', 'bsx-blocks' ) },
        { value: 'h3', label: __( 'h3', 'bsx-blocks' ) },
        { value: 'h4', label: __( 'h4', 'bsx-blocks' ) },
        { value: 'h5', label: __( 'h5', 'bsx-blocks' ) },
        { value: 'h6', label: __( 'h6', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Node name', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Node name (please edit only if you know what you’re doing)', 'bsx-blocks' ) }
        />
    )
}

export const bgPositionSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: 'c', label: __( 'Center center', 'bsx-blocks' ) },
        { value: 'c25', label: __( 'Center 25%', 'bsx-blocks' ) },
        { value: 'c66', label: __( 'Center 66%', 'bsx-blocks' ) },
        { value: 'c75', label: __( 'Center 75%', 'bsx-blocks' ) },
        { value: 'ct', label: __( 'Center top', 'bsx-blocks' ) },
        { value: 'lc', label: __( 'Left center', 'bsx-blocks' ) },
        { value: 'rc', label: __( 'Right center', 'bsx-blocks' ) },
        { value: '33c', label: __( '33% center', 'bsx-blocks' ) },
        { value: '66c', label: __( '66% center', 'bsx-blocks' ) },
        { value: '80c', label: __( '80% center', 'bsx-blocks' ) },
        { value: '66t', label: __( '66% top', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Background position', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const bgSizeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: 'cover', label: __( 'Cover', 'bsx-blocks' ) },
        { value: 'contain', label: __( 'Contain', 'bsx-blocks' ) },
        { value: '100a', label: __( '100% auto', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Background size', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const bannerTypeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( 'Fix height', 'bsx-blocks' ) },
        { value: 'vh', label: __( 'Viewport dependent height', 'bsx-blocks' ) },
        { value: 'st', label: __( 'Static height', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Banner height type', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Viewport dependant height will be e.g. all viewport height or viewport height - ? pixels. Static height instead depends only on the banners contents.', 'bsx-blocks' ) }
        />
    )
}

export const bannerSizeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '1', label: __( '1 (biggest)', 'bsx-blocks' ) },
        { value: '2', label: __( '2', 'bsx-blocks' ) },
        { value: '3', label: __( '3', 'bsx-blocks' ) },
        { value: '4', label: __( '4', 'bsx-blocks' ) },
        { value: '5', label: __( '5', 'bsx-blocks' ) },
        { value: '6', label: __( '6 (smallest)', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Banner height size', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Choose from 1 (maximum) to 3 (minimum)', 'bsx-blocks' ) }
        />
    )
}

export const bgAttachmentSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'static', label: __( 'static', 'bsx-blocks' ) },
        { value: 'fixed', label: __( 'fixed', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Background attachement', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const textShadowSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
        { value: 'darker', label: __( 'Darker', 'bsx-blocks' ) },
        { value: 'darkest', label: __( 'Darkest', 'bsx-blocks' ) },
        { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
        { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Text shadow', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const textSizeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'lead', label: __( 'Larger', 'bsx-blocks' ) },
        { value: 'small', label: __( 'Smaller', 'bsx-blocks' ) },
        { value: 'h6', label: __( 'Heading 6 (smallest)', 'bsx-blocks' ) },
        { value: 'h5', label: __( 'Heading 5', 'bsx-blocks' ) },
        { value: 'h4', label: __( 'Heading 4', 'bsx-blocks' ) },
        { value: 'h3', label: __( 'Heading 3', 'bsx-blocks' ) },
        { value: 'h2', label: __( 'Heading 2', 'bsx-blocks' ) },
        { value: 'h1', label: __( 'Heading 1 (biggest)', 'bsx-blocks' ) },
        { value: 'display-4', label: __( 'Large 4 (smallest)', 'bsx-blocks' ) },
        { value: 'display-3', label: __( 'Large 3', 'bsx-blocks' ) },
        { value: 'display-2', label: __( 'Large 2', 'bsx-blocks' ) },
        { value: 'display-1', label: __( 'Large 1 (biggest)', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Text size', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const fontWeightSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
        { value: 'normal', label: __( 'Normal', 'bsx-blocks' ) },
        { value: 'bold', label: __( 'Bold', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Font weight', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const borderSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'true', label: __( 'Around', 'bsx-blocks' ) },
        { value: 'top', label: __( 'Top', 'bsx-blocks' ) },
        { value: 'bottom', label: __( 'Bottom', 'bsx-blocks' ) },
        { value: 'left', label: __( 'Left', 'bsx-blocks' ) },
        { value: 'right', label: __( 'Right', 'bsx-blocks' ) },
        { value: 'x', label: __( 'X (left & right)', 'bsx-blocks' ) },
        { value: 'y', label: __( 'Y (top & bottom)', 'bsx-blocks' ) },
        { value: 'u', label: __( 'U (left, right & bottom)', 'bsx-blocks' ) },
        { value: 'inverted-u', label: __( 'Inverted U (left, right & top)', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Border', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const borderStateSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = states;
    return (
        <SelectControl 
            label={ __( 'Border color', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const iconFamilySelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– Default –', 'bsx-blocks' ) },
        { value: 's', label: __( 'Solid', 'bsx-blocks' ) },
        { value: 'b', label: __( 'Brand', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Icon family', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const widthSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: '25', label: __( '25 %', 'bsx-blocks' ) },
        { value: '50', label: __( '50 %', 'bsx-blocks' ) },
        { value: '75', label: __( '75 %', 'bsx-blocks' ) },
        { value: '100', label: __( '100 %', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Width', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const heightSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: '25', label: __( '25 %', 'bsx-blocks' ) },
        { value: '50', label: __( '50 %', 'bsx-blocks' ) },
        { value: '75', label: __( '75 %', 'bsx-blocks' ) },
        { value: '100', label: __( '100 %', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Height', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const objectFitSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'cover', label: __( 'Cover', 'bsx-blocks' ) },
        { value: 'contain', label: __( 'Contain', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Object-Fit', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const overflowSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'hidden', label: __( 'Hidden', 'bsx-blocks' ) },
        { value: 'auto', label: __( 'Auto', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Overflow', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const justifyContentSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'space-between', label: __( 'Space between', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Justify content', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const flexDirectionSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'column', label: __( 'Column', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Flex direction', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const breakpointsSelect = ( value, onChangeFunction, allowedValues, labelString ) => {
    const defaultValues = breakpointsWithUnset;
    return (
        <SelectControl 
            label={ ( !! labelString ? ' ' + labelString : __( 'Breakpoint', 'bsx-blocks' ) ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const textAlignSelect = ( value, onChangeFunction, allowedValues, labelString ) => {
    const defaultValues = textAlignValues;
    return (
        <SelectControl 
            label={ ( !! labelString ? ' ' + labelString : __( 'Text align', 'bsx-blocks' ) ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const multilayerSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'parent', label: __( 'Parent', 'bsx-blocks' ) },
        { value: 'absolute', label: __( 'Absolute', 'bsx-blocks' ) },
        { value: 'static', label: __( 'Static', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Multilayer', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const positionSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'relative', label: __( 'Relative', 'bsx-blocks' ) },
        { value: 'absolute', label: __( 'Absolute', 'bsx-blocks' ) },
        { value: 'static', label: __( 'Static', 'bsx-blocks' ) },
        { value: 'fixed', label: __( 'Fixed', 'bsx-blocks' ) },
        { value: 'sticky', label: __( 'Sticky', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Position', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const zIndexSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: '-1', label: __( '-1', 'bsx-blocks' ) },
        { value: '0', label: __( '0', 'bsx-blocks' ) },
        { value: '1', label: __( '1', 'bsx-blocks' ) },
        { value: '2', label: __( '2', 'bsx-blocks' ) },
        { value: '3', label: __( '3', 'bsx-blocks' ) },
        { value: '4', label: __( '4', 'bsx-blocks' ) },
        { value: '5', label: __( '5', 'bsx-blocks' ) },
        { value: '6', label: __( '6', 'bsx-blocks' ) },
        { value: '7', label: __( '7', 'bsx-blocks' ) },
        { value: '8', label: __( '8', 'bsx-blocks' ) },
        { value: '9', label: __( '9', 'bsx-blocks' ) },
        { value: '10', label: __( '10', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Z-Index', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}




// radio

export const scaleSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '1', label: __( '100%', 'bsx-blocks' ) },
        { value: '0.75', label: __( '75%', 'bsx-blocks' ) },
        { value: '0.5', label: __( '50%', 'bsx-blocks' ) },
        { value: '0.25', label: __( '25%', 'bsx-blocks' ) },
    ];
    return (
        <RadioControl
            label={ __( 'Scale', 'bsx-blocks' ) }
            selected={ value + '' }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            onChange={ onChangeFunction }
        />
    )
}




// toolbar

export const textAlignToolbar = ( value, onChangeFunction ) => {
    const defaultValues = states;
    return (
        <AlignmentToolbar
            label={ __( 'Alignment', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            alignmentControls={ alignmentControls }
        />
    )
}




                


// uploads

export const imgUploadClickableImg = ( imgId, url, onChangeFunction, type ) => {
    const alt = ( typeof type !== 'undefined' && type === 'p' ) 
        ? __( 'Change / upload portrait image', 'bsx-blocks' ) 
        : __( 'Change / upload image', 'bsx-blocks' )
    ;
    return (
        <MediaUpload
            onSelect={ onChangeFunction }
            allowedTypes="image"
            value={ imgId }
            render={ ( { open } ) => (
                <Button
                    className="bsxui-config-panel-img-button has-margin-bottom"
                    onClick={ open }
                >
                    <img class="bsxui-config-panel-img" src={ url } alt={ alt } />
                </Button>
            ) }
        />
    )
}

export const imgUploadButton = ( imgId, onChangeFunction, type ) => {
    const label = ( typeof type !== 'undefined' && type === 'p' ) 
        ? __( 'Change / upload portrait image', 'bsx-blocks' ) 
        : __( 'Change / upload image', 'bsx-blocks' )
    ;
    return (
        <MediaUpload
            onSelect={ onChangeFunction }
            allowedTypes="image"
            value={ imgId }
            render={ ( { open } ) => (
                <Button 
                    onClick={ open }
                    isSecondary
                >
                    { label }
                </Button>
            ) }
        />
    )
}


// template selects

export const inlineTemplateSelect = ( templates, onChangeFunction ) => {
    // has no templateName since non selected yet
    return (
        <div class="bsxui-initial-inline-control">
            <div class="bsxui-initial-inline-control-heading">
                { __( 'Please select template', 'bsx-blocks' ) }
            </div>
            <div className="bsxui-icon-text-button-list">
                { templates.map( ( template, index ) => (
                    <Button
                        label={ template.title }
                        onClick={ () => {
                            onChangeFunction( template.name );
                        } }
                        className={ 'bsxui-icon-text-button-list-item ' }
                    >
                        <div class="bsxui-icon-text-button-list-item-icon">
                            { template.icon }
                        </div>
                        <div class="bsxui-icon-text-button-list-item-label">
                            { template.title }
                        </div>
                    </Button>
                ) ) }
            </div>
        </div>
    )
}

export const uiTemplateSelect = ( templates, templateName, onChangeFunction ) => {
    return (
        <div className="bsxui-icon-text-button-list">
            { templates.map( ( template, index ) => (
                <Button
                    label={ template.title }
                    onClick={ () => {
                        onChangeFunction( template.name );
                    } }
                    className={ 'bsxui-icon-text-button-list-item ' + ( templateName === template.name ? 'active' : '' ) }
                >
                    <div class="bsxui-icon-text-button-list-item-icon">
                        { template.icon }
                    </div>
                    <div class="bsxui-icon-text-button-list-item-label">
                        { template.title }
                    </div>
                </Button>
            ) ) }
        </div>
    )
}






