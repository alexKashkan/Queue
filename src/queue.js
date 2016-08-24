const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize=30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.heap.size() < this.maxSize){
			this.heap.push(data, priority);
		}
		else{
			throw new Error('Max queue size reached.');
		}
	}

	shift() {
		if (this.heap.isEmpty()){
			throw new Error('Empty queue.');
		}
		else{
			let data;
			data = this.heap.pop();
			return data;
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