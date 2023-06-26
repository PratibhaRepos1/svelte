import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world Welcome to Earth',
		age: 30
	}
});

export default app;