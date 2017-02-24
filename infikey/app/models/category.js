const mongoose = require('mongoose');

// Category Schema
const categorySchema = mongoose.Schema({
	categoryName:{
		type: String,
		required: true
	},
	
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Category = module.exports = mongoose.model('Category', categorySchema);

// Get Categorys
module.exports.getCategorys = (callback, limit) => {
	Category.find(callback).limit(limit);
}

// Get Category
module.exports.getCategoryById = (id, callback) => {
	Category.findById(id, callback);
}

// Add Category
module.exports.addCategory = (category, callback) => {
	Category.create(category, callback);
}

// Update Category
module.exports.updateCategory = (id, category, options, callback) => {
	var query = {_id: id};
	var update = {
		categoryName: category.categoryName,
		
	}
	Category.findOneAndUpdate(query, update, options, callback);
}

// Delete Category
module.exports.Category = (id, callback) => {
	var query = {_id: id};
	Category.remove(query, callback);
}
