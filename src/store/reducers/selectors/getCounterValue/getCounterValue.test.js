import {getCounterValue} from "./getCounterValue";

describe('getCounterValue test', () => {
    it('test empty state', () => {
        expect(getCounterValue({})).toBe(0);
    })

    it('test with not empty state', () => {
        expect(getCounterValue(
            {
                counter: {
                    value: 999,
                }
            }
        )).toBe(999);
    })
})
