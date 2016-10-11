(function () {
    var responseContainer = document.querySelector('#response-container');
    var haikus = [
        ' I go on fun hikes 🗻 \n and ride my bright orange bike 🚴🏼 \n it is a delight 😁 \n',
        ' I love to eat fruit 🍑 \n and some delicious ice cream 🍦 \n on a sunny day ☀️ \n',
        ' I live in San Fran 🌉 \n It is too hipster for me 🚶\n But I like the fog ☁️ \n',
        ' I like boba tea 🍵 \n It is so great when its free 💵 \n my friend pays for me 🙋🏻 \n',
        ' I am a dancer 💃🏻 \n and a former school teacher 🍎\n and a designer ✏️\n'
    ];
    var randomHaiku = haikus[Math.floor(Math.random() * haikus.length)];

    responseContainer.innerHTML = '<pre>' + randomHaiku + '</pre>';
})();
