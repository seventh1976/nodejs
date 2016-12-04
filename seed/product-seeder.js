var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://img.game.co.uk/ml2/5/1/8/3/518344_ps4_c.png',
        title: 'Final Fantasy XV Deluxe Edition - Only at GAME',
        description: 'Enter the world of FINAL FANTASY XV, and experience epic action-packed battles along your journey of discovery. You are Noctis, the Crown Prince of the Kingdom of Lucis, and your quest is to reclaim your homeland from the clutches of the imperial army',
        price: 69.99,
    }),
    new Product({
        imagePath: 'https://img.game.co.uk/ml2/4/0/4/2/404267_xb1_c.png',
        title: 'Gears of War 4',
        description: 'A new saga begins for one of the most acclaimed video game franchises in history. After narrowly escaping an attack on their village, JD Fenix and his friends, Kait and Del, must rescue the ones they love and discover the source of a monstrous new enemy',
        price: 44.99,
    }),
    new Product({
        imagePath: 'https://img.game.co.uk/ml2/5/5/3/5/553558_ps4_c.png',
        title: 'WWE 2K17',
        description: 'Welcome to Suplex City, courtesy of cover Superstar Brock Lesnar! WWE 2K17 arrives as the reigning and defending flagship WWE video game franchise champion! WWE 2K17 features stunning graphics, ultra-authentic gameplay and a massive roster of WWE and NXT’s popular Superstars and Legends',
        price: 44.99,
    }),
    new Product({
        imagePath: 'https://img.game.co.uk/ml2/5/6/3/8/563832_xb1_c.png',
        title: 'Forza Horizon 3',
        description: 'Welcome to Australia. At the Horizon Festival you will explore the biggest, most diverse and scenic open world ever. Discover exciting new driving mechanics like Drift Zones, Convoys, and Danger Sign Jumps whilst collecting and customise over 350 of the world greatest cars. Invite friends to join the brand new 4 player online campaign co-op or to help win you fans as you host your own full customisable Horizon festival',
        price: 44.99,
    }),
    new Product({
        imagePath: 'https://img.game.co.uk/ml2/4/2/8/7/428714_ps4_c.png',
        title: 'No Man Sky',
        description: 'Heavily inspired by classic science-fiction, No Man’s Sky is a game with near limitless possibilities and a whole universe to explore. Explore uncharted planets and discover new lifeforms and you travel to the centre of a vast infinite universe full of wonder',
        price: 22.99,
    }),
    new Product({
        imagePath: 'https://img.game.co.uk/ml2/6/2/8/8/628829_ps4_c.png',
        title: 'Destiny - The Collection',
        description: 'Destiny - The Collection contains every release from the award-winning first-person shooter franchise to date. It’s a great way for Guardians to embark on journeys they may have missed, as well as a perfect starting point for new players who want to join the Destiny community',
        price: 22.99,
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}