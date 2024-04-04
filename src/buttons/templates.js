// wp import
import { __ } from '@wordpress/i18n';

// functions
import { 
    buttonsOneButton,
    buttonsTwoButtons,
    buttonsTextLink,
    buttonsLabelTextLink,
} from './../_functions/icon';


const templates = [
    {
        name: 'one-button',
        title: __( 'One Button', 'bsx-blocks' ),
        icon: buttonsOneButton,
        attributes: {},
        template: [
            [ 
                'bsx-blocks/button', 
                {
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: 'two-buttons',
        title: __( 'Two Buttons', 'bsx-blocks' ),
        icon: buttonsTwoButtons,
        attributes: {},
        template: [
            [ 
                'bsx-blocks/button', 
                {
                },
            ],
            [ 
                'bsx-blocks/button', 
                {
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: 'text-link',
        title: __( 'Text Link', 'bsx-blocks' ),
        icon: buttonsTextLink,
        attributes: {},
        template: [ 
            [ 
                'bsx-blocks/button', 
                {
                    state: 'text-link',
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: 'label-text-link',
        title: __( 'Label with Text Link', 'bsx-blocks' ),
        icon: buttonsLabelTextLink,
        attributes: {},
        template: [  
            [ 
                'bsx-blocks/button-label', 
                {
                },
            ],
            [ 
                'bsx-blocks/button', 
                {
                    state: 'text-link',
                },
            ],
        ],
        templateLock: false,
    },
];

export default templates;

