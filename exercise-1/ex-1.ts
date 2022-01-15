export const tupleToDictionary = (tuples: Array<[string, string]>) => {
  return tuples.reduce((acc, [propKey, propValue]) => {
    return {
      ...acc,
      [propKey]: propValue,
    }
  }, {});
};
