<script>
	import ContactCard from "./ContactCard.svelte";
	import AddressCard from "./AddressCard.svelte";

	export let name;
	export let personName;
	export let age;
	let street = "";
	let shortDescription = "";

	let count = 100;
	let title = '';
	let desc = '';


	$: uppercaseName = name.toUpperCase();
	$: count = count * 100;
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
<br>
<h4>This is count: {count}</h4>
<hr>
<input type="text" bind:value="{personName}">
<input type="text" bind:value="{street}">
<textarea rows=3 bind:value={shortDescription}></textarea>
<AddressCard personName="{personName}" street="{street}"
 shortDescription="{shortDescription}" />
<!-- <button on:click={changeName}>Change Name</button> -->


