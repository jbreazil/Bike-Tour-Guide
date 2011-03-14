//
// Add search bar to map view
//
var search_bar = Titanium.UI.createSearchBar({
    barColor:'#000',
    showCancel:true,
    height:43,
    top:0
});

search_bar.addEventListener('blur', function(e) {
    Titanium.API.info('search bar:blur received');
});
 
search_bar.addEventListener('cancel', function(e) {
    Titanium.API.info('search bar:cancel received');
    search_bar.blur();
});
 
search_bar.addEventListener('return', function(e) { 
 
    if ( !Titanium.Network.online ) {
        alert( "You need an intrnet connection to search for books.");
    }
 
    else if ( e.value.length >= 3 )  {
 
        do_search(e.value);
        search_bar.blur();
    }
    else {
        alert("Please use minimum 3 characters to search.");
    }
});

win.add(search_bar);