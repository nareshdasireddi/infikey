const mongoose = require('mongoose');
Page =require('../models/page');
// Book Schema
const Fb_sbHeadSchema = mongoose.Schema({
	Fb_sbHeading:{
		type: String,
		required: true
	},
	Fb_sbDiscription:{
		type: String,
		required: true
	},

	page: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }],

	create_date:{
		type: Date,
		default: Date.now
	}
});

const Fb_sbHead = module.exports = mongoose.model('Fb_sbHead', Fb_sbHeadSchema);

// Get Books
module.exports.getFb_sbHeads = (callback, limit) => {
	Fb_sbHead.find(callback).limit(limit);
}

// Get Book
module.exports.getFb_sbHeadByPageId = (id, callback) => {
	console.log('at model',id);
	Fb_sbHead.find({page:id}, callback);
}

// Add Book
module.exports.addFb_sbHead= (fb_sbH, callback) => {
	
	Fb_sbHead.create(fb_sbH, callback);
}

// Update Book
module.exports.updateFb_sbHeading = (id, fb_sbH, options, callback) => {
	var query = {_id: id};
	var update = {
		Fb_sbHeading: fb_sbH.Fb_sbHeading,
		Fb_sbDiscription:fb_sbH.Fb_sbDiscription,
		page:fb_sbH.page
	}
	Fb_sbHead.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.Fb_sbHeadRemov = (id, callback) => {
	var query = {_id: id};
	Fb_sbHead.remove(query, callback);
}
