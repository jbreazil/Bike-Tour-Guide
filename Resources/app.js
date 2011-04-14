// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({id:'tabGroup1'});

//
// create geolocation tab and root window
//
var win1 = Titanium.UI.createWindow({
    url:'main_windows/geolocate.js',
    navBarHidden: true
});
var tab1 = Titanium.UI.createTab({
    icon:'bn_radar.png',
    title:'Shop Map',
    window:win1
});

//
// create phone tab and root window
//
var win2 = Titanium.UI.createWindow({
<<<<<<< HEAD
    url:'main_windows/geolocate.js',
    //titleid:'Shops near me'
    navBarHidden: true
=======
    url:'main_windows/shoplist.js',
    title:'Bike Shops',
    navBarHidden:true
>>>>>>> BetaDev
});
var tab2 = Titanium.UI.createTab({
    icon:'bn_nav_ui.png',
    title:'Bike Shops',
    window:win2
});

//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
//tabGroup.addTab(tab3);
//tabGroup.addTab(tab4);
//tabGroup.addTab(tab5);

tabGroup.addEventListener('open',function()
{
	// set background color back to white after tab group transition
	Titanium.UI.setBackgroundColor('#fff');
});

tabGroup.setActiveTab(0);
 
// open tab group with a transition animation
setTimeout(function()
{
    tabGroup.open({
        transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
    });
},3000);
