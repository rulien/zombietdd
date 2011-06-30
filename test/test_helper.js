function assertProtoTypeOf(protoType, of){
	if(!protoType.isPrototypeOf(of)){
		fail("expect proto to be a prototype of object")
	}
}