var moves=0,time=0;
function swaptile(cell1,cell2)
{
    var temp=document.getElementById(cell1).className;
    var tempno=document.getElementById(cell1).innerHTML;
    document.getElementById(cell1).className=document.getElementById(cell2).className;
    document.getElementById(cell1).innerHTML=document.getElementById(cell2).innerHTML;
    document.getElementById(cell2).className=temp;
    document.getElementById(cell2).innerHTML=tempno;
    return;


}

function clickTile(row,col)
{
    
    document.getElementById("move").innerHTML="Move:"+moves;
    var block=document.getElementById("cell"+row+col);
    var tile=block.className;
    if(tile!="tile9");
    {
        //checking for blank space on right
        if(col<3)
        {
            if(document.getElementById("cell"+row.toString()+(col+1).toString()).className=="tile9")
            {
                swaptile(("cell"+row.toString()+col.toString()),("cell"+row.toString()+(col+1).toString()));
                moves++;
                return;
            }
        }
        //checking for blank space on left
        if(col>1)
        {
            if(document.getElementById("cell"+row.toString()+(col-1).toString()).className=="tile9")
            {
                swaptile(("cell"+row.toString()+col.toString()),("cell"+row.toString()+(col-1).toString()));
                moves++;
                return;
            }
        }
        //checking for blank space on top
        if(row>1)
        {
            if(document.getElementById("cell"+(row-1).toString()+col.toString()).className=="tile9")
            {
                swaptile(("cell"+row.toString()+col.toString()),("cell"+(row-1).toString()+col.toString()));
                moves++;
                return;
            }
        }
        //checking for blank space on bottom
        if(row<3)
        {
            if(document.getElementById("cell"+(row+1)+col).className=="tile9")
            {
                swaptile(("cell"+row.toString()+col.toString()),("cell"+(row+1).toString()+col.toString()));
                moves++;
                return;
            }
        }
    }

}



function shuffle()
{
    moves=0;
    time=0;
    document.getElementById("move").innerHTML="Move:"+moves;
    for(var row=1;row<=3;row++)
    {
        for(var col=1;col<=3;col++)
        {
            var row2=Math.floor(Math.random()*3+1);
            var col2=Math.floor(Math.random()*3+1);
            swaptile("cell"+row.toString()+col.toString(),"cell"+row2.toString()+col2.toString());
        }
    }
    return;
}

function timer()
{
    time++;
    document.getElementById("time").innerHTML="Time:"+time+"s";

}
setInterval(timer, 1000);

function check()
{
    if(getElementById("cell11").innerHTML=="1")
    {
        if(getElementById("cell12").innerHTML=="2")
        {
            if(getElementById("cell13").innerHTML=="3")
            {
                if(getElementById("cell21").innerHTML=="4")
                {
                    if(getElementById("cell22").innerHTML=="5")
                    {
                        if(getElementById("cell23").innerHTML=="6")
                        {
                            if(getElementById("cell31").innerHTML=="7")
                            {
                                if(getElementById("cell32").innerHTML=="8")
                                {
                                    getElementById("message").style.visibility='visible';
                                }
                            }
                        }
                    }
                }
            }
        }
    }
                    

}
            