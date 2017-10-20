const readline = require('readline-sync');

let heap = [];

let count = 0;
while(count<10){
input = readline.question("Enter number "+ (count+1) + ":");
input = Number(input);
addto(heap,input);
count++;
}
while(heap.length)
	remove(heap);


function addto(heap,value)
{
	heap.push(value);
	bubbleUp(heap,heap.length-1);
}


function bubbleUp(heap,idx){
	let parent = parseInt(((idx-1) / 2),10);
	if(idx && heap[idx]>heap[parent]){
		//SWAP
		let temp = heap[parent];
		heap[parent]=heap[idx];
		heap[idx]=temp;
		bubbleUp(heap,parent);
	}
}

function remove(heap){
	
	//find first node with children
	let temp = heap[0];
	heap[0]=heap[heap.length-1];
	heap[heap.length-1]=temp;
	console.log(heap.pop());
	heapify(heap,0);
}

function heapify(heap,idx){
	let left = idx*2+1;
	let right = idx*2+2;
	let maximumIdx = idx;
	if(heap[maximumIdx]<=heap[left]){
		maximumIdx = left;
	}
	if(heap[maximumIdx]<=heap[right]){
		maximumIdx = right;
	}
	if(maximumIdx != idx){
		let temp = heap[maximumIdx];
		heap[maximumIdx]=heap[idx];
		heap[idx]=temp;
		heapify(heap,maximumIdx);
	}
}
