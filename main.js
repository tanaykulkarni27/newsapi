async function get(){
    const myurl = 'http://newsapi.org/v2/everything?country=in&category=entertainment&apiKey=e4596d5891814e338db722b2fc735208&format=json';
    try{
        var parsed = '';
        const response = await fetch(myurl);
        const data = await response.json();
        var js = data.articles;
        var i =0;
        for(i=0;i<js.length;i++){
        var main_content =     js[i].content;
        parsed+='<p align="center" class="head">'+js[i].title+'</p> <center><img class="img-fluid" alt="Responsive image" src="'+js[i].urlToImage+'"></center><br>'+
        +'<p class="lead" align="center" style="font-size:3em;">'+main_content+'</p><hr>';
        document.getElementById("TTT").innerHTML = parsed;
    }

    }
    catch(error){
        get();
        
    }
}  
$(document).ready(function (){
   get();
});
//get();
