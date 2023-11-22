// Implement a function that takes an array of numbers and returns the average value.
    function average(a, n)
	{
		var sum = 0;
		for (var i = 0; i < n; i++)
         sum += a[i];
		return parseFloat(sum / n);
	}
	var arr = [10, 2, 3, 4, 5, 6, 7, 8];
	var n = arr.length;
	console.log(average(arr, n));
   
