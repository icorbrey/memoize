export default <S, R = never>(f: (state: S) => R, s: S = {} as S) => f(s)
