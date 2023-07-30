"use strict";

const configureSetting = (
	async	function configureSetting( option ){
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
			}
);

(
		module
		.exports
	=	(
			configureSetting
		)
);
