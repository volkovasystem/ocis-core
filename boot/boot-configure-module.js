"use strict";

const bootConfigure = (
	async	function bootConfigure( option ){
				const util = require( "util" );

				(
						option
					=	(
								(
									option
								)
							||
								(
									{ }
								)
						)
				);

				try{
					await require( `${ SYSTEM_CONFIGURE_DIRECTORY_PATH }/configure-setting.js` )( option );

					await require( `${ SYSTEM_CONFIGURE_DIRECTORY_PATH }/configure-data.js` )( option );

					await require( `${ SYSTEM_CONFIGURE_DIRECTORY_PATH }/configure-service.js` )( option );

					await require( `${ SYSTEM_CONFIGURE_DIRECTORY_PATH }/configure-service-header.js` )( option );

					await require( `${ SYSTEM_CONFIGURE_DIRECTORY_PATH }/configure-service-request.js` )( option );

					await require( `${ SYSTEM_CONFIGURE_DIRECTORY_PATH }/configure-service-response.js` )( option );

					await require( `${ SYSTEM_CONFIGURE_DIRECTORY_PATH }/configure-service-session.js` )( option );

					return	(
								[
									(
										undefined
									),

									(
										true
									),

									(
										option
									)
								]
							);
				}
				catch( error ){
					console.error(
						(
							[
								"cannot boot configure module;",

								util.inspect( error, { "depth": Infinity } )
							]
						)
					);

					return	(
								[
									(
										error
									),

									(
										false
									),

									(
										option
									)
								]
							);
				}
			}
);

(
		module
		.exports
	=	(
			bootConfigure
		)
);
