// wp import
import { __ } from '@wordpress/i18n';

// functions
import {
    bannerEmpty,
    bannerContainerWithHeading,
    bannerStaticContainerWithHeading,
    bannerColumnRow,
    default as bannerHeadingText,
    default as bannerHeadingTextButtonColor,
} from './../_functions/icon';


const templates = [
    {
        name: 'empty',
        title: __( 'Empty', 'bsx-blocks' ),
        icon: bannerEmpty,
        attributes: {
            marginAfter: '5',
        },
        template: [
            [
                'core/paragraph',
                { 
                    placeholder: __( 'Change paragraph text or delete...', 'bsx-blocks' ),
                }
            ]
        ],
        templateLock: false,
    },
    {
        name: 'container-with-heading',
        title: __( 'Container with Heading', 'bsx-blocks' ),
        icon: bannerContainerWithHeading,
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {
                },
                [
                    [
                        'core/heading',
                        { 
                            placeholder: __( 'Add heading text, configure heading level...', 'bsx-blocks' ),
                            textSize: 'display-1',
                            textColor: 'white',
                            textShadow: 'darker',
                            marginAfter: '0',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'static-container-with-heading',
        title: __( 'Static with Container & Heading', 'bsx-blocks' ),
        icon: bannerStaticContainerWithHeading,
        attributes: {
            bannerType: 'st',
            bannerSize: '3',
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {
                },
                [
                    [
                        'core/heading',
                        { 
                            placeholder: __( 'Add heading text, configure heading level...', 'bsx-blocks' ),
                            textSize: 'display-1',
                            textColor: 'white',
                            textShadow: 'darker',
                            marginAfter: '0',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'column-row-banner',
        title: __( 'Bottom bar Banner', 'bsx-blocks' ),
        icon: bannerColumnRow,
        attributes: {
            marginAfter: '5',
        },
        template: [  
            [ 
                'bsx-blocks/column-rows', 
                {
                    templateName: 'default-auto',
                    display: 'flex',
                    flexDirection: 'column',
                    className: 'banner-inner',
                },
                [
                    [ 
                        'bsx-blocks/column-row', 
                        {
                            columnRowType: '',
                            display: 'flex',
                            alignItems: 'center',
                        },
                        [ 
                            [ 
                                'bsx-blocks/wrapper', 
                                {
                                    width: '100',
                                },
                                [
                                    [ 
                                        'bsx-blocks/container', 
                                        {},
                                        [
                                            [
                                                'core/heading',
                                                { 
                                                    placeholder: __( 'Add heading text, configure heading level...', 'bsx-blocks' ),
                                                    textSize: 'display-1',
                                                    textColor: 'white',
                                                    textShadow: 'darker', 
                                                    marginAfter: '0',
                                                }
                                            ]
                                        ],
                                    ], 
                                ],
                            ], 
                        ],
                    ], 
                    [ 
                        'bsx-blocks/column-row', 
                        {
                            columnRowType: 'auto',
                        },
                        [
                            [ 
                                'bsx-blocks/wrapper', 
                                {
                                    bgColor: 'primary-transparent',
                                    paddingBefore: '3',
                                    paddingAfter: '3'
                                },
                                [
                                    [ 
                                        'bsx-blocks/container', 
                                        {},
                                        [
                                            [
                                                'core/paragraph',
                                                { 
                                                    placeholder: __( 'Add text...', 'bsx-blocks' ),
                                                    textSize: 'lead',
                                                    textColor: 'white',
                                                    marginAfter: '0',
                                                }
                                            ]
                                        ],
                                    ], 
                                ],
                            ], 
                        ],
                    ], 
                ],
            ],
        ],
        templateLock: false,
    },
    {
        name: 'heading-text-banner',
        title: __( 'Heading Text Banner', 'bsx-blocks' ),
        icon: bannerHeadingText,
        attributes: {
            marginAfter: '5',
            bannerSize: '1',
            belowNavbar: true,
        },
        template: [  
            [ 
                'bsx-blocks/container', 
                {},
                [
                    [ 
                        'bsx-blocks/wrapper', 
                        {
                            textShadow: 'darker',
                            fontWeight: 'normal',
                            headingInheritTextColor: true,
                            headingInheritFontWeight: true,
                            textColor: 'white',
                            textAlign: 'center',
                            marginAfter: '4',
                        },
                        [
                            [
                                'core/heading',
                                { 
                                    level: 1,
                                    placeholder: __( 'Add heading text, configure heading level...', 'bsx-blocks' ),
                                    textSize: 'display-1',
                                }
                            ],
                        ],
                    ], 
                    [ 
                        'bsx-blocks/wrapper', 
                        {
                            textSize: 'h2',
                            textShadow: 'darker',
                            fontWeight: 'bold',
                            textColor: 'white',
                            headingInheritTextColor: true,
                            headingInheritFontWeight: true,
                            textAlign: 'center',
                        },
                        [
                            [
                                'core/paragraph',
                                { 
                                    placeholder: __( 'Add text...', 'bsx-blocks' ),
                                }
                            ],
                        ],
                    ], 
                ],
            ],
        ],
        templateLock: false,
    },
    {
        name: 'heading-text-button-color-banner',
        title: __( 'Heading Text Button Color Banner', 'bsx-blocks' ),
        icon: bannerHeadingTextButtonColor,
        attributes: {
            marginAfter: '5',
            bannerType: 'st',
            bgColor: 'primary',
            bannerSize: '2',
            nodeName: 'section',
        },
        template: [  
            [ 
                'bsx-blocks/container', 
                {},
                [
                    [ 
                        'bsx-blocks/wrapper', 
                        {
                            inverseTextColor: true,
                            headingInheritTextColor: true,
                            textAlign: 'center',
                        },
                        [
                            [
                                'core/heading',
                                { 
                                    marginAfter: '0',
                                    placeholder: __( 'Add heading text, configure heading level...', 'bsx-blocks' ),
                                }
                            ],
                        ],
                    ], 
                    [ 
                        'bsx-blocks/wrapper', 
                        {
                            textSize: 'lead',
                            inverseTextColor: true,
                            headingInheritTextColor: true,
                            textAlign: 'center',
                            marginBefore: 4,
                            paddingAfter: 3
                        },
                        [
                            [
                                'core/paragraph',
                                { 
                                    placeholder: __( 'Add text...', 'bsx-blocks' ),
                                }
                            ],
                        ],
                    ], 
                    [
                        'bsx-blocks/buttons',
                        {
                            templateName: 'one-button',
                            textAlign: 'center',
                        },
                        [
                            [
                                'bsx-blocks/button',
                                {
                                    state: 'light',
                                    stateType: '',
                                    size: 'lg',
                                },
                            ],
                        ],
                    ],
                ],
            ],
        ],
        templateLock: false,
    },
];

export default templates;

