// create image view data object

/* var imageView = Titanium.UI.createImageView({
    image:'../images/BikeRtOrCoast-a.png',
    width:320,
    height:1455,
    canScale:true
    });
*/
// view.add(image);
//Titanium.UI.currentWindow.add(imageView);
/*
var view = Titanium.UI.createView({
   borderRadius:10,
   backgroundImage:'../images/BikeRtOrCoast-a.png',
   width:320,
   height:1455
});

Titanium.UI.currentWindow.add(view);
*/

var win = Titanium.UI.currentWindow;
 
var scrollView = Ti.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true,
    maxZoomScale:3.0,
    minZoomScale:0.8
});
 
var imageView = Titanium.UI.createImageView({
image:'../images/rtprofile.png', 
width:884, 
height:1117, 
top:10 
});

scrollView.add(imageView);
 
win.add(scrollView);