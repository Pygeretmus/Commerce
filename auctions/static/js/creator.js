function stars()
{
    let page = document.querySelector('#page')
    let not_page = document.querySelector('#not_page')
    
    let pageStyle = window.getComputedStyle(page);

    if (pageStyle.display == 'none')
    {
        not_page.style.display = 'none'
        page.style.display = 'inline'
    }
    else
    {
        not_page.style.display = 'inline'
        page.style.display = 'none'
    }
}
    

function scream() {
    if (document.getElementById('photo').value != "") {
        var imageUrl = document.getElementById("photo").value;
        var myImage = new Image();

        myImage.onload = function() {
            var myImage2 = new Image();
            myImage2.src = imageUrl;
            myImage2.id = "presentation2";
            myImage2.height = "100%";

            document.getElementById("presentation").replaceWith(myImage);
            document.getElementById("presentation2").replaceWith(myImage2);
        };

        myImage.onerror = function() {
            alert("Wrong URL!");
            document.getElementById("photo").value = "";
        };

        myImage.src = imageUrl;
        myImage.id = "presentation";
    }
}

function named()
    {
        let x = document.getElementById("name").value
        if (x == "")
        {
            $("#change_me21").replaceWith('<h2 id="change_me21" class="header"><b>Name of your listing</b></h2>')
            $("#change_me22").replaceWith('<h1 id="change_me22" class="header"><b>Name of your listing</b></h1>')
        }
        else
        {
            $("#change_me21").replaceWith('<h2 id="change_me21" class="header"><b>' + x + '</b></h2>')
            $("#change_me22").replaceWith('<h1 id="change_me22" class="header"><b>'+ x + '</b></h1>')
        }
}
    
function descripte()
    {
        let x = document.getElementById("exampleFormControlTextarea1").value
        if (x == "")
        {
            $("#change_me31").replaceWith('<p id="change_me31"> Your description</p > ')
            $("#change_me32").replaceWith('<p id="change_me32">Your description</p>')
        }
        else
        {
            $("#change_me31").replaceWith('<p id="change_me31">' + x + '</p>')
            $("#change_me32").replaceWith('<p id="change_me32">' + x + '</p>') 
        }  
}
    
function prices()
    {
        let x = document.getElementById("starting_price").value
        if (x != "")
        {
            $("#price").replaceWith('<h4 id="price" class="price">' + x + '$</h4>')
        }
        else
        {
            $("#price").replaceWith('<h4 id="price" class="price">Start price</h4>')
        }
        
}