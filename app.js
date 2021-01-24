let point, thisGame, thatGame;
let thisImg = document.getElementById('thisImg');
let thatImg = document.getElementById('thatImg');
gamesSelected = [];
let imgs = document.getElementsByClassName('img');
let index = 0;

let level = 0, thisG = 0, thatG = 1, nameG = 0, img = 1;

let games = [
    // level1
    [['fortnite', "imgs/fortnite.jpg"], ['warzone', "imgs/Warzone.jpg"]],

    // level 2
    [['fallGuys', 'imgs/maxresdefault.jpg'], ['amongUs', 'imgs/Among-Us-1200x675-1.jpg']],

    // level 3
    [['lol', 'imgs/LoL2.jpg'], ['dota', 'imgs/dota-2-para-mac-y-linux.jpg']],

    // level 4
    [['brawlhalla', 'imgs/1366_2000.jpeg'], ['smash', 'imgs/20180613_1.webp']],

    // level 5
    [['batman', 'imgs/capsule_616x353.jpg'], ['spiderman', 'imgs/pZ2pIEEnH7YhEtpxh1CY6KDz.webp']],

    // level 6
    [['paladins', 'imgs/paladins.jpg'],
        ['overwatch', 'imgs/840_560.png']],

    // level 7
    [['cod', 'imgs/download.jfif'], ['battlefield', 'imgs/battlefield.jfif']]

    // level 8

    // level 9

    // level 10
]


LevelUpdater()

imgs[0].addEventListener('click', e => {
    // this 
    if (level <= games.length - 1) {
        gamesSelected[index] = thisGame;
    }
    index++;
    LevelUpdater();
})
imgs[1].addEventListener('click', e => {
    // that 
    if (level <= games.length - 1) {
        gamesSelected[index] = thatGame;
    }
    index++;
    LevelUpdater();
})
function LevelUpdater() {
    if (level <= games.length - 1) {
        NextLevel(games[level][thisG][nameG], games[level][thisG][img], games[level][thatG][nameG], games[level][thatG][img])
        level++;
    } else {
        //Finish and save data

    }

    console.log('Games: ' + gamesSelected)
}

function NextLevel(whatGameIsThis, imgThis, whatGameIsThat, imgThat) {
    thisImg.style.backgroundImage = 'url(' + imgThis + ')';
    thatImg.style.backgroundImage = 'url(' + imgThat + ')';
    thisGame = whatGameIsThis;
    thatGame = whatGameIsThat;
}


