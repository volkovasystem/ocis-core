"use strict";

const bootData = (
	async	function bootData( option ){
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
								"cannot boot data module;",

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
			bootData
		)
);
