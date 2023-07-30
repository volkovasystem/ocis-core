"use strict";

const bootSystem = (
	async	function bootSystem( option ){
				const util = require( "util" );

				const bootGlobalModule = (
					require( "./boot-global-module.js" )
				);

				const bootConfigureModule = (
					require( `${ SYSTEM_GLOBAL_DIRECTORY_PATH }/boot-configure-module.js` )
				);

				const bootDataModule = (
					require( `${ SYSTEM_GLOBAL_DIRECTORY_PATH }/boot-data-module.js` )
				);

				const bootServiceModule = (
					require( `${ SYSTEM_GLOBAL_DIRECTORY_PATH }/boot-service-module.js` )
				);

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
					await bootGlobalModule( option );

					await bootConfigureModule( option );

					await bootDataModule( option );

					await bootServiceModule( option );

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
								"cannot boot system;",

								util.inspect( error, { "depth": Infinity } )
							]
						)
					);

					return	(
								[
									(
										undefined
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
		module.exports
	=	(
			bootSystem
		)
);
