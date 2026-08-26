async function getPosts() {

    try {
        const data = await fetch("https://dummyjson.com/users");

        const dataPosts = await data.json();

        console.log(dataPosts);
    } catch (err) {
        console.log(err);
    }
}

getPosts();


async function getTeam() {
    try {
        const data = await fetch("https://dummyjson.com/users");

        const dataTeam = await data.json();

        return dataTeam.users;

    } catch (err) {
        console.log(err);
    }
}

// const cards = document.querySelector('.testimonials__cards');

getTeam().then(team => {
    renderTeam(team);
});

function renderTeam(team) {
    const cards = document.querySelector('.swiper-wrapper');


    cards.innerHTML = team.map(function (person) {
        return `
<div class="swiper-slide">
    <div class="testimonials__card-top">
        <img class="testimonials__card-img" src="${person.image}" alt="avatar" />
        <div class="testimonials__card-text">
            <h3 class="testimonials__card-title">${person.firstName}</h3>
            <p class="testimonials__card-description">${person.username}</p>
        </div>
    </div>
    <div class="testimonials__card-bottom">${person.university}</div>
</div>
`
    }).join('\n');

}

new Swiper('.swiper', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: '.testimonials__arrow-right',
        prevEl: '.testimonials__arrow-left',
    },
});

