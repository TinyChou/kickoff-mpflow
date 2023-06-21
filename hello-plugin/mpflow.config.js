module.exports = {
  appId: 'appid-hello-plugin',
  app: (mode) => (mode !== "production" ? "src/miniprogram/app" : undefined),
  plugin: 'src/plugin/plugin',
  compileType: 'plugin',
  miniprogramRoot: 'miniprogram',
  pluginRoot: 'plugin',
  plugins: [
      "@mpflow/plugin-babel",
      "@mpflow/plugin-typescript",
      "@mpflow/plugin-css",
      "@mpflow/plugin-unit-test",
      "@mpflow/plugin-e2e-test"
  ],
  settings: {
		urlCheck: true,
		es6: false,
		enhance: false,
		postcss: false,
		preloadBackgroundData: false,
		minified: false,
		newFeature: false,
		coverView: true,
		nodeModules: false,
		autoAudits: false,
		showShadowRootInWxmlPanel: true,
		scopeDataCheck: false,
		uglifyFileName: false,
		checkInvalidKey: true,
		checkSiteMap: true,
		uploadWithSourceMap: true,
		compileHotReLoad: false,
		babelSetting: {
			ignore: [],
			disablePlugins: [],
			outputPath: "",
		},
		useIsolateContext: true,
		useCompilerModule: false,
		userConfirmedUseCompilerModuleSwitch: false,
	},
}
