

function search()
{
    var search= document.getElementById("sanjeevni-search").value;
    
    document.getElementById("disease_search").setAttribute("href", "webpages/" + search +".html");
}