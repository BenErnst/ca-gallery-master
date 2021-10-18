'use strict';

const SECOND = 1000;


const gProjs = [
    {
        id: "minesweeper",
        name: "Minesweeper",
        title: "Minesweeper",
        desc: "Sprint 1 Project",
        url: "https://benernst.github.io/minesweeper/",
        publishedAt: 1633551810,
        labels: ["Negs", "right-click events"]
    },
    {
        id: "pacman",
        name: "Pacman",
        title: "Pacman",
        desc: "Pacman Game Project",
        url: "https://benernst.github.io/pacman/",
        publishedAt: 1633284765,
        labels: ["Imgs rendering", "keyboard events"]
    }
]


function getDate(ts) {
    var fixedTs = ts * SECOND;
    var d = new Date(fixedTs);
    var dateStr = (`${d.getDate()}.${(d.getMonth() + 1)}.${d.getFullYear()}`);
    return dateStr;
}






