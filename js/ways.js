const arr2 = [
    {
        url : "../assets/images/ways-1.jpg",
        data : "Bangalore Through the Ages - Full-Day Tour with Lunch",
        rating: 202,
        star: 5,
        price: "from ₹9,876 per adult"
    },
    {
        url : "../assets/images/ways-2.jpg",
        data : "Bengaluru by Tuk Tuk",
        rating: 202,
        star: 5,
        price: "from ₹9,876 per adult"
    },
    {
        url : "../assets/images/ways-3.jpg",
        data : "Private Full-Day Bangalore City Tour",
        rating: 202,
        star: 5,
        price: "from ₹9,876 per adult"
    },
    {
        url : "../assets/images/ways-4.jpg",
        data : "Tipu Palace + Koté Vishnu + Fort + KR Market + Jain Temple = Bengaluru Pété Walk",
        rating: 202,
        star: 5,
        price: "from ₹9,876 per adult"
    },
    {
        url : "../assets/images/ways-5.jpg",
        data : "Bangalore Through the Ages - Full-Day Tour with Lunch",
        rating: 202,
        star: 5,
        price: "from ₹9,876 per adult"
    }
]

var explore_box = document.querySelector(".ways_box");
var left2 = document.querySelector(".left2");
var right2 = document.querySelector(".right2");


const content2 = arr2.map((element)=>{
    return `<div class="ways" style="background: url('${element.url}');">
                <div class="heart">
                    <span class="material-symbols-outlined">
                    favorite
                    </span>
                </div>
                <div class="data">
                    <h4>${element.data}</h4>
                    <p>${element.rating}</p>
                    <p>from ${element.price} per adult</p>
                </div>
            </div>`;
});


// Initial state
for (var i = 0; i < 4; i++) {
    explore_box.innerHTML += content2[i];
}
left2.style.visibility= "hidden";

const addContent2 = (start, end) => {
    explore_box.innerHTML="";
    for (var i = start; i < end; i++) {
        explore_box.innerHTML += content2[i];
    }
}

let start2 = 0, end2 = 4;
right2.addEventListener('click', ()=>{
    addContent2(++start2, ++end2);
    if(end2 === content.length){
        right2.style.visibility="hidden";
        left2.style.visibility="visible";
    }
})

left2.addEventListener('click', ()=>{
    addContent2(--start2, --end2);
    if(start2 === 0){
        left2.style.visibility="hidden";
        right2.style.visibility="visible";
    }
})
