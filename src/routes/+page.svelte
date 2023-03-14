<!-- src/routes/index.svelte -->
<script lang="ts">
	export let data;

	const { toDos } = data;
</script>

<div class="p-5 text-center space-y-5">
	<h1 class="text-3xl">List of Todo's</h1>
	<p class="text-gray-500">
		Taken from the <a href="https://jsonplaceholder.typicode.com/">JSON placeholder API</a>
	</p>
</div>
<div class="px-5 space-y-5">
	{#each toDos as toDo}
		<p>
			<a href={'/' + toDo.id}>{toDo.title}</a>
		</p>
	{/each}
</div>
