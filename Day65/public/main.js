let down = document.getElementById('download');
let downt = document.getElementById('downText');

let like = document.getElementById('like');
let liket = document.getElementById('likeText');

down.addEventListener("click", () => {
    fetch('https://api.countapi.xyz/update/fantasy-expert/fantasyexpert/?amount=1')
    .then(res => res.json())
    .then(res => {
        downt.innerHTML = res.value
    })
})

like.addEventListener("click", () => {
    fetch('https://api.countapi.xyz/update/fantasy-expert/fantasyexpert/?amount=1')
    .then(res => res.json())
    .then(res => {
        liket.innerHTML = res.value
    })
})
console.log("working")

