// javaScript Object notation (JSON)

const user = {id: 1, name: 'gorib amir', job: 'actor'}

// console.log(user)
const stringified = JSON.stringify(user);
// console.log(stringified)



const shop = {
    owner: 'alia',
    address: {
        street: 'kochu kkhet vuter goli',
        city: 'ranbir',
        country: 'bd'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
// console.log(shop)

// json stringify
const shopJSON = JSON.stringify(shop)
console.log(shopJSON)

// json parse
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)
