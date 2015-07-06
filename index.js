var exec = require('child_process').exec,
	forgeScriptPath = __dirname + '/forge.sh';


module.exports = function convert(src, dst, options, callback) {
	if(typeof options === 'function') {
		callback = options;
		options = {};
	}

	var command = 'fontforge -script "' + forgeScriptPath + '" "'+src+'" "'+dst+'"'

	exec(command, function (error, stdout, stderr) {
		callback(error);
    });
}
