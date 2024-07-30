function FB(N) {
    for (let i = 1; i<=N; i++) {

        let output = '';

        if (i % 3===0) {
            output = "Fizz";
        }

        if (i % 5===0){
            output ="Buzz";
        }
        
        if (i % 15===0) {
            output= "FizzBuzz"
        }
        
        console.log(output || i);

    }
} 

FB(1000)