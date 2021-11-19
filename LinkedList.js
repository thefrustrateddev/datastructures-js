class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value){
        // time complexity O(1)
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop(){
        let len = this.length;
        let initNode= this.head;
        while(len>2){
            initNode = initNode.next;
            len--
        }
        const poppedNode = initNode.next;
        initNode.next = null;
        this.tail = initNode;
        this.length--
        return poppedNode;
    }
}