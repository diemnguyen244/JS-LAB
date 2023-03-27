function createStack() {
  const stack = [];
  function getTop() {
    if (stack.length > 0) return stack[stack.length - 1];
    undefined;
  }
  function getSize() {
    return stack.length;
  }
  function isEmpty() {
    return stack.length === 0;
  }
  function push(data) {
    stack.push(data);
  }
  function pop() {
    return stack.pop();
  }
  return { getTop, getSize, isEmpty, push, pop };
}
describe("createStack()", () => {
  it("all cases", () => {
    const stack = createStack();
    //empty
    expect(stack.getTop()).toBe(undefined);
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);

    //push 10
    stack.push(10);
    expect(stack.getTop()).toBe(10);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    //push 5
    stack.push(5);
    expect(stack.getTop()).toBe(5);
    expect(stack.getSize()).toBe(2);
    expect(stack.isEmpty()).toBe(false);

    //pop
    const five = stack.pop();
    expect(five).toBe(5);
    expect(stack.getTop()).toBe(10);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);

    //pop
    const ten = stack.pop();
    expect(ten).toBe(10);
    expect(stack.getTop()).toBe(undefined);
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});
