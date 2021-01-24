import memoize from './memoize'

describe('The memoize() function', () =>
{
	let increment
	let timesRun

	beforeEach(() =>
	{
		timesRun = 0
		increment = memoize((i: number) =>
		{
			timesRun++
			return i + 1
		})
	})

	it('caches the first result and does not re-execute the function given the same parameters', () =>
	{
		expect(timesRun).toBe(0)
		expect(increment(1)).toBe(2)
		expect(timesRun).toBe(1)
		expect(increment(1)).toBe(2)
		expect(timesRun).toBe(1)
	})

	it('re-executes the function when given different parameters', () =>
	{
		expect(timesRun).toBe(0)
		expect(increment(1)).toBe(2)
		expect(timesRun).toBe(1)
		expect(increment(2)).toBe(3)
		expect(timesRun).toBe(2)
	})
})
