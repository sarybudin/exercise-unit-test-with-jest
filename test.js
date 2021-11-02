const { sum,fromDollarToYen, fromEuroToDollar,fromYanToPound} = require('./app.js');
test("si sumamos 14+9 nos dará 23",()=>{
    
    let total = sum(14,9);

    expect(total).toBe(23);
})
test("si tenemos 12 dolares nos da 1279 yenes",()=>{
    let total = fromDollarToYen(12);

    expect(total).toBe(1279);
})
test("si tenemos 15 euros nos da 18 dolares",()=>{
    let total = fromEuroToDollar(15);

    expect(total).toBe(18);
})
test("si tenemos 1500 yenes nos da 9 libras esterlinas",()=>{
    let total = fromYanToPound(1500);

    expect(total).toBe(9);
})