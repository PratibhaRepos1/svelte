<script>
	import ContactCard from "./ContactCard.svelte";

	export let name;
	export let age;
	let title = '';
	let desc = '';


	$: uppercaseName = name.toUpperCase();
	$: console.log(name);

	$: if(name === 'Steve') {
		age = 50;
	}

	function incrementAge() {
		age +=  5;
	}

	function changeName() {
		name = 'Steve';
	}
</script>

<style>
	h1 {
		color: purple;
	}
	input {
		height: 30px;
		widows: 50px;
	}
</style>

<h1>Hello {uppercaseName}! My age is {age}</h1>
<button on:click="{incrementAge}">Change Age</button>
<br>
<!-- <inut type="text" value={name} on:input="{name}" /> -->

<input type="text" bind:value="{name}" ><br>
<input type="text" bind:value="{title}" ><br>
<textarea rows="3" bind:value="{desc}" ></textarea>
<br>
<ContactCard username='{name}' jobTitle='{title}' shortDesc='{desc}' />
<!-- <button on:click={changeName}>Change Name</button> -->


