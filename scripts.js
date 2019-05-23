function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

httpGet('https://gateway.marvel.com:443/v1/public/characters?limit=10&apikey=7c8026a56fb60c6ce1598a9aea4526a3');