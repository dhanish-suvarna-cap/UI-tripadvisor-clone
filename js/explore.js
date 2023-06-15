const arr = [
    {
        url : "../assets/images/explore-1.jpg",
        data : "Top World"
    },
    {
        url : "../assets/images/explore-2.jpg",
        data : "Hottest New"
    },
    {
        url : "../assets/images/explore-3.jpg",
        data : "Family"
    },
    {
        url : "../assets/images/explore-4.jpg",
        data : "Luxury",
    },
    {
        url : "../assets/images/explore-5.jpg",
        data : "Out of the Ordinary",
    }
]

var explore_box = document.querySelector(".explore_box");
var left = document.querySelector(".left");
var right = document.querySelector(".right");


const content = arr.map((element)=>{
    return `<div class="explore" style="background: url('${element.url}');">
                <h1>${element.data}</h1>
            </div>`;
});


// Initial state
for (var i = 0; i < 4; i++) {
    explore_box.innerHTML += content[i];
}
left.style.visibility= "hidden";

const addContent = (start, end) => {
    explore_box.innerHTML="";
    for (var i = start; i < end; i++) {
        explore_box.innerHTML += content[i];
    }
}

let start = 0, end = 4;
right.addEventListener('click', ()=>{
    addContent(++start, ++end);
    if(end === content.length){
        right.style.visibility="hidden";
        left.style.visibility="visible";
    }
})

left.addEventListener('click', ()=>{
    addContent(--start, --end);
    if(start === 0){
        left.style.visibility="hidden";
        right.style.visibility="visible";
    }
})
