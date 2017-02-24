const mongoose = require('mongoose');
Category =require('../models/category');
// Book Schema
const pageSchema = mongoose.Schema({
	pageName:{
		type: String,
		required: true
	},
	category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],

	create_date:{
		type: Date,
		default: Date.now
	}
});

const Page = module.exports = mongoose.model('Page', pageSchema);

// Get Books
module.exports.getPages = (callback, limit) => {
	Page.find(callback).limit(limit);
}

// Get Book
module.exports.getPageById = (id, callback) => {
	Page.findById(id, callback);
}

// Add Book
module.exports.addPage = (page, callback) => {
	Page.create(page, callback);
}

// Update Book
module.exports.updatePage = (id, page, options, callback) => {
	var query = {_id: id};
	var update = {
		pageName: page.pageName,
		
	}
	Page.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.Page = (id, callback) => {
	var query = {_id: id};
	Page.remove(query, callback);
}
