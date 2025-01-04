//Object

const username = 'John Doe';
const age = 18;
const address = 'Bangkok';

const customer = {
    username,
    age,
    address,
    showData() {
        console.log("Customer Name : " + username)
    }
}

customer.showData();
