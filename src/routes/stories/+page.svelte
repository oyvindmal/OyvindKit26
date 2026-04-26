<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
   
</script>
<h1>Stories</h1>
<ul>
    	{#each data.page.data as item}
		<li><a href="/stories/{item.documentId}">{item.Title}</a></li>
	{/each}
</ul>