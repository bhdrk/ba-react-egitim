const faker = require('faker');

module.exports = () => {
    const data = {
        products: [],
        users: []
    };

    for (let i = 0; i < 100; i++) {
        data.products.push({
            id: i,
            productName: faker.commerce.productName(),
            price: faker.commerce.price(),
            color: faker.commerce.color(),
            department: faker.commerce.department(),
            product: faker.commerce.product(),
            image: faker.image.imageUrl()
        })
    }

    return data
};
