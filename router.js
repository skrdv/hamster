Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/', {
	name: 'Home',
	action: function () {
	    if (this.ready()){
	    	document.title = "Dmitriy Skudarnov";
	      	this.render('home');
	    }
	}
});

Router.route('/notes', {
	name: 'Notes',
	waitOn: function(){
		return Meteor.subscribe("getNotes");
	},
	action: function () {
	    if (this.ready()){
	    	document.title = "Notes";
	      	this.render('notes');
	    }
	}
});

