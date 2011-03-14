var win = Titanium.UI.currentWindow;
win.backgroundColor = '#fff';

Ti.include("version.js");

if (isIPhone3_2_Plus())
{
	//NOTE: starting in 3.2+, you'll need to set the applications
	//purpose property for using Location services on iPhone
	Ti.Geolocation.purpose = "Bicycle Touring Guide for the Oregon Coast";
}

var bkAddr = "150 NW 6th street Newport oregon 97365";

var bikenewport = Ti.Map.createAnnotation(
    {
        latitude:0, 
        longitude:0, 
        title:'Bike Newport',
        subtitle:'Newport, Or', 
        pincolor:Ti.Map.ANNOTATION_GREEN, 
        animate:true, 
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:1
    });
    
var bikesandbeyond = Ti.Map.createAnnotation(
    {
        latitude:46.1896183, 
        longitude:-123.8319591, 
        title:'Bikes and Beyond',
        subtitle:'Astoria, Or',
        titleid:'1', 
        pincolor:Ti.Map.ANNOTATION_GREEN, 
        animate:true, 
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:2
    });
    
var mikesbikes = Ti.Map.createAnnotation(
    {
        latitude:45.8991553, 
        longitude:-123.9599592, 
        title:'Mikes Bikes',
        subtitle:'Cannon Beach, Or',
        titleid:'2', 
        pincolor:Ti.Map.ANNOTATION_GREEN, 
        animate:true, 
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:3
    });
    
var bikes101 = Ti.Map.createAnnotation(
    {
        latitude:43.974005, 
        longitude:-124.104527, 
        title:'Bikes 101',
        titleid:'3',
        subtitle:'Florence, Or', 
        pincolor:Ti.Map.ANNOTATION_GREEN,
        animate:true,
        leftButton: '../images/bn-anno.png',
        rightButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
        myid:4
    });
    
