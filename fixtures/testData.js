//generators
//generage valid email
var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var string = '';
for (var ii = 0; ii < 15; ii++) {
    string += chars[Math.floor(Math.random() * chars.length)];
}
let randomEmail = (string + '@gmail.com');

// test data universal
export const testDataUniversal = {
    textField: "Qwertyuiopasdfghjklzxcvbnm1234567890!@,."
}

// test data for loginModuleTest
export const testUser = {
    firstName: "Andrei",
    lastName: "Shevelev",
    username: "andrei.shevelev",
    password: "RLQbM8HCEj",
    invalidPassword: "RLQbM8HCE"
}

// test data for newRecordTest
export const testEmployee = {
    firstName: testDataUniversal.textField,
    lastName: testDataUniversal.textField,
    city: testDataUniversal.textField,
    streetAddress: testDataUniversal.textField,
    state: testDataUniversal.textField,
    telephone: '1234567890',
    zip: '12345',
    email: randomEmail,
    text: testDataUniversal.textField,
    notes: testDataUniversal.textField,
    status: 'Part Time',
    benefits: 'Vision',
    department: 'HR',
    id: '1234567890',
    favoriteBand: 'Pink Floyd'
}

