//create linked list
//+inserthead-print
function createLinkedList() {
  let head = null;
  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = newNode;
      return;
    }
    newNode.next = head;
    head = newNode;
  }
  function prinList() {
    if (head == null) return;
    let current = head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
  return { insertHead, prinList };
}
const numberLinkList = createLinkedList();
numberLinkList.insertHead(5);
numberLinkList.insertHead(4);
numberLinkList.insertHead(3);
numberLinkList.prinList();
