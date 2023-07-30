"use strict";

const path = require( "path" );

const SYSTEM_LIBRARY_DIRECTORY_PATH = (
	path.resolve( __dirname, "../library" )
);

Object.defineProperty(
	(
		global
	),

	(
		"SYSTEM_LIBRARY_DIRECTORY_PATH"
	),

	(
		{
			"value": (
				SYSTEM_LIBRARY_DIRECTORY_PATH
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
			SYSTEM_LIBRARY_DIRECTORY_PATH
		)
)
