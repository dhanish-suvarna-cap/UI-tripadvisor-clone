// const getUser = async (URL) => {
//     try {
//         let response = await axios.get(URL);
//         return response.data;
//     } catch (err) {
//         console.log(err);
//     }
// };

const main = async () => {
    let id;
    const urlParams = new URLSearchParams(location.search);

    if(urlParams.has('id')){
        id = urlParams.get('id');
    }

    // let response = await getUser(`https://jsonplaceholder.typicode.com/users?id=${id}`);

    let response = JSON.parse(sessionStorage.getItem(id));
    console.log(response);

    let axios_container = document.querySelector(".usr-content");

    axios_container.innerHTML = `
                        <h3>ID : ${response.id}</h3>
                        <h3>Name : ${response.name}</h3>
                        <h3>UserName : ${response.username}</h3>
                        <h3>Email : ${response.email}</h3>
                        <h3>Address : ${response.address.street}</h3>
                        <h3>Pincode : ${response.address.zipcode}</h3>
                        <h3>Phone : ${response.phone}</h3>
                        <h3>Website : ${response.website}</h3>
                        <h3>Company Name : ${response.company.name}</h3>`;
}

main();