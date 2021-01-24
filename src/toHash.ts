export default (target: any): number =>
	toByteArray(toString(target))
		.reduce(toHashedValue)

const toByteArray = (str: string) =>
{
	const bytes: number[] = []
	for (let i = 0; i < str.length; i++)
		bytes.push(str.charCodeAt(i))
	return bytes
}

const toString = (target: any): string =>
	target.toString() + typeof target

const toHashedValue = (hash: number, byte: number) =>
	((hash << 5) - hash + byte) | 0
