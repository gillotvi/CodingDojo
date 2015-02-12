// Karma configuration
// Generated on Sun Oct 20 2013 07:28:56 GMT+0200 (CEST)

module.exports = function (config) {
    
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../../',
        // frameworks to use
        frameworks: ['jasmine'],
        plugins: [
            'karma-coverage',
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
			'karma-phantomjs-launcher',
            'karma-jasmine'
			],
        // list of files / patterns to load in the browser
        files: ["KataRomanNumerals/app/main.js",
               "KataRomanNumerals/app/tests/**/*.js"],
        preprocessors: {
            'KataRomanNumerals/app/main.js': 'coverage'
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit', 'coverage'],
        coverageReporter: {
            type: ['cobertura'],
            dir: 'KataRomanNumerals/karma/results/'
        },
        junitReporter: {
            outputFile: 'KataRomanNumerals/karma/results/test-results.xml',
            suite: ''
        },
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],
    });
};