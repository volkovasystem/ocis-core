"use strict";

SECURE_SERVICE.get(
	(
		"/service/interface/actor/list/get"
	),

	(
		[
			function( request, response, proceed ){
				const getActorList = (
					require( `${ SYSTEM_LIBRARY_DIRECTORY_PATH }/get-actor-list.js` )
				);
			}
		]
	)
);
