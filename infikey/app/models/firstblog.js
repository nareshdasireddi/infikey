const mongoose = require('mongoose');
Page =require('../models/page');
// Book Schema
const FirstBlogSchema = mongoose.Schema({
	fbHeading:{
		type: String,
		required: true
	},
	fbDiscription:{
		type: String,
		required: true
	},

	page: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }],

	create_date:{
		type: Date,
		default: Date.now
	}
});

const FirstBlog = module.exports = mongoose.model('FirstBlog', FirstBlogSchema);

// Get Books
module.exports.getFirstBlogs = (callback, limit) => {
	FirstBlog.find(callback).limit(limit);
}

// Get Book
module.exports.getHeadByPageId = (id, callback) => {
	console.log('at model',id);
	FirstBlog.find({page:id}, callback);
}

// Add Book
module.exports.addFirstBlog= (firstBlog, callback) => {
	
	FirstBlog.create(firstBlog, callback);
}

// Update Book
module.exports.updateFBHeading = (id, fbh, options, callback) => {
	var query = {_id: id};
	var update = {
		fbHeading: fbh.fbHeading,
		fbDiscription:fbh.fbDiscription,
		page:fbh.page
	}
	FirstBlog.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.FirstBlog = (id, callback) => {
	var query = {_id: id};
	FirstBlog.remove(query, callback);
}
