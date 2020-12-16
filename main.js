async function get(){
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=e4596d5891814e338db722b2fc735208&format=json';
    try{
        var parsed = '';
        const response = await fetch(proxyurl + url);
        const data = await response.json();
        var js = data.articles;
        var i =0;
        for(i=0;i<js.length;i++){
        parsed+='<h1 align="center">'+js[i].title+'</h1> <img src="'+js[i].urlToImage+'"><br>'+
        +'<p align="center">'+js[i].content+'</p>';
    }
    document.getElementById("TTT").innerHTML = parsed;
    }
    catch(error){
        get();
        
    }
}  
get();
