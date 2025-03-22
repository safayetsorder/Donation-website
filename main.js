const usersElement = document.getElementById("users");

const url = "https://jsonplaceholder.typicode.com/users";

/*

1. first step : fetch () ---------- via url
2. second step: .then()
*/

/*

fetch('url-here').then(response => response.json()).then(data => console.log(data))

*/

fetch(url)
    .then(res => res.json())
    .then(data => {
        const users = data;
        for (const user of users) {
            const pTag = document.createElement('p');
            pTag.innerText = user.email;

            usersElement.appendChild(pTag);
        }

    })


