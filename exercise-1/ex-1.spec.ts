import {testFunc} from "./ex-1"

describe('exercise-1', () => {
  it('should return 1', () => {
    const res = testFunc();
    expect(res).toBe(1);
  })
})
