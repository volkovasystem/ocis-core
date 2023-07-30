"use strict";

const path = require( "path" );

const SYSTEM_UTILITY_DIRECTORY_PATH = (
	path.resolve( __dirname, "../utility" )
);

Object.defineProperty(
	(
		global
	),

	(
		"SYSTEM_UTILITY_DIRECTORY_PATH"
	),

	(
		{
			"value": (
				SYSTEM_UTILITY_DIRECTORY_PATH
			),

			"configurable": (
				false
			),

			"enumerable": (
				false
			),

			"writable": (
				false
			)
		}
	)
);

(
		module
		.exports
	=	(
			SYSTEM_UTILITY_DIRECTORY_PATH
		)
)
