function compare1(a,b) {
    document.writeln(a === b);
}
function compare2(a,b){
    document.writeln(a == b);
}

function demo_map(array){    
    array = array.map(x => x * 2);
    document.writeln(array);
}

function demo_filter(array){
    array = array.filter(word => word.length > 6);
    document.writeln(array);
}

function demo_reduce(array){
    sum = array.reduce((previousValue, currentValue) => previousValue + currentValue);
    document.writeln(sum)
}

function demo_find(array){
    found = array.find(element => element > 15)
    document.writeln(found)
}

function demo_some(array){
    rs = array.some((element) => element % 5 === 0)
    document.writeln(rs)
}

function add_element_to_array_at_the_end(array,value){
    array.push(value)
    document.writeln(array)
}

function add_element_to_array_at_the_beginning(array,value){
    array.unshift(value)
    document.writeln(array)
}
spliced = arr.splice(1, 1);

function rm_element_in_array(array,index_at,num){
    splice = array.splice(index_at,num)
    document.writeln(array)
}

function playGround1(a,b){
    if (a ===  b){
        return a*6
    }
    else return a+b
}

function playGround2(a){
    if (a === 19){
        return 0
    }
    if (a < 19){
        return 19-a
    }
    if (a > 19){
        return (a-19)*3
    }
}

function playGround3(a){
    let rs = []
    for (let i=0;i<10;i++){
        let num = a.replace('*',i)
        if (num % 3 === 0){
            rs.push(num)
        }
    }
    if (rs.length>0) return rs 
    else return '[]'
}

function playGround4(a){
    let rs = []
    for (let i=0;i<10;i++){
        let num = a.replace('*',i)
        if (num % 6 === 0){
            rs.push(num)
        }
    }
    if (rs.length>0) return rs 
    else return '[]'
}