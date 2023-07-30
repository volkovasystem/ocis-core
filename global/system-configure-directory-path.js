"use strict";

const path = require( "path" );

const SYSTEM_CONFIGURE_DIRECTORY_PATH = (
	path.resolve( __dirname, "../configure" )
);

Object.defineProperty(
	(
		global
	),

	(
		"SYSTEM_CONFIGURE_DIRECTORY_PATH"
	),

	(
		{
			"value": (
				SYSTEM_CONFIGURE_DIRECTORY_PATH
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
			SYSTEM_CONFIGURE_DIRECTORY_PATH
		)
)
