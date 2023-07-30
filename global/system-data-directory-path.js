"use strict";

const path = require( "path" );

const SYSTEM_DATA_DIRECTORY_PATH = (
	path.resolve( __dirname, "../data" )
);

Object.defineProperty(
	(
		global
	),

	(
		"SYSTEM_DATA_DIRECTORY_PATH"
	),

	(
		{
			"value": (
				SYSTEM_DATA_DIRECTORY_PATH
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
			SYSTEM_DATA_DIRECTORY_PATH
		)
)
