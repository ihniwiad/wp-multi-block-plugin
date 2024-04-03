// wp import
import { __ } from '@wordpress/i18n';

// functions
import { 
    rowWithCols_1_1_1,
    rowWithCols_1_1,
    rowWithCols_1_2,
    rowWithCols_2_1,
    rowWithCols_1_2_1,
    rowWithCols_custom,
} from './../_functions/icon';


const templates = [
    {
        name: '1-1-1',
        title: __( '3 Columns (1:1:1)', 'bsx-blocks' ),
        icon: rowWithCols_1_1_1,
        template: [ 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '4',
                    sizeLg: '',
                    sizeXl: '',
                },
            ], 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '4',
                    sizeLg: '',
                    sizeXl: '',
                },
            ], 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '4',
                    sizeLg: '',
                    sizeXl: '',
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: '1-1',
        title: __( '2 Columns (1:1)', 'bsx-blocks' ),
        icon: rowWithCols_1_1,
        template: [ 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '6',
                    sizeLg: '',
                    sizeXl: '',
                },
            ], 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '6',
                    sizeLg: '',
                    sizeXl: '',
                },
            ], 
        ],
        templateLock: false,
    },
    {
        name: '1-2',
        title: __( '2 Columns (1:2)', 'bsx-blocks' ),
        icon: rowWithCols_1_2,
        template: [ 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '4',
                    sizeLg: '',
                    sizeXl: '',
                },
            ], 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '8',
                    sizeLg: '',
                    sizeXl: '',
                },
            ], 
        ],
        templateLock: false,
    },
    {
        name: '2-1',
        title: __( '2 Columns (2:1)', 'bsx-blocks' ),
        icon: rowWithCols_2_1,
        template: [ 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '8',
                    sizeLg: '',
                    sizeXl: '',
                },
            ], 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '4',
                    sizeLg: '',
                    sizeXl: '',
                },
            ], 
        ],
        templateLock: false,
    },
    {
        name: '1-2-1',
        title: __( '3 Columns (1:2:1)', 'bsx-blocks' ),
        icon: rowWithCols_1_2_1,
        template: [ 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '3',
                    sizeLg: '',
                    sizeXl: '',
                },
            ], 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '6',
                    sizeLg: '',
                    sizeXl: '',
                },
            ], 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'default',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '3',
                    sizeLg: '',
                    sizeXl: '',
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: 'custom',
        title: __( 'Custom', 'bsx-blocks' ),
        icon: rowWithCols_custom,
        template: [ 
            [ 
                'bsx-blocks/col', 
                {
                    colType: 'custom',
                    sizeXs: '',
                    sizeSm: '',
                    sizeMd: '4',
                    sizeLg: '',
                    sizeXl: '',
                },
            ],
        ],
        templateLock: false,
    },
];

export default templates;

