class Pointer {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

class D3Pointer extends Pointer {
	z: number;

	constructor(x: number, y: number, z: number) {
		super(x,y)
		this.z = z
	}
}
const p = new Pointer(10,10);

const d3p = new D3Pointer(1,1,1);

class StaticTest {
	static cc ='sdf'
	static stc() {

	}
}

const dd = StaticTest.cc;

abstract class Test3 {
	myMethod() {

	}
}

class Test4 extends Test3 {

}

interface c {
	test: () => number;
}

class D implements c {
	test() {
		return 3;
	}
}




