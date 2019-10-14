const DoubleLinkedList = require('../../src/dataStructures/doubleLinkedList');

describe("Double Linked List - adding and removing", () => {
    const dll = new DoubleLinkedList();

    it("Should return null", () => {
        let result = dll.pop();
        expect(result).toBe(null);
        expect(dll.contains("Yo!")).toBe(false);
    })

    it("Should start empty", () => {
        expect(dll.head).toBe(null);
        expect(dll.tail).toBe(null);
        expect(dll.length).toBe(0);
        expect(dll.contains("Yo!")).toBe(false);
    });

    it("Should add 1 item", () =>{
        dll.push("Hello");
        expect(dll.head).toBe(dll.tail);
        expect(dll.tail).toBe(dll.head);
        expect(dll.length).toBe(1);
        expect(dll.contains("Hello")).toBe(true);
        expect(dll.contains("World")).toBe(false);
    });
    it("Should add 3 items", () =>{
        dll.push("World");
        dll.push("!");
        expect(dll.head.value).toBe("Hello");
        expect(dll.tail.value).toBe("!");
        expect(dll.length).toBe(3);
        expect(dll.contains("Hello")).toBe(true);
        expect(dll.contains("World")).toBe(true);
        expect(dll.contains("1")).toBe(false);
        expect(dll.contains("2")).toBe(false);
        expect(dll.contains("random string sdfsdfsdf")).toBe(false);
    });

    it("Should remove and return the last item", () =>{
        const result = dll.pop();
        expect(result.value).toBe("!");
        expect(dll.tail.value).toBe("World");
        expect(dll.length).toBe(2);
    });

    it("Should remove the last 2 items down to empty", () =>{
        let result = dll.pop();
        expect(result.value).toBe("World");
        expect(dll.tail.value).toBe("Hello");
        expect(dll.length).toBe(1);
        result = dll.pop();
        expect(result.value).toBe("Hello");
        expect(dll.tail).toBe(null);
        expect(dll.head).toBe(null);
        expect(dll.length).toBe(0);
    });

    it("Should insert 2 before 1", () => {
        dll.insertAtBegining("1");
        expect(dll.tail.value).toBe("1");
        expect(dll.head.value).toBe("1");
        expect(dll.length).toBe(1);
        dll.insertAtBegining("2");
        expect(dll.tail.value).toBe("1");
        expect(dll.head.value).toBe("2");
        expect(dll.length).toBe(2);

        expect(dll.contains("Hello")).toBe(false);
        expect(dll.contains("World")).toBe(false);
        expect(dll.contains("1")).toBe(true);
        expect(dll.contains("2")).toBe(true);
        expect(dll.contains("random string sdfsdfsdf")).toBe(false);

    });

    it("Should remove 2 then 1", () => {
         dll.removeFirst();
        expect(dll.tail.value).toBe("1");
        expect(dll.head.value).toBe("1");
        expect(dll.length).toBe(1);
 
         dll.removeFirst();
        expect(dll.tail).toBe(null);
        expect(dll.head).toBe(null);
        expect(dll.length).toBe(0);
        

        dll.removeFirst();        
        expect(dll.tail).toBe(null);
        expect(dll.head).toBe(null);
        expect(dll.length).toBe(0);
    });
});

describe("DoubleLinkedList - moving around", () => {
    const dll = new DoubleLinkedList();

    expect(dll.currentValue()).toBe(null);
    expect(dll.next()).toBe(null);
    expect(dll.prev()).toBe(null);
    dll.push("1");
    expect(dll.prev().value).toBe(null);
    expect(dll.next().value).toBe(null);
    dll.push("2");
    dll.push("3");
    dll.push("4");
    dll.push("5");

    it("Should be at the start", () => {
        let {value, start, end} = dll.currentValue();
        expect(value).toBe("1");
        expect(start).toBe(true);
        expect(end).toBe(false);
    });

    it("Should move to the next",()=>{
        dll.next();
        let {value, start, end} = dll.currentValue();
        expect(value).toBe("2");
        expect(start).toBe(false);
        expect(end).toBe(false);
    });

    it("and the next",()=>{
        dll.next();
        let {value, start, end} = dll.currentValue();
        expect(value).toBe("3");
        expect(start).toBe(false);
        expect(end).toBe(false);
    });

    
    it("penultimate",()=>{
        dll.next();
        let {value, start, end} = dll.currentValue();
        expect(value).toBe("4");
        expect(start).toBe(false);
        expect(end).toBe(false);
    });

    it("Should be at the end",()=>{
        dll.next();
        let {value, start, end} = dll.currentValue();
        expect(value).toBe("5");
        expect(start).toBe(false);
        expect(end).toBe(true);
    });

    it("Should move back 2",()=>{
        dll.prev();
        dll.prev();
        let {value, start, end} = dll.currentValue();
        expect(value).toBe("3");
        expect(start).toBe(false);
        expect(end).toBe(false);
    });

    it("and 2 more",()=>{
        dll.prev();
        dll.prev();
        let {value, start, end} = dll.currentValue();
        expect(value).toBe("1");
        expect(start).toBe(true);
        expect(end).toBe(false);        
    });

    it("and 2 more (already at the start)",()=>{
        dll.prev();
        dll.prev();
        let {value, start, end} = dll.currentValue();
        expect(value).toBe("1");
        expect(start).toBe(true);
        expect(end).toBe(false);        
    });

    it("Should move to the end", () => {
        dll.moveToEnd();
        let {value, start, end} = dll.currentValue();
        expect(value).toBe("5");
        expect(start).toBe(false);
        expect(end).toBe(true);        
    });

    it("Should move to the start", () => {
        dll.moveToStart();
        let {value, start, end} = dll.currentValue();
        expect(value).toBe("1");
        expect(start).toBe(true);
        expect(end).toBe(false);        
    });

    it("Should remove the 1st item and move to the 2nd", () => {       
        expect(dll.length).toBe(5);
        dll.removeFirst();
        let {value, start, end} =  dll.currentValue();

        expect(dll.length).toBe(4);
        expect(value).toBe("2");
        expect(start).toBe(true);
        expect(end).toBe(false);        
    });

    it("Should remove the last itema and move the current back one", () => {
        expect(dll.length).toBe(4);
        dll.moveToEnd();
        let {value, start, end} = dll.pop();
        expect(value).toBe("5");
        expect(start).toBe(false);
        expect(end).toBe(true);        
        expect(dll.currentValue().value).toBe("4");
    });
})