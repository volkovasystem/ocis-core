"use strict";

const getActorList = (
	async	function getActorList( option ){
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
										undefined
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
										error
									),

									(
										undefined
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
			getActorList
		)
);
