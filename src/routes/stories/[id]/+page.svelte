<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    console.log(data);
    console.log(data.page.data);
</script>
<a href="/stories">Tilbake</a>
<h1>{ data.page.data.Title}</h1>
<p>{data.page.data.Beskrivelse}</p>