type Ppoint = {x:number, y: number}
type Pp = keyof Ppoint;

function MyF() {
	return {a: 1}
}
type K = ReturnType<typeof MyF>

type MyFType = () => {a: number}
type L = ReturnType<MyFType>


const MyArray = [
	{ name: 'Akmal', age: 40}
]
type Person = typeof MyArray[number]
type Age = typeof MyArray[number]['age']


type MessageOf<T> = T extends {message: unknown } ? t['message'] : never;

interface Email {
	message: string;
}

interface Cat {
	test: number;
}

type EmailMessageContents = MessageOf<Email>
type CatMessageContents = MessageOf<Cat>

