"use strict";

const path = require( "path" );

const SYSTEM_GLOBAL_DIRECTORY_PATH = (
	path.resolve( __dirname, "../global" )
);

Object.defineProperty(
	(
		global
	),

	(
		"SYSTEM_GLOBAL_DIRECTORY_PATH"
	),

	(
		{
			"value": (
				SYSTEM_GLOBAL_DIRECTORY_PATH
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
			SYSTEM_GLOBAL_DIRECTORY_PATH
		)
)
