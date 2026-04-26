<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

</script>
<a href="/stories">Tilbake</a>
<h1>{ data.page.data.Title}</h1>
<p>{data.page.data.Beskrivelse}</p>
<div class="stories">
      	{#each data.page.data.Media as item}
		<div class="storyitem">
            {#if item.File.formats}
                <img src="{data.base + item.File.formats.medium.url}" alt="">
            {/if}
            {#if !item.File.formats}
                
                <video class="slide-video" autoplay="true" muted="true" src="{data.base + item.File.url}"></video>
            {/if}
        </div>
	{/each}
</div>