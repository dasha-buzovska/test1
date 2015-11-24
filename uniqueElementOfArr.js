/*пусть arr — массив строк.
Напишите функцию unique(arr), которая возвращает массив, 
содержащий только уникальные элементы arr.*/

function unique(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				arr.splice(j,1); j--;
			}
		}
	}
	return arr;
}