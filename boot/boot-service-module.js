"use strict";

const bootService = (
	async	function bootService( option ){
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
								"cannot boot service module;",

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
			bootService
		)
);
