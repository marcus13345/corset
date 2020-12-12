const { Collexion } = require('collexion');

const system = new Collexion({
	World: {
		Code: require('./../world'),
		Data: {
			test: 5
		}
	}
})

// system.