const a: number = 5;

let b: string ='abcd'; 

let c = true;

const d: string[] =['abc','def','ghi'];

let e:any = 5;
e = 'abc';

function test(a: string): string {
	return ''
}

function countCoord(cord: {lat:number, long:number}) {

}

function printIt(id: number | string) {
	if (typeof id === 'number') {
		console.log(id.toString)
	}

	if (typeof id === 'string') {
		console.log(id.toUpperCase)
	}
}

const x:undefined = undefined;

const z:null = null;



