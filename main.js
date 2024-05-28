let a = prompt("Enter any rock(1), paper(2) or scissor(3)");
let b = Math.floor(Math.random() * 3);
if(a)
{
if ( a == b )
{
    document.getElementById("output").innerHTML="The Match is Tie!!!";
}
else if( a == 1 && b == 2 )
{
    document.getElementById("output").innerHTML="You lose Man (Rock and Paper)";
}
else if (a == 2 && b == 3 )
{
    document.getElementById("output").innerHTML="You lose Man (Paper and Scissor)";    
}
else if (a == 1 && b == 3 )
{
    document.getElementById("output").innerHTML="You Win Man (Rock and Scissor)";    
}
else if (a == 2 && b == 1 )
{
    document.getElementById("output").innerHTML="You Win Man (Paper and Rock)";    
}
else if (a == 3 && b == 1 )
{
    document.getElementById("output").innerHTML="You lose Man (Scissor and Rock)";    
}
else if (a == 3 && b == 2 )
{
    document.getElementById("output").innerHTML="You Win Man (Scissor and Paper)";    
}
else
{
    alert("Please Enter your Number Man");
    location.reload();
}
}
document.getElementById('continue').addEventListener('click', function() {
    let c = confirm("Are you want to play again??");
    if(c)
    {
        location.reload();
    }
    else
    {
        window.location.href="sample.html";
    }
});

