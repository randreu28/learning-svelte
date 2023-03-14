<script lang="ts">
	export let data;

	let { toDo } = data;
</script>

<div class="flex  flex-col gap-2">
	<p>{toDo.id}) {toDo.title}</p>
	{#if toDo.completed}
		<p class="text-green-500">Completed!</p>
	{:else}
		<p class="text-red-500">Not completed</p>
	{/if}

	<p>User ID: {toDo.userId}</p>
</div>
