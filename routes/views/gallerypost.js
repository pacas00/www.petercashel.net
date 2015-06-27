var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'gallery';
	locals.filters = {
		id: req.params.id
	};
	
	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.findOne({ key: locals.filters.id });
	
	// Render the view
	view.render('gallery');
	
};
