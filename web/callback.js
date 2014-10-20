"use strict"

// Step 1 adds 2 to supplied value
var step1 = function(valueParam, callback){
	
	console.log("Doing step 1");
	valueParam += 2;
	callback(valueParam);
}

// Step 2 adds 4 to supplied value and prints out result
var step2 = function  (valueParam) {
	console.log("Doing step 2");
	valueParam += 4;
	console.log("result:" + valueParam);
}

step1(10, step2);