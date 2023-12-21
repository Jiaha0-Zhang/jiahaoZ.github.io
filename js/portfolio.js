let index = 0; //display img by index number

for(let i=0; i < imageCount; i++)
{   //DOM operation
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.onclick = () => setIndex(i);
    bottom.append(indicator);
}


function refresh()
{
    if(index < 0)  //index < 0 , show the far right img
    {
        index = 4;
    }
    else if(index>4) //when index over limit, show the far left img
    {
        index = 0;
    }
    let carousel = document.querySelector(".carousel"); //get carousel elements

    let width = getComputedStyle(carousel).width;  //get carousel width
    width = Number(width.slice(0, -2));

    carousel.querySelector(".container").style.left = index * width * -1 + "px";
}

function leftShift()
{
    index --;     //press leftshift and index -1
    refresh();
}
function rightShift()  //press rightshift and index +1
{
    index ++;
    refresh();
}
function setIndex(idx)
{
    index = idx;
    refresh();
}
