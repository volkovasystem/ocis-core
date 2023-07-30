"use strict";

const loadDirectoryModule = (
	async	function loadDirectoryModule( directoryPath ){
				const fsAsync = require( "node:fs/promises" );
				const path = require( "path" );
				const util = require( "util" );

				try{
					(
							(
								await	fsAsync.readdir(
											(
												directoryPath
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
							( moduleFile ) => (
									(
											(
												/\.js$/
											)
											.test( moduleFile )
										===	true
									)
							)
						)
					)
					.map(
						(
							( moduleFile ) => (
								path.resolve(
									(
										directoryPath
									),

									(
										moduleFile
									)
								)
							)
						)
					)
					.forEach(
						(
							( moduleFilePath ) => {
								require( moduleFilePath );
							}
						)
					);

					return	(
								true
							);
				}
				catch( error ){
					console.error(
						(
							[
								"cannot load directory module;",

								util.inspect( error, { "depth": Infinity } )
							]
						)
					);

					return	(
								false
							);
				}
			}
);

(
		module
		.exports
	=	(
			loadDirectoryModule
		)
);
