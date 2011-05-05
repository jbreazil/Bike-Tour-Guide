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

var view = Titanium.UI.createView({
   borderRadius:10,
   backgroundImage:'../images/BikeRtOrCoast-a.png',
   width:320,
   height:1455
});

Titanium.UI.currentWindow.add(view);
