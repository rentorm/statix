module.exports.tasks = {

	/**
	 * Browserify
	 * https://github.com/jmreidy/grunt-browserify
	 * Grutn task for node-browserify – allows CommonJS-style JS code and packages it for use in the browser
	 */
	browserify: {
		dev: {
			src: ['<%=config.js.srcFile%>'],
			dest: '<%=config.js.distDir%><%=config.js.distFile%>',
			options : {
				transform: [
					[
						'uglifyify',
						{
							"global" : true
						}
					]
				],
				browserifyOptions : {
					debug: true
				},
				watch: true
			}
		},
		prod: {
			src: ['<%=config.js.srcFile%>'],
			dest: '<%=config.js.distDir%><%=config.js.distFile%>',
			options : {
				transform: [
					[
						'uglifyify',
						{
							"global" : true
						}
					]
				],
			}
		}
	},


	/**
	 * Shimly
	 * https://github.com/nicbell/shimly
	 * Load in a base set of JS shims for use in a project
	 */
	shimly: {
		// things you would like to shim (an array of items from the list above)
		shim: ['Array.forEach', 'Array.filter', 'Array.map', 'Function.bind', 'EventListener'],

		// output location (relative to your grunt.js file location)
		dest: '<%=config.srcDir%>/js/helpers/shims.js',

		// minify the output (true or false)
		minify: false
	}

};
