const getData = async (URL) => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

const updateContent = (users) => {
    let axios_container = document.querySelector(".axios_container");

    if (Array.isArray(users) && users.length > 0) {
        users.map((user) => {
            axios_container.innerHTML += `
                <div class="user">
                    <a class="link" href="user.html?id=${user.id}">${user.name}</a>
                </div>
            `;
        });
    }
};

const main = async () => {
    let response = await getData(`https://jsonplaceholder.typicode.com/users`);

    console.log(response);
    updateContent(response);

    let links = document.getElementsByClassName("link");

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", (e) => {
            e.preventDefault();

            let path = e.target.getAttribute("href");
            let id = path.substring(path.indexOf("=")+1, path.length);

            let user = response.filter((u)=> u.id==id);
            sessionStorage.setItem(id, JSON.stringify(user[0]));

            window.location = path;
        });
    }
};

main();
