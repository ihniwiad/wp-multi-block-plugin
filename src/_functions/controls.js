// wp import
const { __, setLocaleData } = wp.i18n;
const {
    URLInput,
    RichText,
    MediaUpload,
    AlignmentToolbar,
} = wp.blockEditor;
const { 
    TextControl,
    PanelBody,
    ToggleControl,
    SelectControl,
    RadioControl,
    SVG, 
    Path,
    Button,
} = wp.components;

// functions
import { 
    filterByAllowedValueKeys,
} from './utilities.js';


// internal vars

const marginPaddingSizes = [
    { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
    { value: '0', label: __( 'none (0)', 'multiple-blocks-plugin-textdomain' ) },
    { value: '1', label: __( 'extra small', 'multiple-blocks-plugin-textdomain' ) },
    { value: '2', label: __( 'small', 'multiple-blocks-plugin-textdomain' ) },
    { value: '3', label: __( 'medium', 'multiple-blocks-plugin-textdomain' ) },
    { value: '4', label: __( 'large', 'multiple-blocks-plugin-textdomain' ) },
    { value: '5', label: __( 'extra large', 'multiple-blocks-plugin-textdomain' ) },
];
const breakpointsWithUnset = [
    { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'xs', label: __( 'Default (XS up)', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'sm', label: __( 'SM up', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'md', label: __( 'MD up', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'lg', label: __( 'LG up', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'xl', label: __( 'XL up', 'multiple-blocks-plugin-textdomain' ) },
];
const marginPaddingPositions = [
    { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'all', label: __( 'All', 'multiple-blocks-plugin-textdomain' ) },
    { value: 't', label: __( 'Before', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'b', label: __( 'After', 'multiple-blocks-plugin-textdomain' ) },
    { value: '2', label: __( 'Y (before & after)', 'multiple-blocks-plugin-textdomain' ) },
    { value: '3', label: __( 'Left', 'multiple-blocks-plugin-textdomain' ) },
    { value: '4', label: __( 'Right', 'multiple-blocks-plugin-textdomain' ) },
    { value: '5', label: __( 'X (left & right)', 'multiple-blocks-plugin-textdomain' ) },
];

const states = [
    { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'white', label: __( 'White', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'primary', label: __( 'Primary', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'secondary', label: __( 'Secondary', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'success', label: __( 'Success', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'danger', label: __( 'Danger', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'warning', label: __( 'Warning', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'info', label: __( 'Info', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'light', label: __( 'Light', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'dark', label: __( 'Dark', 'multiple-blocks-plugin-textdomain' ) },
];

const textColorStates = [
    { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'white', label: __( 'White', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'primary', label: __( 'Primary', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'secondary', label: __( 'Secondary', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'success', label: __( 'Success', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'danger', label: __( 'Danger', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'warning', label: __( 'Warning', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'info', label: __( 'Info', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'light', label: __( 'Light', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'dark', label: __( 'Dark', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'muted', label: __( 'Muted', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'white-50', label: __( 'White transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'black-50', label: __( 'Black transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'inherit', label: __( 'Inherit', 'multiple-blocks-plugin-textdomain' ) },
];

// doesn’t have '', has additional 'text-link'
const btnStates = [
    { value: 'primary', label: __( 'Primary', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'secondary', label: __( 'Secondary', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'success', label: __( 'Success', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'danger', label: __( 'Danger', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'warning', label: __( 'Warning', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'info', label: __( 'Info', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'light', label: __( 'Light', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'dark', label: __( 'Dark', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'link', label: __( 'Link Button', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'text-link', label: __( 'Text link', 'multiple-blocks-plugin-textdomain' ) },
];

const bgStates = [
    { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'white', label: __( 'White', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'white-opaque', label: __( 'White opaque', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'white-transparent', label: __( 'White transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'black', label: __( 'Black', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'black-opaque', label: __( 'Black opaque', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'black-transparent', label: __( 'Black transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'primary', label: __( 'Primary', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'primary-opaque', label: __( 'Primary opaque', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'primary-transparent', label: __( 'Primary transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'secondary', label: __( 'Secondary', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'secondary-opaque', label: __( 'Secondary opaque', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'secondary-transparent', label: __( 'Secondary transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'success', label: __( 'Success', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'success-opaque', label: __( 'Success opaque', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'success-transparent', label: __( 'Success transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'danger', label: __( 'Danger', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'danger-opaque', label: __( 'Danger opaque', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'danger-transparent', label: __( 'Danger transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'warning', label: __( 'Warning', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'warning-opaque', label: __( 'Warning opaque', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'warning-transparent', label: __( 'Warning transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'info', label: __( 'Info', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'info-opaque', label: __( 'Info opaque', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'info-transparent', label: __( 'Info transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'light', label: __( 'Light', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'light-opaque', label: __( 'Light opaque', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'light-transparent', label: __( 'Light transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'dark', label: __( 'Dark', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'dark-opaque', label: __( 'Dark opaque', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'dark-transparent', label: __( 'Dark transparent', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'transparent', label: __( 'Transparent', 'multiple-blocks-plugin-textdomain' ) },
];

const textAlignValues = [
    { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'left', label: __( 'left', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'center', label: __( 'Center', 'multiple-blocks-plugin-textdomain' ) },
    { value: 'right', label: __( 'Right', 'multiple-blocks-plugin-textdomain' ) },
];

const alignmentControls = [
    {
        icon: 'editor-alignleft',
        title: __( 'Align left', 'multiple-blocks-plugin-textdomain' ),
        align: 'left',
    },
    {
        icon: 'editor-aligncenter',
        title: __( 'Align center', 'multiple-blocks-plugin-textdomain' ),
        align: 'center',
    },
    {
        icon: 'editor-alignright',
        title: __( 'Align right', 'multiple-blocks-plugin-textdomain' ),
        align: 'right',
    },
    {
        icon: 'editor-alignleft',
        title: __( '– unset –', 'multiple-blocks-plugin-textdomain' ),
        align: '',
    },
];


// toggles

export const ignoreMailtoSpamProtectionToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Spam protected email link (default activated)', 'multiple-blocks-plugin-textdomain' ) }
            checked={ ! value }
            onChange={ onChangeFunction }
            help={ __( 'If activated email will not be easily readable for machines.', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}

export const targetToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Open in new tab', 'multiple-blocks-plugin-textdomain' ) }
            checked={ value == '_blank' }
            onChange={ onChangeFunction }
        />
    )
}

export const disabledToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Disabled', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const belowNavbarToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Below navbar', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
            help={ __( 'Enable if element is overlayed by navbar and needs a spacer top.', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}

export const touchFooterToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Touch footer', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
            help={ __( 'Enable if element touch footer without spacing.', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}

export const inverseTextColorToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Inverse text color', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const headingInheritTextColorToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Inherit text color to headings', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const headingInheritFontWeightToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Inherit font weight to headings', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const roundedToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Rounded', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const alertToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Alert', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const isGalleryParentToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Is image gallery parent', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const bannerInnerToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Is Banner Inner', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const hiddenToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Hidden (optional)', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}



// url inputs

export const linkUrlInput = ( value, onChangeFunction ) => {
    return (
        <URLInput
            label={ __( 'Link URL', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
        />
    )
}

export const bgAttachmentFixedLimitedToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Limit fixed background', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
            help={ __( 'If enabled large displays (>=2.000px) will have static background attachement.', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}

export const disableResponsiveDownsizingToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Disable responsive image downsizing', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
            help={ __( 'Enable if you don’t want smaller responsive image sizes, since small devices display image in large dimensions.', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}

export const top0Toggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Top: 0', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}
export const bottom0Toggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Bottom: 0', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}
export const left0Toggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Left: 0', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}
export const right0Toggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Right: 0', 'multiple-blocks-plugin-textdomain' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}



// text inputs

export const relInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Rel (optional)', 'multiple-blocks-plugin-textdomain' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const dataFnInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'data-fn (optional)', 'multiple-blocks-plugin-textdomain' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const dataFnOptionsInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'data-fn-options (optional)', 'multiple-blocks-plugin-textdomain' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const dataFnTargetInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'data-fn-target (optional)', 'multiple-blocks-plugin-textdomain' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const dataTgInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'data-tg (optional)', 'multiple-blocks-plugin-textdomain' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const iconKeyInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Icon key', 'multiple-blocks-plugin-textdomain' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const portraitImgMaxWidthBreakpointInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Portrait image max width breakpoint (numeric in px)', 'multiple-blocks-plugin-textdomain' ) }
            value={ value } 
            onChange={ onChangeFunction }
            help={ __( 'Portrait image will be shown up to this width.', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}

export const roleInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Role (optional)', 'multiple-blocks-plugin-textdomain' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const tabindexInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Tabindex (optional)', 'multiple-blocks-plugin-textdomain' ) }
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
            label={ __( 'State', 'multiple-blocks-plugin-textdomain' ) }
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
            label={ __( 'Background Color', 'multiple-blocks-plugin-textdomain' ) }
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
            label={ !! label ? label : __( 'Text Color', 'multiple-blocks-plugin-textdomain' ) }
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
            label={ __( 'Color / Appearance', 'multiple-blocks-plugin-textdomain' ) }
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
            label={ __( 'Text Color', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const stateTypeSelect = ( value, onChangeFunction ) => {
    return (
        <SelectControl label={ __( 'Button Type', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ [
                { value: 'outline', label: __( 'Outline', 'multiple-blocks-plugin-textdomain' ) },
                { value: '', label: __( 'Filled', 'multiple-blocks-plugin-textdomain' ) },
            ] }
        />
    )
}

export const sizeSelect = ( value, onChangeFunction ) => {
    return (
        <SelectControl label={ __( 'Size', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ [
                { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
                { value: 'sm', label: __( 'Small', 'multiple-blocks-plugin-textdomain' ) },
                { value: 'lg', label: __( 'Large', 'multiple-blocks-plugin-textdomain' ) },
            ] }
        />
    )
}

export const marginLeftSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Margin left', 'multiple-blocks-plugin-textdomain' ) }
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
            label={ __( 'Margin right', 'multiple-blocks-plugin-textdomain' ) }
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
            label={ __( 'Margin before', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Spacer before element', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}
export const marginAfterSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Margin after', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Spacer after element', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}

export const resMarginBreakpointsSelect = ( value, onChangeFunction, allowedValues, sizeString ) => {
    const defaultValues = breakpointsWithUnset;
    return (
        <SelectControl 
            label={ __( 'Responsive margin breakpoint', 'multiple-blocks-plugin-textdomain' ) + ( !! sizeString ? ' ' + sizeString : '' ) }
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
            label={ __( 'Responsive margin position', 'multiple-blocks-plugin-textdomain' ) + ( !! sizeString ? ' ' + sizeString : '' ) }
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
            label={ __( 'Responsive margin size', 'multiple-blocks-plugin-textdomain' ) + ( !! sizeString ? ' ' + sizeString : '' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const displaySelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'block', label: __( 'Block', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'inline-block', label: __( 'Inline-block', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'inline', label: __( 'Inline', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'flex', label: __( 'Flex', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl label={ __( 'Display', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const verticalAlignSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'middle', label: __( 'Middle', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'baseline', label: __( 'Baseline', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'top', label: __( 'Top', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'bottom', label: __( 'Bottom', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'text-bottom', label: __( 'Text ottom', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'text-top', label: __( 'Text top', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl label={ __( 'Vertical align', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const alignItemsSelect = ( value, onChangeFunction, allowedValues, disabled, sizeString ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'start', label: __( 'Start', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'center', label: __( 'Center', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'end', label: __( 'End', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Align items', 'multiple-blocks-plugin-textdomain' ) + ( !! sizeString ? ' ' + sizeString : '' ) }
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
            label={ __( 'Padding before', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer before', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}
export const paddingAfterSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Padding after', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer after', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}
export const paddingLeftSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Padding left', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer left', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}
export const paddingRightSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Padding right', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer right', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}

export const nodeNameSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'div', label: __( 'div', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'span', label: __( 'span', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'section', label: __( 'section', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'figure', label: __( 'figure', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'ul', label: __( 'ul', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'ol', label: __( 'ol', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'li', label: __( 'li', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'h1', label: __( 'h1', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'h2', label: __( 'h2', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'h3', label: __( 'h3', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'h4', label: __( 'h4', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'h5', label: __( 'h5', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'h6', label: __( 'h6', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Node name', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Node name (please edit only if you know what you’re doing)', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}

export const bgPositionSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: 'c', label: __( 'Center center', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'c25', label: __( 'Center 25%', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'c66', label: __( 'Center 66%', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'c75', label: __( 'Center 75%', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'ct', label: __( 'Center top', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'lc', label: __( 'Left center', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'rc', label: __( 'Right center', 'multiple-blocks-plugin-textdomain' ) },
        { value: '33c', label: __( '33% center', 'multiple-blocks-plugin-textdomain' ) },
        { value: '66c', label: __( '66% center', 'multiple-blocks-plugin-textdomain' ) },
        { value: '80c', label: __( '80% center', 'multiple-blocks-plugin-textdomain' ) },
        { value: '66t', label: __( '66% top', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Background position', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const bgSizeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: 'cover', label: __( 'Cover', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'contain', label: __( 'Contain', 'multiple-blocks-plugin-textdomain' ) },
        { value: '100a', label: __( '100% auto', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Background size', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const bannerTypeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( 'Fix height', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'vh', label: __( 'Viewport dependent height', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'st', label: __( 'Static height', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Banner height type', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Viewport dependant height will be e.g. all viewport height or viewport height - ? pixels. Static height instead depends only on the banners contents.', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}

export const bannerSizeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '1', label: __( '1 (biggest)', 'multiple-blocks-plugin-textdomain' ) },
        { value: '2', label: __( '2', 'multiple-blocks-plugin-textdomain' ) },
        { value: '3', label: __( '3', 'multiple-blocks-plugin-textdomain' ) },
        { value: '4', label: __( '4', 'multiple-blocks-plugin-textdomain' ) },
        { value: '5', label: __( '5', 'multiple-blocks-plugin-textdomain' ) },
        { value: '6', label: __( '6 (smallest)', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Banner height size', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Choose from 1 (maximum) to 3 (minimum)', 'multiple-blocks-plugin-textdomain' ) }
        />
    )
}

export const bgAttachmentSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'static', label: __( 'static', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'fixed', label: __( 'fixed', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Background attachement', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const textShadowSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'dark', label: __( 'Dark', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'darker', label: __( 'Darker', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'darkest', label: __( 'Darkest', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'light', label: __( 'Light', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'primary', label: __( 'Primary', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Text shadow', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const fontWeightSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'light', label: __( 'Light', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'normal', label: __( 'Normal', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'bold', label: __( 'Bold', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Font weight', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const borderSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'true', label: __( 'Around', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'top', label: __( 'Top', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'bottom', label: __( 'Bottom', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'left', label: __( 'Left', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'right', label: __( 'Right', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'x', label: __( 'X (left & right)', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'y', label: __( 'Y (top & bottom)', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'u', label: __( 'U (left, right & bottom)', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'inverted-u', label: __( 'Inverted U (left, right & top)', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Border', 'multiple-blocks-plugin-textdomain' ) }
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
            label={ __( 'Border color', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const iconFamilySelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– Default –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 's', label: __( 'Solid', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'b', label: __( 'Brand', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Icon family', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const widthSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: '25', label: __( '25 %', 'multiple-blocks-plugin-textdomain' ) },
        { value: '50', label: __( '50 %', 'multiple-blocks-plugin-textdomain' ) },
        { value: '75', label: __( '75 %', 'multiple-blocks-plugin-textdomain' ) },
        { value: '100', label: __( '100 %', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Width', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const heightSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: '25', label: __( '25 %', 'multiple-blocks-plugin-textdomain' ) },
        { value: '50', label: __( '50 %', 'multiple-blocks-plugin-textdomain' ) },
        { value: '75', label: __( '75 %', 'multiple-blocks-plugin-textdomain' ) },
        { value: '100', label: __( '100 %', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Height', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const objectFitSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'cover', label: __( 'Cover', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'contain', label: __( 'Contain', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Object-Fit', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const overflowSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'hidden', label: __( 'Hidden', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'auto', label: __( 'Auto', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Overflow', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const justifyContentSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'space-between', label: __( 'Space between', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Justify content', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const flexDirectionSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'column', label: __( 'Column', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Flex direction', 'multiple-blocks-plugin-textdomain' ) }
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
            label={ ( !! labelString ? ' ' + labelString : __( 'Breakpoint', 'multiple-blocks-plugin-textdomain' ) ) }
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
            label={ ( !! labelString ? ' ' + labelString : __( 'Text align', 'multiple-blocks-plugin-textdomain' ) ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const multilayerSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'parent', label: __( 'Parent', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'absolute', label: __( 'Absolute', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'static', label: __( 'Static', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Multilayer', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const positionSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'relative', label: __( 'Relative', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'absolute', label: __( 'Absolute', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'static', label: __( 'Static', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'fixed', label: __( 'Fixed', 'multiple-blocks-plugin-textdomain' ) },
        { value: 'sticky', label: __( 'Sticky', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Position', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const zIndexSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'multiple-blocks-plugin-textdomain' ) },
        { value: '-1', label: __( '-1', 'multiple-blocks-plugin-textdomain' ) },
        { value: '0', label: __( '0', 'multiple-blocks-plugin-textdomain' ) },
        { value: '1', label: __( '1', 'multiple-blocks-plugin-textdomain' ) },
        { value: '2', label: __( '2', 'multiple-blocks-plugin-textdomain' ) },
        { value: '3', label: __( '3', 'multiple-blocks-plugin-textdomain' ) },
        { value: '4', label: __( '4', 'multiple-blocks-plugin-textdomain' ) },
        { value: '5', label: __( '5', 'multiple-blocks-plugin-textdomain' ) },
        { value: '6', label: __( '6', 'multiple-blocks-plugin-textdomain' ) },
        { value: '7', label: __( '7', 'multiple-blocks-plugin-textdomain' ) },
        { value: '8', label: __( '8', 'multiple-blocks-plugin-textdomain' ) },
        { value: '9', label: __( '9', 'multiple-blocks-plugin-textdomain' ) },
        { value: '10', label: __( '10', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Z-Index', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}




// radio

export const scaleSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '1', label: __( '100%', 'multiple-blocks-plugin-textdomain' ) },
        { value: '0.75', label: __( '75%', 'multiple-blocks-plugin-textdomain' ) },
        { value: '0.5', label: __( '50%', 'multiple-blocks-plugin-textdomain' ) },
        { value: '0.25', label: __( '25%', 'multiple-blocks-plugin-textdomain' ) },
    ];
    return (
        <RadioControl
            label={ __( 'Scale', 'multiple-blocks-plugin-textdomain' ) }
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
            label={ __( 'Alignment', 'multiple-blocks-plugin-textdomain' ) }
            value={ value }
            onChange={ onChangeFunction }
            alignmentControls={ alignmentControls }
        />
    )
}




                


// uploads

export const imgUploadClickableImg = ( imgId, url, onChangeFunction, type ) => {
    const alt = ( typeof type !== 'undefined' && type === 'p' ) 
        ? __( 'Change / upload portrait image', 'multiple-blocks-plugin-textdomain' ) 
        : __( 'Change / upload image', 'multiple-blocks-plugin-textdomain' )
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
        ? __( 'Change / upload portrait image', 'multiple-blocks-plugin-textdomain' ) 
        : __( 'Change / upload image', 'multiple-blocks-plugin-textdomain' )
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
                { __( 'Please select template', 'multiple-blocks-plugin-textdomain' ) }
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






