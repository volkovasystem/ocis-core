"use strict";

const path = require( "path" );

const SYSTEM_SERVICE_DIRECTORY_PATH = (
	path.resolve( __dirname, "../service" )
);

Object.defineProperty(
	(
		global
	),

	(
		"SYSTEM_SERVICE_DIRECTORY_PATH"
	),

	(
		{
			"value": (
				SYSTEM_SERVICE_DIRECTORY_PATH
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
			SYSTEM_SERVICE_DIRECTORY_PATH
		)
)
