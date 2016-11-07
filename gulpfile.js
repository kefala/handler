var gulp = require('gulp');
var webpack = require("webpack");

var PROD = JSON.parse(process.env.PROD_ENV || '0');


var config = {
	entry: './src/main.js',
	devtool: 'source-map',
	output: {
		path: './server/public/',
		filename: 'handler.js'
	},
	plugins: PROD ? [
	new webpack.optimize.UglifyJsPlugin({
		compress: { warnings: false }
	})
	] : []
};

gulp.task('default', function(done) {
	webpack(config).run(function(err, stats) {
		if(err) {
			console.log('Error', err);
		}
		else {
			console.log(stats.toString());
		}
		done();
	});
});

gulp.task('watch', function(done) {
	gulp.watch('src/**/*.js', ['default']);
});