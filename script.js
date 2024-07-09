const data = {
    animals: [
        { word: "Lion", image: "assets/images/animals/lion.png", audio: "assets/audios/animallion.mp3" },
        { word: "cat", image: "assets/images/animals/cat.png", audio: "assets/audios/animals/cat.mp3" },
        { word: "dog", image: "assets/images/animals/dog.png", audio: "assets/audios/animals/dog.mp3" },
        { word: "elephant", image: "assets/images/animals/elephant.png", audio: "assets/audios/animals/elephant.mp3" },
        { word: "wolf", image: "assets/images/animals/wolf.png", audio: "assets/audios/animals/giraffe.mp3" },
        { word: "sheep", image: "assets/images/animals/sheep.png", audio: "assets/audios/animals/monkey.mp3" },
        { word: "shark", image: "assets/images/animals/shark.png", audio: "assets/audios/animals/penguin.mp3" },
        { word: "rabbit", image: "assets/images/animals/rabbit.png", audio: "assets/audios/animals/rabbit.mp3" },
        { word: "tiger", image: "assets/images/animals/tiger.png", audio: "assets/audios/animals/tiger.mp3" },
        { word: "chicken", image: "assets/images/animals/chicken.png", audio: "assets/audios/animals/zebra.mp3" }
        // Tambahkan lebih banyak kata hewan di sini
    ],
    fruits: [
        { word: "apple", image: "assets/images/fruits/apple.png", audio: "assets/apple.mp3" },
        { word: "banana", image: "assets/images/fruits/banana.png", audio: "assets/banana.mp3" },
        { word: "coconut", image: "assets/images/fruits/coconut.png", audio: "assets/coconut.mp3" },
        { word: "dragon-fruit", image: "assets/images/fruits/dragon-fruit.png", audio: "assets/dragon-fruit.mp3" },
        { word: "grape", image: "assets/images/fruits/grape.png", audio: "assets/grape.mp3" },
        { word: "jack-fruit", image: "assets/images/fruits/jack-fruit.png", audio: "assets/jack-fruit.mp3" },
        { word: "melon", image: "assets/images/fruits/melon.png", audio: "assets/melon.mp3" },
        { word: "orange", image: "assets/images/fruits/orange.png", audio: "assets/orange.mp3" },
        { word: "peach", image: "assets/images/fruits/peach.png", audio: "assets/peach.mp3" },
        { word: "strawberry", image: "assets/images/fruits/strawberry.png", audio: "assets/strawberry.mp3" }
        // Tambahkan lebih banyak kata buah di sini
    ],
    vehicles: [
        { word: "Car", image: "assets/car.png", audio: "assets/car.mp3" },
        { word: "Bike", image: "assets/bike.png", audio: "assets/bike.mp3" }
        // Tambahkan lebih banyak kata kendaraan di sini
    ],
    
    // colors: [
    //     { word: "red", image: "images/red.png" },
    //     { word: "blue", image: "images/blue.png" },
    //     { word: "green", image: "images/green.png" },
    //     { word: "yellow", image: "images/yellow.png" },
    //     { word: "purple", image: "images/purple.png" },
    //     { word: "orange", image: "images/orange.png" },
    //     { word: "pink", image: "images/pink.png" },
    //     { word: "brown", image: "images/brown.png" },
    //     { word: "black", image: "images/black.png" },
    //     { word: "white", image: "images/white.png" }
    // ]
};

function playSound(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();
}

function createCard(item) {
    return `
        <div class="card">
            <img src="${item.image}" alt="${item.word}">
            <h3>${item.word}</h3>
            <button onclick="playSound('${item.audio}')">🔊</button>
        </div>
    `;
}

function createCategorySection(category, items) {
    const cards = items.map(createCard).join('');
    return `
        <section id="${category}" class="category">
            <h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div class="cards">
                ${cards}
            </div>
        </section>
    `;
}

function loadContent() {
    const content = document.getElementById('content');
    const categories = Object.keys(data);
    content.innerHTML = categories.map(category => createCategorySection(category, data[category])).join('');
}

document.addEventListener('DOMContentLoaded', loadContent);
