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
	<h1><a href="/"><span class="white-text">Ø</span>yvind Malin</a></h1>
</header>
{@render children()}
