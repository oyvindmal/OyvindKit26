<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/style.css'
    import { link } from 'fs';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	
</svelte:head>
<h1>JAHA</h1>
{@render children()}
