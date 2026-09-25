let price = [200,300,500,700,900]

let i=0, total=0

do{
    let cprice = price[i]

    if(cprice > 500)
        total += cprice * 0.9
    else
        total += cprice

    i++

}
while(i < price.length)

console.log(total)