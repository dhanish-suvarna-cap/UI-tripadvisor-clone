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
                    <a href="user.html?id=${user.id}">${user.name}</a>
                </div>
            `;
        });
    }
};

const main = async () => {
    let response = await getData(`https://jsonplaceholder.typicode.com/users`);

    console.log(response);
    updateContent(response);
};

main();
