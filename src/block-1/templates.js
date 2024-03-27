// wp import
import { __ } from '@wordpress/i18n';

// functions
import { 
    sectionEmpty,
    sectionContainerHeading,
    sectionContainerHeadingTextGallery,
    sectionContainerRoundedColoredBanner,
    sectionImgBadgeHeadingTextButtonColumns,
    sectionBadgeHeadingTextButtonImgColumns,
    sectionHeadingListColumns,
    sectionBgHeadingIconHeadingTextColumns,
} from './../_functions/icon';


export default [
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
];

