var number = 0;

while(number <= 100){
    var i = 0;

    while(i < number){
        if(number % i == 0){
            number++;
            i++;
            break;
        }
        i++;
    }
    console.log(number);
    number++
}



/*================================================================ */


var basket = [
    {
        title:'огурцы',
        price: 35,
        count: 1
    },
    {
        title:'помидоры',
        price: 63,
        count: 2
    },
    {
        title:'хлеб',
        price: 35,
        count: 1
    },
]

var i = 0,sum = 0;
var name = "";

function countBasketPrice(mas){
    for(var item of mas){
        i += item.count;
        name += item.title + "\n";
        sum += item.price * item.count;
    }
    alert("В корзине товара : " + i + " \n " + name + "\nобьщая сумма: " + sum + "р");
}

countBasketPrice(basket);





/*================================================================ */



for(var i = 0;i < 10;console.log(i++));



for(var i = 0,n = '';i < 20;console.log(n += 'x'),i++);










