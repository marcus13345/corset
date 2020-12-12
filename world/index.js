const modules = require('../test/modules');
const { Item } = require('collexion');

module.exports = class World extends Item {
	ready() {
		console.log('ready', JSON.stringify(this, null, 2));
	}
}