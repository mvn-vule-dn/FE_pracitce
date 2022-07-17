let data_user = ([
    {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet", last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve", last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg"
    },
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg"
    }
])

const UserList = () => {
    if (localStorage.getItem('user-info')){
        localStorage.removeItem('user-info');
    }
    if (localStorage.getItem('data') == null){
        localStorage.setItem('data',JSON.stringify(data_user));
    }
    let data = JSON.parse(localStorage.getItem('data'));
    let userList = document.getElementsByClassName("main-bottom");
    let ul = document.createElement("ul");
    ul.setAttribute("class", "list-user");
    for (let index = 0; index < data.length; index++) {
        let card = document.createElement("li");
        card.setAttribute("class", "list-user-item");

        let name = document.createElement('h3');
        name.innerHTML = data[index].first_name + " " + data[index].last_name;
        card.appendChild(name);

        let email = document.createElement('p');
        email.innerHTML = data[index].email;
        card.appendChild(email);

        let avt = document.createElement('img');
        avt.setAttribute('src', data[index].avatar);
        avt.setAttribute('alt', 'avatar');
        avt.setAttribute('class', 'avatar');
        card.appendChild(avt);

        card.appendChild(document.createElement('br'));

        let btn_edit = document.createElement('a');
        btn_edit.setAttribute('href', 'edit-page.html');
        btn_edit.setAttribute('class', 'btn btn-second');
        btn_edit.innerHTML = "Edit User";
        btn_edit.onclick = () => {
            localStorage.setItem('user-info', JSON.stringify(data[index]));
        }
        card.appendChild(btn_edit);

        let btn_delete = document.createElement('button');
        btn_delete.setAttribute('class', 'btn btn-second');
        btn_delete.innerHTML = "Delete";
        btn_delete.onclick = () => {
            data.splice(index,1);
            localStorage.setItem('data',JSON.stringify(data));
            window.location.reload();
        }
        card.appendChild(btn_delete);

        ul.appendChild(card);

        if ((index + 1) % 4 == 0) {
            userList[0].appendChild(ul);
            ul = document.createElement("ul")
            ul.setAttribute("class", "list-user")
        }
        if (index == data.length-1){
            userList[0].appendChild(ul);
        }
    }
}

const search = () => {
    let search_value = document.getElementById('search').value;

    let users = JSON.parse(localStorage.getItem('data'));
    let result = [];
    users.forEach(element => {
        if ((element.first_name + " " + element.last_name).search(search_value) != -1){
            result.push(element);
        }
    });
    // console.log(result)
    localStorage.setItem('data',JSON.stringify(result));
    window.location.href = 'index.html';

}

const handlerClickHomeLogo = () => {
    localStorage.setItem('data',JSON.stringify(data_user));
}