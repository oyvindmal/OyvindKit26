<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/style.css'
    import { link } from 'fs';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	
</svelte:head>
<header>
	<h1>Øyvind Malin</h1>
</header>
{@render children()}
