export function removeDupesA(array) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] !== array[index + 1]) {
      result.push(array[index]);
    }
  }

  return result;
}

export function removeDupesB(array) {
  let write = 1;

  for (let read = 1; read < array.length; read++) {
    if (array[read] !== array[read - 1]) {
      array[write] = array[read];
      write++;
    }
  }

  return array.slice(0, write);
}
