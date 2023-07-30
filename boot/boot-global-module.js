"use strict";

const bootGlobal = (
	async	function bootGlobal( option ){
				const fsAsync = require( "node:fs/promises" );
				const path = require( "path" );
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
					const sytemGlobalDirectoryPath = (
						path.resolve( __dirname, "../global" )
					);

					(
							(
								await	fsAsync.readdir(
											(
												sytemGlobalDirectoryPath
											)
										)
							)
						||
							(
								[ ]
							)
					)
					.filter(
						(
							( globalModuleFile ) => (
									(
											(
												/\.js$/
											)
											.test( globalModuleFile )
										===	true
									)
							)
						)
					)
					.map(
						(
							( globalModuleFile ) => (
								path.resolve(
									(
										sytemGlobalDirectoryPath
									),

									(
										globalModuleFile
									)
								)
							)
						)
					)
					.forEach(
						(
							( globalModuleFilePath ) => {
								require( globalModuleFilePath );
							}
						)
					);

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
								"cannot boot global module;",

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
			bootGlobal
		)
);
