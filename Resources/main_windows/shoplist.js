// create table view data object
var data = [
	{title:'Bike Newport, Newport Or', hasChild:true, test:'../shops/bikenewport.js'},
	{title:'Bikes and Beyond, Astoria Or', hasChild:true, test:'../shops/bikesandbeyond.js'},
	{title:'Mike\'s Bikes, Cannon Beach Or', hasChild:true, test:'../shops/mikesbikes.js'},
	{title:'Bikes 101, Florence Or', hasChild:true, test:'../shops/bikes101.js'}
];

// add iphone specific tests
/*if (Titanium.Platform.name == 'iPhone OS')
{
	data.push({title:'Button Bar', hasChild:true, test:'../examples/buttonbar.js'});
	data.push({title:'Tabbed Bar', hasChild:true, test:'../examples/tabbedbar.js'});
	data.push({title:'System Buttons', hasChild:true, test:'../examples/system_buttons.js'});
	data.push({title:'Toolbar', hasChild:true, test:'../examples/toolbar.js'});
}
data.push({title:'Picker', hasChild:true, test:'../examples/picker.js'});
*/

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:'Shop Info',
            navBarHidden:false
		});
        //win.tabBarHidden = 'true';
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
