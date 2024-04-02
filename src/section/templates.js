// wp import
import { __ } from '@wordpress/i18n';

// functions
import { 
    sectionEmpty,
    sectionContainerHeading,
    sectionContainerHeadingTextGallery,
    sectionContainerRoundedColoredBanner,
    default as sectionImgBadgeHeadingTextButtonColumns,
    default as sectionBadgeHeadingTextButtonImgColumns,
    default as sectionHeadingListColumns,
    default as sectionBgHeadingIconHeadingTextColumns,
} from './../_functions/icon';


const templates = [
    {
        name: 'empty',
        title: __( 'Empty', 'bsx-blocks' ),
        icon: sectionEmpty,
        attributes: {
            marginAfter: '5',
        },
        template: [],
        templateLock: false,
    },
    {
        name: 'container-with-heading',
        title: __( 'Container with Heading', 'bsx-blocks' ),
        icon: sectionContainerHeading,
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {},
                [
                    [
                        'core/heading',
                        {
                            placeholder: __( 'Add heading, configure heading level...', 'bsx-blocks' ),
                        },
                    ],
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'container-heading-text-gallery',
        title: __( 'Container, Heading, Text & Gallery', 'bsx-blocks' ),
        icon: sectionContainerHeadingTextGallery,
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {},
                [
                    [
                        'core/heading',
                        {
                            placeholder: __( 'Add heading, configure heading level...', 'bsx-blocks' ),
                        },
                    ],
                    [
                        'core/paragraph',
                        { 
                            placeholder: __( 'Add text...', 'bsx-blocks' ), 
                        },
                    ],
                    [
                        'bsx-blocks/img-gallery',
                        { 
                            galleryType: 'floating', 
                            rounded: true,
                            imgThumbnail: true,
                            borderState: 'info',
                        },
                    ],
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'rounded-color-banner',
        title: __( 'Rounded colored Banner (primary dark)', 'bsx-blocks' ),
        icon: sectionContainerRoundedColoredBanner,
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {},
                [
                    [  
                        'bsx-blocks/wrapper', 
                        {
                            bgColor: 'primary',
                            textColor: 'dark',
                            textAlign: 'center',
                            rounded: true,
                            paddingBefore: '4',
                            paddingAfter: '4',
                            paddingLeft: '3',
                            paddingRight: '3',
                        },
                        [
                            [
                                'core/heading',
                                { 
                                    placeholder: __( 'Add heading, configure heading level...', 'bsx-blocks' ),
                                    textColor: 'dark',
                                    marginAfter: '3',
                                },
                            ],
                            [
                                'core/paragraph',
                                { 
                                    placeholder: __( 'Add text...', 'bsx-blocks' ), 
                                    textSize: 'lead',
                                },
                            ],
                            [
                                'bsx-blocks/buttons',
                                {
                                    templateName: 'one-button',
                                },
                                [
                                    [
                                        'bsx-blocks/button',
                                        {
                                            state: 'dark',
                                            marginBefore: '1',
                                            marginAfter: '1',
                                            marginLeft: '1',
                                            marginRight: '1',
                                        },
                                        [],
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
        name: 'img-badge-heading-text-button-columns',
        title: __( 'Image Badge Heading Button Columns', 'bsx-blocks' ),
        icon: sectionImgBadgeHeadingTextButtonColumns,
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {},
                [
                    [  
                        'bsx-blocks/row-with-cols', 
                        {
                            templateName: '1-2',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        [
                            [
                                'bsx-blocks/col',
                                { 
                                    colType: 'default',
                                    sizeXs: '8',
                                    sizeMd: '5',
                                    sizeLg: '6',
                                },
                                [
                                    [
                                        'bsx-blocks/row-with-cols',
                                        {
                                            templateName: '1-1',
                                            justifyContent: 'center',
                                        },
                                        [
                                            [
                                                'bsx-blocks/col',
                                                {
                                                    colType: 'default',
                                                    sizeXs: '12',
                                                    sizeLg: '10',
                                                    marginAfter: '',
                                                },
                                                [
                                                    [
                                                        'bsx-blocks/lazy-img',
                                                        {
                                                            rounded: 'circle',
                                                            marginAfter: '',
                                                        }
                                                    ],
                                                ],
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                            [
                                'bsx-blocks/col',
                                { 
                                    colType: 'default', 
                                    sizeMd: '7',
                                    sizeLg: '6',
                                },
                                [
                                    [
                                        'bsx-blocks/wrapper',
                                        {
                                            textSize: 'lead',
                                            marginAfter: '2',
                                        },
                                        [
                                            [
                                                'bsx-blocks/badge',
                                                {
                                                    state: 'secondary',
                                                },
                                            ],
                                        ],
                                    ],
                                    [
                                        'core/heading',
                                        {},
                                    ],
                                    [
                                        'core/paragraph',
                                        {},
                                    ],
                                    [
                                        'bsx-blocks/buttons',
                                        {
                                            templateName: 'one-button',
                                        },
                                        [
                                            [
                                                'bsx-blocks/button',
                                                {
                                                    state: 'primary',
                                                    stateType: '',
                                                    size: 'lg',
                                                },
                                                [],
                                            ],
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
        name: 'badge-heading-text-button-img-columns',
        title: __( 'Badge Heading Button Image Columns', 'bsx-blocks' ),
        icon: sectionBadgeHeadingTextButtonImgColumns,
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {},
                [
                    [  
                        'bsx-blocks/row-with-cols', 
                        {
                            templateName: '1-2',
                            alignItems: 'center',
                            justifyContent: 'center',
                            rowReverse: 'md',
                        },
                        [
                            [
                                'bsx-blocks/col',
                                { 
                                    colType: 'default',
                                    sizeXs: '8',
                                    sizeMd: '5',
                                    sizeLg: '6',
                                },
                                [
                                    [
                                        'bsx-blocks/row-with-cols',
                                        {
                                            templateName: '1-1',
                                            justifyContent: 'center',
                                        },
                                        [
                                            [
                                                'bsx-blocks/col',
                                                {
                                                    colType: 'default',
                                                    sizeXs: '12',
                                                    sizeLg: '10',
                                                    marginAfter: '',
                                                },
                                                [
                                                    [
                                                        'bsx-blocks/lazy-img',
                                                        {
                                                            rounded: 'circle',
                                                            marginAfter: '',
                                                        }
                                                    ],
                                                ],
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                            [
                                'bsx-blocks/col',
                                { 
                                    colType: 'default', 
                                    sizeMd: '7',
                                    sizeLg: '6',
                                },
                                [
                                    [
                                        'bsx-blocks/wrapper',
                                        {
                                            textSize: 'lead',
                                            marginAfter: '2',
                                        },
                                        [
                                            [
                                                'bsx-blocks/badge',
                                                {
                                                    state: 'secondary',
                                                },
                                            ],
                                        ],
                                    ],
                                    [
                                        'core/heading',
                                        {},
                                    ],
                                    [
                                        'core/paragraph',
                                        {},
                                    ],
                                    [
                                        'bsx-blocks/buttons',
                                        {
                                            templateName: 'one-button',
                                        },
                                        [
                                            [
                                                'bsx-blocks/button',
                                                {
                                                    state: 'primary',
                                                    stateType: '',
                                                    size: 'lg',
                                                },
                                                [],
                                            ],
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
        name: 'heading-list-columns',
        title: __( 'Heading List Columns', 'bsx-blocks' ),
        icon: sectionHeadingListColumns,
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {},
                [
                    [  
                        'bsx-blocks/wrapper', 
                        {
                            paddingBefore: '4',
                            marginAfter: '5',
                            textAlign: 'center',
                        },
                        [
                            [
                                'core/heading',
                                {
                                    placeholder: __( 'Add heading, configure heading level...', 'bsx-blocks' ),
                                },
                            ],
                        ],
                    ],
                    [  
                        'bsx-blocks/row-with-cols', 
                        {
                            templateName: '1-1-1',
                        },
                        [
                            [
                                'bsx-blocks/col',
                                { 
                                    colType: 'default',
                                },
                                [
                                    [
                                        'bsx-blocks/wrapper',
                                        {
                                            border: 'bottom',
                                            marginAfter: '3',
                                        },
                                        [
                                            [
                                                'core/heading',
                                                {
                                                    level: '3',
                                                    placeholder: __( 'Add heading, configure heading level...', 'bsx-blocks' ),
                                                },
                                            ],
                                        ],
                                    ],
                                    [
                                        'bsx-blocks/check-list',
                                        {},
                                    ],
                                ],
                            ],
                            [
                                'bsx-blocks/col',
                                { 
                                    colType: 'default',
                                },
                                [
                                    [
                                        'bsx-blocks/wrapper',
                                        {
                                            border: 'bottom',
                                            marginAfter: '3',
                                        },
                                        [
                                            [
                                                'core/heading',
                                                {
                                                    level: '3',
                                                    placeholder: __( 'Add heading, configure heading level...', 'bsx-blocks' ),
                                                },
                                            ],
                                        ],
                                    ],
                                    [
                                        'bsx-blocks/check-list',
                                        {},
                                    ],
                                ],
                            ],
                            [
                                'bsx-blocks/col',
                                { 
                                    colType: 'default',
                                },
                                [
                                    [
                                        'bsx-blocks/wrapper',
                                        {
                                            border: 'bottom',
                                            marginAfter: '3',
                                        },
                                        [
                                            [
                                                'core/heading',
                                                {
                                                    level: '3',
                                                    placeholder: __( 'Add heading, configure heading level...', 'bsx-blocks' ),
                                                },
                                            ],
                                        ],
                                    ],
                                    [
                                        'bsx-blocks/check-list',
                                        {},
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
        name: 'bg-heading-icon-heading-text-columns',
        title: __( 'Background Heading Icon Heading Text Columns', 'bsx-blocks' ),
        icon: sectionBgHeadingIconHeadingTextColumns,
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [
                'bsx-blocks/wrapper', 
                {
                    bgColor: 'light',
                    paddingBefore: '5',
                    paddingAfter: '4',
                },
                [
                    [ 
                        'bsx-blocks/container', 
                        {},
                        [
                            [  
                                'bsx-blocks/wrapper', 
                                {
                                    marginBefore: '3',
                                    marginAfter: '5',
                                    textAlign: 'center',
                                },
                                [
                                    [
                                        'core/heading',
                                        {
                                            placeholder: __( 'Add heading, configure heading level...', 'bsx-blocks' ),
                                        },
                                    ],
                                ],
                            ],
                            [  
                                'bsx-blocks/row-with-cols', 
                                {
                                    templateName: '1-1-1',
                                },
                                [
                                    [
                                        'bsx-blocks/col',
                                        { 
                                            colType: 'default',
                                        },
                                        [
                                            [
                                                'bsx-blocks/wrapper',
                                                {
                                                    textAlign: 'center',
                                                    marginAfter: '3',
                                                },
                                                [
                                                    [
                                                        'bsx-blocks/icon',
                                                        {
                                                            iconKey: 'heart',
                                                            iconSize: '5x',
                                                            marginAfter: '2',
                                                        },
                                                    ],
                                                    [
                                                        'core/heading',
                                                        {
                                                            level: '3',
                                                            placeholder: __( 'Add heading, configure heading level...', 'bsx-blocks' ),
                                                        },
                                                    ],
                                                ],
                                            ],
                                            [
                                                'core/paragraph',
                                                {},
                                            ],
                                        ],
                                    ],
                                    [
                                        'bsx-blocks/col',
                                        { 
                                            colType: 'default',
                                        },
                                        [
                                            [
                                                'bsx-blocks/wrapper',
                                                {
                                                    textAlign: 'center',
                                                    marginAfter: '3',
                                                },
                                                [
                                                    [
                                                        'bsx-blocks/icon',
                                                        {
                                                            iconKey: 'heart',
                                                            iconSize: '5x',
                                                            marginAfter: '2',
                                                        },
                                                    ],
                                                    [
                                                        'core/heading',
                                                        {
                                                            level: '3',
                                                            placeholder: __( 'Add heading, configure heading level...', 'bsx-blocks' ),
                                                        },
                                                    ],
                                                ],
                                            ],
                                            [
                                                'core/paragraph',
                                                {},
                                            ],
                                        ],
                                    ],
                                    [
                                        'bsx-blocks/col',
                                        { 
                                            colType: 'default',
                                        },
                                        [
                                            [
                                                'bsx-blocks/wrapper',
                                                {
                                                    textAlign: 'center',
                                                    marginAfter: '3',
                                                },
                                                [
                                                    [
                                                        'bsx-blocks/icon',
                                                        {
                                                            iconKey: 'heart',
                                                            iconSize: '5x',
                                                            marginAfter: '2',
                                                        },
                                                    ],
                                                    [
                                                        'core/heading',
                                                        {
                                                            level: '3',
                                                            placeholder: __( 'Add heading, configure heading level...', 'bsx-blocks' ),
                                                        },
                                                    ],
                                                ],
                                            ],
                                            [
                                                'core/paragraph',
                                                {},
                                            ],
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
];

export default templates;

