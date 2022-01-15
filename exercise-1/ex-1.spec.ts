import { tupleToDictionary } from "./ex-1";

describe("exercise-1", () => {
  it("should return dictionary from tuples", () => {
    const input: Array<[string, string]> = [
      ["key1", "value1"],
      ["key2", "value2"],
      ["key3", "value3"],
      ["key4", "value4"],
    ];

    const expectedOutput = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: "value4",
    };

    const result = tupleToDictionary(input);

    expect(result).toBe(expectedOutput);
  });
});
