var keystone = require('keystone');
var Types = keystone.Field.Types;

var Videos = new keystone.List('Videos', {
	map: { name: 'videoTitle' },
	autokey: { path: 'slug', from: 'videoTitle', unique: true }
});

Videos.add({
    videoTitle: { type: String, required: true },
	videoUrl: { type: Types.Url },
    videoData: { type: Types.Embedly, from: 'videoUrl' }
});

Videos.register();