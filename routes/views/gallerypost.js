var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'gallery';
	locals.filters = {
		id: req.params.id
	};
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Gallery').model.findOne({
			key: locals.filters.id
		});
		
		q.exec(function(err, result) {
			locals.data.id = result;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('gallerypost');
	
};
