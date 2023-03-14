<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="h-screen flex justify-center items-center">
	<h1>{$page.error?.message}</h1>
</div>
