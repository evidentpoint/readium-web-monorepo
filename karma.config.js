const DEBUG = !!process.env.DEBUG

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    autoWatch: false,
    singleRun: DEBUG ? false : true,

    browsers: DEBUG ? [] : ['ChromeHeadlessWithSizeDefined'],
    customLaunchers: {
      ChromeHeadlessWithSizeDefined: {
        base: 'ChromeHeadless',
        flags: ['--window-size=1024,768', '--no-sandbox'],
      },
    },

    files: [
      { pattern: 'packages/!(node_modules)/test/**/*.spec.ts', watched: false },
      {
        pattern: 'static/**/*.*',
        watched: false,
        included: false,
        served: true,
        nocache: false,
      },
    ],
    proxies: {
      '/static': '/base/static',
    },

    preprocessors: {
      'packages/!(node_modules)/test/**/*.spec.ts': ['webpack'],
    },

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: {
        mainFields: ['source', 'module', 'main'],
        extensions: ['.ts', '.js', '.json'],
      },
      module: {
        rules: DEBUG
          ? [
              {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { configFile: 'tsconfig.json' },
              },
            ]
          : [
              {
                test: /\.ts$/,
                loader: '@jsdevtools/coverage-istanbul-loader',
                exclude: /node_modules|\.spec\.ts$/,
              },
              {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { configFile: 'tsconfig.json' },
              },
            ],
      },
    },
    webpackMiddleware: {
      stats: 'errors-only',
    },

    reporters: ['mocha', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: ['text', 'html', 'json', 'lcovonly'],
      dir: 'coverage',
      fixWebpackSourcePaths: true,
      combineBrowserReports: true,
      'report-config': {
        html: {
          subdir: 'html',
        },
      },
      thresholds: {
        emitWarning: true,
        global: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100,
        },
      },
    },
  })
}
