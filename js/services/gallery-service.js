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
        labels: ["keyboard events"]
    },
    {
        id: "in-picture",
        name: "In-Picture",
        title: "In-Picture",
        desc: "Land of Israel Sightseeing Quiz",
        url: "https://benernst.github.io/in-picture/",
        publishedAt: 1632672809,
        labels: ["Object Indexes Use"]
    },
    {
        id: "touch-nums",
        name: "Touch-Nums",
        title: "Touch-Nums",
        desc: "Clicking The Numbers In Order",
        url: "https://benernst.github.io/touch-nums/",
        publishedAt: 1632744809,
        labels: ["Array Manipulations"]
    },
    {
        id: "ball-board",
        name: "Ball-Board",
        title: "Ball-Board",
        desc: "Running the Monster in the Field in order to Collect Balls",
        url: "https://benernst.github.io/ball-board/",
        publishedAt: 1632932009,
        labels: ["Matrix, onKeyEvent"]
    },
    {
        id: "books-shop",
        name: "Books-Shop",
        title: "Books-Shop",
        desc: "Online Books Shop controlled by the User",
        url: "https://benernst.github.io/books-shop/",
        publishedAt: 1634325209,
        labels: ["CRUDL"]
    },
]


function getDate(ts) {
    var fixedTs = ts * SECOND;
    var d = new Date(fixedTs);
    var dateStr = (`${d.getDate()}.${(d.getMonth() + 1)}.${d.getFullYear()}`);
    return dateStr;
}






