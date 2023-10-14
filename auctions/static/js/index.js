let listes = document.querySelectorAll(".what_am_i");
let ajaxPromises = [];

for (let i = 0; i < listes.length; i++) {
    (function(i) {
        let ajaxPromise = new Promise(function(resolve, reject) {
            $.ajax({
                url: '/witch',
                data: {
                    page: listes[i].id
                },
                type: 'GET',
            }).done(function(response) {
                $('#'+ listes[i].id).replaceWith(response);
                resolve();
            });
        });
        
        ajaxPromises.push(ajaxPromise);
    })(i);
}

Promise.all(ajaxPromises).then(function() {
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
});

    
function Add(number)
{
    $("#"+number).replaceWith('<img class="watchlist" src="/static/auctions/unbookmark.png" id="' + number + '" title="Delete from watchlist" onclick="Delete('+ number +')">')
        $.ajax({
                url : '/Wadd',
                data : {
                        page : number
                    },
                type : 'GET',        
                })
}
    
function Delete(number)
{
    $("#"+number).replaceWith("<img class='watchlist' src='/static/auctions/bookmark.png' id='" + number + "' title='Add to watchlist' onclick='Add(" + number + ")'>")
        $.ajax({
                url : '/Wdel',
                data : {
                        page : number
                    },
                type : 'GET'
                })   
    }