<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import stil from '$lib/assets/style.css'
    import { link } from 'fs';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href={stil} />
</svelte:head>
<h1>JAHA</h1>
{@render children()}
