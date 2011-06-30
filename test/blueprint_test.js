(function(blueprint){
	TestCase("TestBlueprint", sinon.testCase({

	       "test should be an object": function () {
	          assertObject(blueprint);      
	        },

			"test should create blueprints": function () {
				var bp = blueprint.create([]);
				assertProtoTypeOf(blueprint,bp);
			},
			
			"test should have shape": function (stub, mock) {
			    var shape = ["***",
							 "***"];
			    var bp = blueprint.create(shape);
				assertEquals(shape,bp.shape);
			},
			 
			"test should complain if shape is missing": function (stub, mock) {
			   assertException(function(){
					blueprint.create();
				});     
			}
			
			

	}));	
}(ZOMBIE.blueprint));

