export function shiftZerosA(arr) {
  const { nonZeros, zeros } = arr.reduce(
    (acc, cur) => {
      if (cur === 0) {
        acc.zeros.push(cur);
      } else {
        acc.nonZeros.push(cur);
      }

      return acc;
    },
    { nonZeros: [], zeros: [] },
  );

  return nonZeros.concat(zeros);
}


export function shiftZerosB(arr) {
  const copy = [...arr];
  let write = 0;

  for (let index = 0; index < copy.length; index++) {
    if (copy[index] !== 0) {
      copy[write] = copy[index];
      write++;
    }
  }

  copy.fill(0, write, copy.length);

  return copy;
}
