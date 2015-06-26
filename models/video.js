var keystone = require('keystone');
var Types = keystone.Field.Types;

var Videos = new keystone.List('Videos', {
	map: { name: 'videoUrl' }
});

Videos.add({
    videoUrl: { type: Types.Url, required: true },
    videoData: { type: Types.Embedly, from: 'videoUrl' }
});

Videos.add({
	autokey: { path: 'slug', from: this.videoData.title, unique: true }
});

Videos.schema.virtual('videoHTML').get(function() {
	return this.videoData.html;
});

Videos.schema.virtual('videoTitle').get(function() {
	return this.videoData.title;
});

Videos.schema.virtual('videoDescription').get(function() {
	return this.videoData.description;
});

Videos.schema.virtual('videoAuthorUrl').get(function() {
	return this.videoData.authorUrl;
});

Videos.register();