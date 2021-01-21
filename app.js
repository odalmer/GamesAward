let point, thisGame, thatGame;
let thisImg = document.getElementById('thisImg');
let thatImg = document.getElementById('thatImg');
gamesSelected = [];
let imgs = document.getElementsByClassName('img');
let index = 0;

let level = 0, thisG = 0, thatG = 1, nameG = 0, img = 1;

let games = [
    // level1
    [['fortnite', "https://image.api.playstation.com/vulcan/img/rnd/202012/0206/oZzgDgvDYaNFGWZnrl9hRdG3.png"], ['warzone', "https://www.teknofilo.com/wp-content/uploads/2020/03/CoD-Warzone1.jpg"]],

    // level 2
    [['fallGuys', 'https://blog.latam.playstation.com/tachyon/sites/3/2020/08/50167897647_4dbfde6c5a_oa.jpg?resize=1088,612&crop_strategy=smart'],

    ['amongUs', 'https://www.emprendedores.es/wp-content/uploads/2020/10/Among-Us-1200x675-1.jpg']],

    // level 3
    [['lol', 'https://esports.eldesmarque.com/wp-content/uploads/2019/09/LoL2.jpg'],

    ['dota', 'https://hipertextual.com/files/2013/07/dota-2-para-mac-y-linux.jpg']],

    // level 4
    [['brawlhalla', 'https://i.blogs.es/e1da3c/brawlhalla/1366_2000.jpeg'],

    ['smash', 'https://www.smashbros.com/assets_v2/img/movie/20180613_1.jpg']],

    // level 5
    [['batman', 'https://cdn.cloudflare.steamstatic.com/steam/apps/208650/capsule_616x353.jpg?t=1591738126'], ['spiderman', 'https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/pZ2pIEEnH7YhEtpxh1CY6KDz.png']],

    // level 6
    [['paladins', 'https://i.ytimg.com/vi/0rV3-HXhky8/maxresdefault.jpg'],
    ['overwatch', 'https://i.blogs.es/9e7c92/captura-de-pantalla-2016-05-22-a-las-19.16.39/840_560.png']],

    // level 7
    [['cod', 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/zeus/common/social-share/zeus-social-share.jpg'], ['battlefield', 'https://image.api.playstation.com/cdn/EP0006/CUSA08670_00/l2B6pYvxHDYUjuhT0vTHcidJA2MpjWR4.png']]

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


