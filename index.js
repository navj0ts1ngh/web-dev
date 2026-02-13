function add(a, b){
    return a + b
}

function sub(a,b){
    if (!(a > b)) throw new Error ('Number a must be greater than b')
    
    return a-b
}

function multiply(a, b){
    return a*b
}

add(2, 5)
add(10, 23)
add(20,30)

sub(10,3)
multiply(14,27)
multiply(20,35)
multiply(7,9)
multiply(7,99)