Ti.Geolocation.forwardGeocoder(bkAddr,function(evt) 
{
    Ti.API.info('Bike Newport Lat:'+evt.latitude+'  Longi:'+evt.longitude);
    
    bikenewport.latitude = evt.latitude;
    bikenewport.longitude = evt.longitude;
});
    
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
	// IF WE HAVE COMPASS GET THE HEADING
	//
	//if (Titanium.Geolocation.hasCompass)
	//{
		//
		//  TURN OFF ANNOYING COMPASS INTERFERENCE MESSAGE
		//
		Titanium.Geolocation.showCalibration = false;

		//
		// SET THE HEADING FILTER (THIS IS IN DEGREES OF ANGLE CHANGE)
		// EVENT WON'T FIRE UNLESS ANGLE CHANGE EXCEEDS THIS VALUE
		Titanium.Geolocation.headingFilter = 90;

		//
		//  GET CURRENT HEADING - THIS FIRES ONCE
		//
		//  Jeff ** not using compass, leave in for now for reference
        /*Ti.Geolocation.getCurrentHeading(function(e)
		{
			if (e.error)
			{
				currentHeading.text = 'error: ' + e.error;
				return;
			}
			var x = e.heading.x;
			var y = e.heading.y;
			var z = e.heading.z;
			var magneticHeading = e.heading.magneticHeading;
			var accuracy = e.heading.accuracy;
			var trueHeading = e.heading.trueHeading;
			var timestamp = e.heading.timestamp;

			// jeff currentHeading.text = 'x:' + x + ' y: ' + y + ' z:' + z;
			Titanium.API.info('geo - current heading: ' + new Date(timestamp) + ' x ' + x + ' y ' + y + ' z ' + z);
		});

		//
		// EVENT LISTENER FOR COMPASS EVENTS - THIS WILL FIRE REPEATEDLY (BASED ON HEADING FILTER)
		//
		Titanium.Geolocation.addEventListener('heading',function(e)
		{
			if (e.error)
			{
				updatedHeading.text = 'error: ' + e.error;
				return;
			}

			var x = e.heading.x;
			var y = e.heading.y;
			var z = e.heading.z;
			var magneticHeading = e.heading.magneticHeading;
			var accuracy = e.heading.accuracy;
			var trueHeading = e.heading.trueHeading;
			var timestamp = e.heading.timestamp;

			Jeff updatedHeading.text = 'x:' + x + ' y: ' + y + ' z:' + z;
			updatedHeadingTime.text = 'timestamp:' + new Date(timestamp);
			updatedHeading.color = 'red';
			updatedHeadingTime.color = 'red';
			setTimeout(function()
			{
				updatedHeading.color = '#444';
				updatedHeadingTime.color = '#444';

			},100);

			Titanium.API.info('geo - heading updated: ' + new Date(timestamp) + ' x ' + x + ' y ' + y + ' z ' + z);
		});
	}
	else
	{
		Titanium.API.info("No Compass on device");
		// jeff currentHeading.text = 'No compass available';
		// jeff updatedHeading.text = 'No compass available';
	}
    */

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
                    latitudeDelta:0.5,
                    longitudeDelta:1
                    }, 
                    animate:true, 
                    regionFit:true, 
                    userLocation:true, 
                    annotations:[bikenewport,bikesandbeyond,mikesbikes,bikes101]
        });
        win.add(mapView);
        
        var search = Titanium.UI.createSearchBar({
            barColor:'#000',
            showCancel:true,
            height:43,
            top:0
        });

        win.add(search);
        
        mapView.addEventListener('click',function(evt)
        {
            if (evt.annotation.myid == 1 && evt.clicksource == 'rightButton')  // myid 1 == Bike Newport
            {
                /*var w = Titanium.UI.createWindow({
                    url:'bikenewport.html'
                });
                w.open({animated:true}); */
                shopWin = Titanium.UI.createWindow({
                    url:'../shops/bikenewport.js',
                    title:'Shop Info'
                });
                shopWin.tabBarHidden = 'true';
                Titanium.UI.currentTab.open(shopWin,{animated:true});
            }
            else if (evt.annotation.myid == 2 && evt.clicksource == 'rightButton')  // myid 2 == Bikes and beyond
            {
                /*var w = Titanium.UI.createWindow({
                    url:'bikenewport.html'
                });
                w.open({animated:true}); */
                shopWin = Titanium.UI.createWindow({
                    url:'../shops/bikesandbeyond.js',
                    title:'Shop Info'
                });
                shopWin.tabBarHidden = 'true';
                Titanium.UI.currentTab.open(shopWin,{animated:true});
            }
            else if (evt.annotation.myid == 3 && evt.clicksource == 'rightButton')  // myid 3 == mikes bikes
            {
                /*var w = Titanium.UI.createWindow({
                    url:'bikenewport.html'
                });
                w.open({animated:true}); */
                shopWin = Titanium.UI.createWindow({
                    url:'../shops/mikesbikes.js',
                    title:'Shop Info'
                });
                shopWin.tabBarHidden = 'true';
                Titanium.UI.currentTab.open(shopWin,{animated:true});
            }
            else if (evt.annotation.myid == 4 && evt.clicksource == 'rightButton')  // myid 4 == Bike 101
            {
                /*var w = Titanium.UI.createWindow({
                    url:'bikenewport.html'
                });
                w.open({animated:true}); */
                shopWin = Titanium.UI.createWindow({
                    url:'../shops/bikes101.js',
                    title:'Shop Info'
                });
                shopWin.tabBarHidden = 'true';
                Titanium.UI.currentTab.open(shopWin,{animated:true});
            }
            
            Ti.API.info('you clicked on -'+evt.annotation.myid+'- with click source = '+evt.clicksource);
        });

        /* ** Don't need this Jeff
        var longi = e.coords.longitude;
        var lati = e.coords.latitude;
        var altitude = e.coords.altitude;
        var heading = e.coords.heading;
        var accuracy = e.coords.accuracy;
        var speed = e.coords.speed;
        var timestamp = e.coords.timestamp;
        var altitudeAccuracy = e.coords.altitudeAccuracy;
        Ti.API.info('speed ' + speed);
        Ti.API.info('Get Current Position:'+e.coords.longitude+'  Lati:'+e.coords.latitude);
        */
    });
    
	//
	// EVENT LISTENER FOR GEO EVENTS - THIS WILL FIRE REPEATEDLY (BASED ON DISTANCE FILTER)
	//
	Titanium.Geolocation.addEventListener('location',function(e)
	{
		if (!e.success || e.error)
		{
			updatedLocation.text = 'error:' + JSON.stringify(e.error);
			updatedLatitude.text = '';
			updatedLocationAccuracy.text = '';
			updatedLocationTime.text = '';
			return;
		}

		var myLongitude = e.coords.longitude;
		var myLatitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;

		//Titanium.Geolocation.distanceFilter = 100; //changed after first location event

		/* Jeff updatedLocation.text = 'long:' + longitude;
		updatedLatitude.text = 'lat: '+ latitude;
		updatedLocationAccuracy.text = 'accuracy:' + accuracy;
		updatedLocationTime.text = 'timestamp:' +new Date(timestamp);

		updatedLatitude.color = 'red';
		updatedLocation.color = 'red';
		updatedLocationAccuracy.color = 'red';
		updatedLocationTime.color = 'red';
		setTimeout(function()
		{
			updatedLatitude.color = '#444';
			updatedLocation.color = '#444';
			updatedLocationAccuracy.color = '#444';
			updatedLocationTime.color = '#444';

		},100);  */

		// reverse geo
/* Jeff		Titanium.Geolocation.reverseGeocoder(latitude,longitude,function(evt)
		{
			if (evt.success) {
				var places = evt.places;
				if (places && places.length) {
					reverseGeo.text = places[0].address;
                    Ti.API.info('Places: '+places);
				} else {
					reverseGeo.text = "No address found";
				}
				Ti.API.debug("reverse geolocation result = "+JSON.stringify(evt));
			}
			else {
				Ti.UI.createAlertDialog({
					title:'Reverse geo error',
					message:evt.error
				}).show();
			}
		});


		Titanium.API.info('geo - location updated: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);*/
	});
}

//Ti.API.info('Get Current Position **2** :'+longi+'  Lati:'+lati);

/* Jeff var addr = "2065 Hamilton Avenue San Jose California 95125";

Titanium.Geolocation.forwardGeocoder(addr,function(evt)
{
	Ti.API.info('in forward ');
	forwardGeo.text = "lat:"+evt.latitude+", long:"+evt.longitude;
	Titanium.Geolocation.reverseGeocoder(evt.latitude,evt.longitude,function(evt)
	{
		if (evt.success) {
			var text = "";
			for (var i = 0; i < evt.places.length; i++) {
				text += "" + i + ") " + evt.places[i].address + "\n";
			}
			Ti.API.info('Reversed forward: '+text);
		}
		else {
			Ti.UI.createAlertDialog({
				title:'Forward geo error',
				message:evt.error
			}).show();
		}
	});
});  */
 