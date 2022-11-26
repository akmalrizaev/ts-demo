type Point = {
	x: number,
	y: number
};

type D3Point = Point & {
	z: number
};

interface IPoint {
	x: number,
	y: number
};

interface I3DPoint extends IPoint {
	z: number
};

const cast = (point: IPoint)=> {
	const d: I3DPoint = point as I3DPoint;
}

type StringorNumber = number | string

function print(coord: Point) {

}

function print2(coord: IPoint) {

}