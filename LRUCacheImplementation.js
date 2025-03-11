/**
 * | ---------------------------------------------------------------------------------
 * | LRU Cache Implementation – Design a Least Recently Used (LRU) cache in JavaScript.
 * | ---------------------------------------------------------------------------------
 */

/**
 * | --------------------------------------------------------------------------------------------------------------------------------
 * | Explationation
 * | Understanding LRU Cache (Least Recently Used Cache)
 * | LRU (Least Recently Used) Cache is a data structure that stores a fixed number of key-value pairs. 
 * | When the cache reaches its maximum capacity, it removes the least recently used (oldest) item to make space for new items.
 * | Use Case:
 * | Used in memory management and caching systems (e.g., browser caching, database caching).
 * | Ensures frequently accessed data stays in memory while old data gets evicted.
 * | How LRU Cache Works?
 * | Get (key): Retrieve the value associated with a key.
 * | If the key exists, move it to the most recently used position.
 * | If the key doesn't exist, return -1.
 * | Put (key, value): Insert a key-value pair.
 * | If the key already exists, update its value and move it to the most recently used position.
 * | If the cache is full, remove the least recently used (LRU) key before inserting the new one.
 * | Efficient Data Structures for LRU Cache
 * | HashMap (Object in JS): Provides O(1) lookup for key-value pairs.
 * | Doubly Linked List: Helps maintain insertion order and allows efficient removal of LRU item.
 * | Why Doubly Linked List?
 * | Provides fast deletion (O(1)) compared to a normal array (O(n)).
 * | We can move recently used nodes to the front efficiently.
 * | Implementation Plan
 * | Use a HashMap (Map) to store key-node mappings for fast lookup.
 * | Use a Doubly Linked List to keep track of usage order:
 * | Most recently used (MRU) node is at the head.
 * | Least recently used (LRU) node is at the tail.
 * | When accessing or adding a key:
 * | Move it to the front of the list.
 * | If capacity exceeds, remove the node at the tail.
 * | Implementation in JavaScript
 * | Now that we understand the concept, let's implement it:
 * | --------------------------------------------------------------------------------------------------------------------------------
 */

class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); // Key-Node mapping
        this.head = new ListNode(0, 0); // Dummy head (Most Recently Used - MRU)
        this.tail = new ListNode(0, 0); // Dummy tail (Least Recently Used - LRU)
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Move a node to the front (Most Recently Used)
    moveToFront(node) {
        this.removeNode(node);
        this.addNode(node);
    }

    // Remove a node from the linked list
    removeNode(node) {
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    // Add node next to the head (most recently used)
    addNode(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1; // Not found
        }
        let node = this.map.get(key);
        this.moveToFront(node); // Move accessed node to front
        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            let existingNode = this.map.get(key);
            existingNode.value = value;
            this.moveToFront(existingNode);
        } else {
            if (this.map.size >= this.capacity) {
                let lruNode = this.tail.prev;
                this.removeNode(lruNode);
                this.map.delete(lruNode.key);
            }
            let newNode = new ListNode(key, value);
            this.map.set(key, newNode);
            this.addNode(newNode);
        }
    }
}

// Example Usage
const lruCache = new LRUCache(3);
lruCache.put(1, "A");
lruCache.put(2, "B");
lruCache.put(3, "C");
console.log(lruCache.get(2)); // "B" (moves 2 to front)
lruCache.put(4, "D"); // Removes least recently used key (1)
console.log(lruCache.get(1)); // -1 (not found, removed)
console.log(lruCache.get(3)); // "C" (still present)
