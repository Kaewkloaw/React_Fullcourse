// Default Parameter
getDataCustomer=(customerName, customerAddress = 'Bangkok')=>{
    // or if(!customerAddress){
    //     customerAddress = 'Bangkok'
    // }
    const data = `Customer Name: ${customerName}
    Customer Address: ${customerAddress}`
    return data;
}
console.log(getDataCustomer('John Doe', 'Bangkok'))
console.log(getDataCustomer('Ploy', 'Chiang Mai'))
console.log(getDataCustomer('Linn')) // Customer Address: undefined => Bangkok