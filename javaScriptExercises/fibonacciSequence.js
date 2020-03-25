function fibonacciGenerator (n) {
        var numbers = [0, 1];
        
        if (n===0) {
            numbers = [];
        }
        else if (n===1){
            numbers = [0];
        } else if (n===2){
            numbers = [0,1];
        }
    
        while (numbers.length<n){
            var x = numbers[numbers.length-1];
            var y = numbers[numbers.length-2];
    
            var sum = x + y;
            numbers.push(sum);
        }
        console.log(numbers);
    }