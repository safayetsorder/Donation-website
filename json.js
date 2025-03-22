const usersElement = document.getElementById("users");

var frouite = "apple";
var trees = ["mehgoni", 34, { name: "altaf", roll: 23 }, 'palm'];

const dress = {
    name: "sharee",
    price: 14000,
    color: "pink",
    brand: "arong",
    designer: "ariyan khan mohon"
}


const users = [
    {
        id: 1,
        name: "Shamim",
        email: "shamim@shamim.com",
        address: "123, Notun bazar, vatara, dhaka, Bangladesh."
    },
    {
        id: 2,
        name: "Hamim",
        email: "hamimn@gmail.com",
        address: "123, Banani, dhaka, Bangladesh."
    },
    {
        id: 2,
        name: "Hamim",
        email: "hamimn@gmail.com",
        address: "123, Banani, dhaka, Bangladesh."
    }
];


const posts = [
    {
        "id": "1",
        "name": "Safayet",
        "text": 'This is text'
    },
    {
        "id": "2",
        "name": "Rahat",
        "text": 'This is rahat text',

    },
]

const selectedUser = {
    name: "Test",
    roll: 32,
}


for (const user of users) {
    const pTag = document.createElement("p");
    pTag.style.textAlign = 'center';
    pTag.style.marginTop = '10px';
    pTag.innerText = user.email;

    usersElement.appendChild(pTag)

}

console.log(posts[0]);
