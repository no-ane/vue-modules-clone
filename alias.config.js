const path = require('path');

module.exports = {
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/'),
			'@src': path.resolve(__dirname, 'src'),
			'@views': path.resolve(__dirname, 'src/views'),
			'@router': path.resolve(__dirname, 'src/router'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@api': path.resolve(__dirname, 'src/api'),
			'@env': path.resolve(__dirname, 'env'),
			'@device': path.resolve(__dirname, 'src/device'),
			'@connect': path.resolve(__dirname, 'src/connect'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@service': path.resolve(__dirname, 'src/service'),
			'@config': path.resolve(__dirname, 'src/config'),
			'@common': path.resolve(__dirname, 'src/common'),
			'@static': path.resolve(__dirname, 'src/static'),
			'@public': path.resolve(__dirname, 'public'),
		}
	}
};
