function factorial(num) {
    let ans = 1
    for(let i = num; i > 0; i--){
        ans *= i
    }
    return ans
}

factorial(4) //ans 24