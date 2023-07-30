"use strict";

const path = require( "path" );

const SYSTEM_CONSTANT_DIRECTORY_PATH = (
	path.resolve( __dirname, "../constant" )
);

Object.defineProperty(
	(
		global
	),

	(
		"SYSTEM_CONSTANT_DIRECTORY_PATH"
	),

	(
		{
			"value": (
				SYSTEM_CONSTANT_DIRECTORY_PATH
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
			SYSTEM_CONSTANT_DIRECTORY_PATH
		)
)
