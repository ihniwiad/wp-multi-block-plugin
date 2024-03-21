// const { castToSass } = require( 'node-sass-utils' );

/**
 * WordPress Dependencies
 * 
 * For more info see:
 * https://dev.to/alexstandiford/make-webpack-configuration-easy-with-wordpress-scripts-26kk
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );


// console.log( 'defaultConfig.module.rules: \n' + JSON.stringify( defaultConfig.module.rules, null, 2 ) );

// const match = defaultConfig.module.rules.find(el => {
//  	return el.test.includes( /\.(sc|sa)ss$/ );
// });

// console.log( '-- match: ' + match );
// console.log( '-- TEST...' );
// const results = defaultConfig.module.rules.filter( ( obj ) => { console.log( '---- obj.test: ' + obj.test ); if ( typeof obj.test == /\.(sc|sa)ss$/ ) { console.log( 'TRUE' ); } return obj.test == /\.(sc|sa)ss$/; } );
// for ( var i = 0; i < results.length; i++ )
//   console.log( '------ match: ' + results[ i ].use );

// TODO:
//	- iterate all items of `defaultConfig.module.rules``
//	- iterate all subitems of items, seacht for `loader` string contains `/sass-loader/`
//	- modify subitems `options` value, keep original entries, add new entry `additionalData: '$env: ' + process.env.NODE_ENV + ';',`


module.exports = {
    ...defaultConfig,
    // module: {
    //     ...defaultConfig.module,
    //     rules: [
    //         ...defaultConfig.module.rules,
    //         {
    //             test: /.toml/,
    //             type: 'json',
    //             parser: {
    //                 parse: toml.parse,
    //             },
    //         },
    //     ],
    // },
};
// module.exports = {
//     ...defaultConfig,
//   //   ...{
//   //       // // Add any overrides to the default here.
//   //       // entry: {
//   //       //     "foo-admin": path.resolve( process.cwd(), 'src', 'foo-admin.js' ),
//   //       //     "bar-admin": path.resolve( process.cwd(), 'src', 'bar-admin.js' ),
//   //       //     "bar-style": path.resolve( process.cwd(), 'src', 'bar-style.css' ),
//   //       // },

// 		// module: {
// 		// 	rules: [
// 		// 		{
// 		// 			test: /\.(sc|sa)ss$/,
// 		// 			use: [
// 		// 				...cssLoaders,
// 		// 				{
// 		// 					loader: require.resolve( 'sass-loader' ),
// 		// 					options: {
// 		// 						sourceMap: ! isProduction,
// 		// 	          			additionalData: '$env: ' + process.env.NODE_ENV + ';',
// 		// 					},
// 		// 				},
// 		// 			],
// 		// 		},
// 		// 	],
// 		// },
//   //   }module.exports = {
// 	...
// 	{
// 		test: /\.scss$/,
// 		use: [{
// 		    loader: "style-loader"
// 		}, {
// 		    loader: "css-loader"
// 		}, {
// 		    loader: "sass-loader",
// 		    options: {
// 		      functions: {
// 		        "env($variable)": variable => castToSass( process.env[variable] )
// 		      }
// 		    }
// 		}]
// 	}

// }
