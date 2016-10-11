(function () {
    var responseContainer = document.querySelector('#response-container');
    var haikus = [
        'I go on fun hikes 🗻 \nand ride my bright orange bike 🚴🏼 \nit is a delight 😁 \n',
        'I love to eat fruit 🍑 \nand some delicious ice cream 🍦 \non a sunny day ☀️ \n',
        'I live in San Fran 🌉 \nIt is too hipster for me 🚶\nBut I like the fog ☁️ \n',
        'I like boba tea 🍵 \nIt is so great when its free 💵 \nmy friend pays for me 🙋🏻 \n',
        'I am a dancer 💃🏻 \nand a former school teacher 🍎\nand a designer ✏️\n'
    ];
    var randomHaiku = haikus[Math.floor(Math.random() * haikus.length)];

    responseContainer.innerHTML = '<pre>' + randomHaiku + '</pre>';
})();
