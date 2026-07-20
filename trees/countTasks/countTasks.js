
export function countTasksA(root) {
  let count = 0
  const stack = [root]

  while( stack.length > 0){
    const ticket = stack.pop()
    count++
    ticket.children.forEach(child => {
      stack.push(child)
    });
  }

  return count;
}

export function countTasksB(node) {
  let count = 1;
  for (let index = 0; index < node.children.length; index++) {
    count += countTasksB(node.children[index])
  }
  return count;
}
