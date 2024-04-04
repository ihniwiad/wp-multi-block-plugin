// wp import
import { __ } from '@wordpress/i18n';

// functions
import { 
    rowsColFlexStatic,
    rowsColStaticFlex,
    default as spaceBetweenRows,
} from './../_functions/icon';


const templates = [
    {
        name: 'default-auto',
        title: __( 'Flex, static', 'bsx-blocks' ),
        icon: rowsColFlexStatic,
        template: [ 
            [ 
                'bsx-blocks/column-row', 
                {},
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
            [ 
                'bsx-blocks/column-row', 
                {
                    columnRowType: 'auto',
                },
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'auto-default',
        title: __( 'Static, flex', 'bsx-blocks' ),
        icon: rowsColStaticFlex,
        template: [ 
            [ 
                'bsx-blocks/column-row', 
                {
                    columnRowType: 'auto',
                },
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
            [ 
                'bsx-blocks/column-row', 
                {},
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'space-between-columns',
        title: __( 'Space between columns', 'bsx-blocks' ),
        icon: spaceBetweenRows,
        template: [ 
            [ 
                'bsx-blocks/column-row', 
                {
                    columnRowType: 'unset',
                },
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
            [ 
                'bsx-blocks/column-row', 
                {
                    columnRowType: 'unset',
                },
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
];

export default templates;

