// Linked list implementation
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    displayList() {
        let current = this.head;
        let output = '';
        while (current) {
            output += current.value + ' ';
            current = current.next;
        }
        return output.trim();
    }
}

const list = new LinkedList();

// Arrow function
const updateOutput = () => {
    const inputValue = document.getElementById('input').value;
    list.addNode(inputValue);
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = 'Linked List: ' + list.displayList();
};