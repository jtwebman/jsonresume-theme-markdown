var fs = require("fs");
var Handlebars = require("handlebars");

Handlebars.registerHelper('commaSeparated', function(keywords) {
	var text = '';
	if (Array.isArray(keywords)) {
		for (i = 0; i < keywords.length; i++) {
			text += keywords[i];
			if (i < keywords.length - 1) text += ', ';
		}
	} else {
		text = keywords.tostring();
	}
	return text;
});

function render(resume) {
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
	return Handlebars.compile(template)({
		resume: resume
	});
}

module.exports = {
	render: render
};
