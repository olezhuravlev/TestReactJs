import counterReducer, {decrement, increment} from "./counterReducer";

describe('Tests getCounterValue', () => {
    it('Test increment', () => {
        expect(counterReducer({value: 0}, increment())).toEqual({value: 1});
    })

    it('Test decrement', () => {
        expect(counterReducer({value: 0}, decrement())).toEqual({value: -1});
    })

    it('Test increment/decrement with empty state', () => {
        expect(counterReducer(undefined, increment())).toEqual({value: 1});
        expect(counterReducer(undefined, decrement())).toEqual({value: -1});
    })
})
