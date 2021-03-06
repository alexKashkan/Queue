const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize) {
			this.maxSize = maxSize;
		} 
		else this.maxSize = 30;
		this.heap = new MaxHeap();

	}

	push(data, priority) {
		if (this.heap.size() === this.maxSize)
			throw new Error("Sorry, bro.. Max size is reached");
		this.heap.push(data, priority);
	}

	shift() {
		if (this.heap.isEmpty()){
			throw new Error("Sorry, queue is empty!");
		}
		else{
			let info;
			info = this.heap.pop();
			return info;
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;