// wp import
import { __ } from '@wordpress/i18n';

// functions
import { 
    groupsImageParagraphButton,
    groupsImageHeadingParagraph,
    groupsImageHeadingParagraphButton,
} from './../_functions/icon';


const templates = [
    {
        name: 'lazy-img-paragraph-button',
        title: __( 'Lazy image, paragraph, button', 'bsx-blocks' ),
        icon: groupsImageParagraphButton,
        attributes: {},
        template: [ 
            [ 
                'bsx-blocks/lazy-img', 
                {},
            ], 
            [
                'core/paragraph',
                { 
                    placeholder: 'Add text...', 
                },
            ],
            [
                'bsx-blocks/buttons',
                {
                    templateName: 'one-button',
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: 'lazy-img-heading-paragraph',
        title: __( 'Lazy image, heading, paragraph', 'bsx-blocks' ),
        icon: groupsImageHeadingParagraph,
        attributes: {},
        template: [ 
            [ 
                'bsx-blocks/lazy-img', 
                {},
            ], 
            [
                'core/heading',
                { 
                    placeholder: 'Add heading, configure heading level...', 
                },
            ],
            [
                'core/paragraph',
                { 
                    placeholder: 'Add text...', 
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: 'lazy-img-heading-paragraph-button',
        title: __( 'Lazy image, heading, paragraph, button', 'bsx-blocks' ),
        icon: groupsImageHeadingParagraphButton,
        attributes: {},
        template: [ 
            [ 
                'bsx-blocks/lazy-img', 
                {},
            ], 
            [
                'core/heading',
                { 
                    placeholder: 'Add heading, configure heading level...', 
                },
            ],
            [
                'core/paragraph',
                { 
                    placeholder: 'Add text...', 
                },
            ],
            [
                'bsx-blocks/buttons',
                {
                    templateName: 'one-button',
                },
            ],
        ],
        templateLock: false,
    },
];

export default templates;

