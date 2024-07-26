import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    // useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';


// functions imports

import { addClassNames } from './../_functions/add-class-names.js';


const v1 = {

    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: '.content',
        },
        iconKey: {
            type: 'string',
            default: 'check',
        },
        iconFamily: {
            type: 'string',
        },
        calcIconFamily: {
            type: 'string',
        },
        itemTextColor: {
            type: 'string',
        },
        iconTextColor: {
            type: 'string',
        },
        calcIconTextColor: {
            type: 'string',
        },
    },
    supports: {
        className: true,
    },
    save: ( props ) => {
        const {
            attributes: {
                className,
                content,
                iconKey,
                iconFamily,
                calcIconFamily,
                itemTextColor,
                iconTextColor,
                calcIconTextColor,
            },
        } = props;

        const itemClassNames = addClassNames( {
            textColor: itemTextColor,
        }, className );
        
        const iconClassNames = addClassNames( {
            textColor: calcIconTextColor,
        }, 'fa-li ' + 'fa' + calcIconFamily + ' fa-' + iconKey );

        return (
            <li { ...useBlockProps.save( { className: itemClassNames } ) }>
                <span class={ iconClassNames } aria-hidden="true"></span>
                <>
                    {
                        content && ! RichText.isEmpty( content ) && (
                            <RichText.Content 
                                tagName="span"
                                value={ content } 
                                className="content"
                            />
                        )
                    }
                </>
            </li>
        );
    }

}

export default [ v1 ];