
const bar1 = document.getElementById("up");
const bar2 = document.getElementById("down");
const menu = document.getElementById("menu");
const arrow = document.getElementById("arrow");

function checkWidth()
{
    var width = window.innerWidth;

    if(width < 1200)
    {
        openMenu();
    }
}

function openMenu()
{
    menu.classList.toggle("menu-open");
    bar1.classList.toggle("rotate-counter");
    bar2.classList.toggle("rotate-clockwise");
}

