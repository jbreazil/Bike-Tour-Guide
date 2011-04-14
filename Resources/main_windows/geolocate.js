var win = Titanium.UI.currentWindow;
win.backgroundColor = '#fff';

Ti.include("version.js");

if (isIPhone3_2_Plus())
{
	//NOTE: starting in 3.2+, you'll need to set the applications
	//purpose property for using Location services on iPhone
	Ti.Geolocation.purpose = "Bicycle Touring Guide for the Oregon Coast";
}

//
// TOOLBAR
//
/*var tb2 = Titanium.UI.createTabbedBar({
	labels:['Map', 'Shops'],
	index:0
});
var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

win.setToolbar([flexSpace,tb2,flexSpace]);

tb2.addEventListener('click', function(e)
{
    if(e.index == 1)
    {
        shopWin = Titanium.UI.createWindow({
            url:'shoplist.js',
            navBarHidden:false
        });
    }
    else if(e.index == 0)
    {
        shopWin = Titanium.UI.createWindow({
            url:'geolocate.js',
            navBarHidden:true
        });
    }
    
    Titanium.UI.currentTab.open(shopWin,{animated:true});
    
    Ti.API.info('You clicked Index: '+e.index);
});
*/


//
//  Create annotations -- rewrite this to grab from list or DB when time allows
//
// var bkAddr = "150 NW 6th street Newport oregon 97365";

var bikenewport = Ti.Map.createAnnotation(
    {
        latitude:44.640290, 
        longitude:-124.053748, 
        title:'Bike Newport',
        titleid:'Shop Info',
        subtitle:'Newport, Or', 
        pincolor:Ti.Map.ANNOTATION_RED, 
        animate:true, 
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:'bikenewport'
    });
    
var bikesandbeyond = Ti.Map.createAnnotation(
    {
        latitude:46.1896183, 
        longitude:-123.8319591, 
        title:'Bikes and Beyond',
        subtitle:'Astoria, Or',
        titleid:'Shop Info', 
        pincolor:Ti.Map.ANNOTATION_PURPLE, 
        animate:true, 
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:'bikesandbeyond'
    });
    
var mikesbikes = Ti.Map.createAnnotation(
    {
        latitude:45.8991553, 
        longitude:-123.9599592, 
        title:'Mikes Bikes',
        subtitle:'Cannon Beach, Or',
        titleid:'Shop Info', 
        pincolor:Ti.Map.ANNOTATION_PURPLE, 
        animate:true, 
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:'mikesbikes'
    });
    
var bikes101 = Ti.Map.createAnnotation(
    {
        latitude:43.974005, 
        longitude:-124.104527, 
        title:'Bikes 101',
        titleid:'Shop Info',
        subtitle:'Florence, Or', 
        pincolor:Ti.Map.ANNOTATION_PURPLE,
        animate:true,
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:'bikes101'
    });
    
var prombikes = Ti.Map.createAnnotation(
    {
        latitude:46.001601, 
        longitude:-123.920748, 
        title:'Prom Bikes',
        titleid:'Shop Info',
        subtitle:'Seaside, Or', 
        pincolor:Ti.Map.ANNOTATION_PURPLE,
        animate:true,
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:'prombikes'
    });
    
var traskcycle = Ti.Map.createAnnotation(
    {
        latitude:45.457837, 
        longitude:-123.844558, 
        title:'Trask Mountain Cycle',
        titleid:'Shop Info',
        subtitle:'Tillamook, Or', 
        pincolor:Ti.Map.ANNOTATION_PURPLE,
        animate:true,
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:'traskcycle'
    });
    
var moesbikes = Ti.Map.createAnnotation(
    {
        latitude:43.415166, 
        longitude:-124.224, 
        title:'Moes Bike Shop',
        titleid:'Shop Info',
        subtitle:'Coos Bay, Or', 
        pincolor:Ti.Map.ANNOTATION_PURPLE,
        animate:true,
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:'moesbikes'
    });
    
var escapecycles = Ti.Map.createAnnotation(
    {
        latitude:42.050675, 
        longitude:-124.281479, 
        title:'Escape Hatch Cycle',
        titleid:'Shop Info',
        subtitle:'Brookings, Or', 
        pincolor:Ti.Map.ANNOTATION_PURPLE,
        animate:true,
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:'escapecycles'
    });
    
    
// Brew Pubs
var bierone = Ti.Map.createAnnotation(
    {
        latitude:44.633077, 
        longitude:-124.057274, 
        title:'Bier One',
        titleid:'Brew Pub',
        subtitle:'Newport, Or', 
        pincolor:Ti.Map.ANNOTATION_GREEN,
        animate:true,
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:'bierone'
    });
    
