var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'gallery';
	locals.filters = {
		gallerypost: req.params.gallerypost
	};
	//Does this need to be here to work?
	locals.data = {
		galleryposts: []
	};
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Gallery').model.findOne({
			key: locals.filters.gallerypost
		});
		
		q.exec(function(err, result) {
			locals.data.gallerypost = result;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('gallerypost');
	
};
