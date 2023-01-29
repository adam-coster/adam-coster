const os = require('os');

function readPackage(pkg) {
	// The podcast package only works on Windows.
	if (pkg.name === '@adam-coster/podcast-setup' && os.platform() !== 'win32') {
		pkg.dependencies = {};
	}
	return pkg;
}

module.exports = {
	hooks: {
		readPackage,
	},
};