// Hiker Biker Camp Grounds
var fortstevens = Ti.Map.createAnnotation(
    {
        latitude:46.18256407037658, 
        longitude:-123.97281646728516,
        title:'Fort Stevens State Park',
        titleid:'Park Info',
        subtitle:'Hammond, Or', 
        pincolor:Ti.Map.ANNOTATION_GREEN,
        animate:true,
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:'fortstevens'
    });

var nehalembay = Ti.Map.createAnnotation(
    {
        latitude:45.673563, 
        longitude:-123.936424,
        title:'Nehalem Bay State Park',
        titleid:'Park Info',
        subtitle:'Rockaway, Or', 
        pincolor:Ti.Map.ANNOTATION_GREEN,
        animate:true,
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:'nehalembay'
    });
  
//Ti.Geolocation.forwardGeocoder(bkAddr,function(evt) 
//{
//    Ti.API.info('Bike Newport Lat:'+evt.latitude+'  Longi:'+evt.longitude);
//    
//    bikenewport.latitude = evt.latitude;
//    bikenewport.longitude = evt.longitude;
//});
    
//
//  SHOW CUSTOM ALERT IF DEVICE HAS GEO TURNED OFF
//
if (Titanium.Geolocation.locationServicesEnabled==false)
{
	Titanium.UI.createAlertDialog({title:'Bike Newport Touring Guide', message:'Your device has geo turned off - turn it on.'}).show();
}
else
{
	if (Titanium.Platform.name != 'android') {
		var authorization = Titanium.Geolocation.locationServicesAuthorization;
		Ti.API.log('Authorization: '+authorization);
		if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
			Ti.UI.createAlertDialog({
				title:'Bike Newport Touring Guide',
				message:'You have disallowed Titanium from running geolocation services.'
			}).show();
		}
		else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
			Ti.UI.createAlertDialog({
				title:'Bike Newport Touring Guide',
				message:'Your system has disallowed Titanium from running geolocation services.'
			}).show();
		}
	}

	//
	//  SET ACCURACY - THE FOLLOWING VALUES ARE SUPPORTED
	//
	// Titanium.Geolocation.ACCURACY_BEST
	// Titanium.Geolocation.ACCURACY_NEAREST_TEN_METERS
	// Titanium.Geolocation.ACCURACY_HUNDRED_METERS
	// Titanium.Geolocation.ACCURACY_KILOMETER
	// Titanium.Geolocation.ACCURACY_THREE_KILOMETERS
	//
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;

	//
	//  SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES
	//  THIS VALUE IS IN METERS
	//
	Titanium.Geolocation.distanceFilter = 4;
    
    //
	// GET CURRENT POSITION - THIS FIRES ONCE
	//
    Titanium.Geolocation.getCurrentPosition(function(e)
    {
        if (!e.success || e.error)
        {
            alert('error ' + JSON.stringify(e.error));
            return;
        }
        
        var mapView = Ti.Map.createView(
        { 
            mapType: Ti.Map.STANDARD_TYPE, 
            region:{latitude:e.coords.latitude,
                    longitude: e.coords.longitude,
                    latitudeDelta:0.3,
                    longitudeDelta:0.3
                    }, 
                    animate:true, 
                    regionFit:true, 
                    userLocation:true, 
                    annotations:[bikenewport,bikesandbeyond,mikesbikes,bikes101,bierone,prombikes,traskcycle,moesbikes,
                    escapecycles,fortstevens,nehalembay]
        });
        win.add(mapView);
        
        var search = Titanium.UI.createSearchBar({
            barColor:'#000',
            showCancel:true,
            height:43,
            top:0
        });

        win.add(search);

        Ti.include('../utils/search.js');
        
        //
        //  Add event listener for clicking right button on annotations
        //
        mapView.addEventListener('click',function(evt)
        {
            if (evt.clicksource == 'rightButton')
            {
                shopWin = Titanium.UI.createWindow({
                    url:'../shops/'+evt.annotation.myid+'.js',
                    title:evt.annotation.titleid,
                    navBarHidden:false
                });
                
                Titanium.UI.currentTab.open(shopWin,{animated:true});
                
                //shopWin.open({
                //    transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
                //});
            }
            
            Ti.API.info('you clicked on -'+evt.annotation.myid+'- with click source = '+evt.clicksource);
        });
    });
}
 