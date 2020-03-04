console.log('hello world');

if (module.hot) {
	module.hot.accept();
	module.hot.dispose(() => console.log('module disposed'));
}
console.log('it works just perfect');
