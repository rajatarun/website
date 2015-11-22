(function(){
	var app = angular.module("store",[]);

	var css1 = {
		boot:"bootstrap.min.css",
		my:"mystyle.css"
	};
	var gem = [
		{
			name:'tarun', 
			age:22,
			image:"mypic.jpg"
		},
		{
			name:'raja',
			age:22,
			image:"mypic.jpg"
		}
		];
	var head = {
		heading:"tarun blog"
	}
	var nav =[
		{ 
			name :"Home",
			url : "index.html"

		},
		{
			name:"About",
			url : "about.html"
		},
		{
			name:"Photography",
			url : "photo.html"
		},
		{
			name:"Contact",
			url : "contact.html"
		}
		];
	var footnav =[
		{ 
			name :"Home",
			url : "index.html"

		},
		{
			name:"About",
			url : "about.html"
		},
		{
			name:"Photography",
			url : "photo.html"
		},
		{
			name:"Contact",
			url : "contact.html"
		}
		];
	app.controller("NavController",function(){
		this.product = nav;
	});
	app.controller("FooterNavController",function(){
		this.product = footnav;
	});
	app.controller("HeadingController",function(){
		this.product = head;
	});
	app.controller("CssController",function(){
		this.product = css1;
	});
	app.controller("StoreController",function(){
		this.product = gem;
	});

})();