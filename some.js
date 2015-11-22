arr = []; j = 2;
for (var i = 0; i < 99; i++) {
	arr[i] = j; j++
};

function firstElement(arr1) {
	return arr1[0];
};
var newArr = [];
function withoutP(arr1) {
	var newArr = [];
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] % arr1[0] != 0) {
			newArr.push(arr1[i]);
		}
	}; 
	return newArr;
}

var result = [];
var varArr = arr;
result.push(firstElement(varArr));
while (varArr.length != 0) {
	varArr = withoutP(varArr);
	result.push(firstElement(varArr));
};
result.pop();
var sum = 0;
for (var i = 0; i < result.length; i++) {
	sum += result[i];
}
console.log(sum);