import withState from './withState'
import toHash from './toHash'

type Memo<P, R> = (params: P) => R
type MemoCache = { [key: number]: any }

export default <P, R>(func: Memo<P, R>): Memo<P, R> =>
	withState<MemoCache, Memo<P, R>>(cache => params =>
	{
		const id = toHash(params)
		const cachedValue = cache[id]
		const cacheResult = (result: any) => cache[id] = result
		return cachedValue || cacheResult(func(params))
	})
