<script lang="ts">
    export let pane: {
        title: string;
        year: Number;
        imageUrl: string;
        description: string;
        tags: string[];
    };
</script>

<div class="h-full">
    <div class="h-full flex flex-col gap-3">
        <img
            src={pane.imageUrl}
            class="object-cover border-indigo-500 border-2 rounded-md hover:scale-[1.02] shadow-button-selected shadow-md transition-transform h-64 md:h-40 xl:h-38"
            alt="Project"
        />
        <div class="flex flex-col gap-3">
            <div class="flex flex-row font-medium tracking-wide items-center">
                <p class="flex-1 opacity-75">{pane.title}</p>
                <p class="text-xs bg-button-selected p-1 rounded-md">
                    {pane.year}
                </p>
            </div>
            <div>
                <p class="max-w-prose text-sm font-light">
                    {pane.description}
                </p>
            </div>
            <div class="flex flex-row flex-wrap items-center gap-2">
                {#each pane.tags as tag}
                    <p class="text-xs border border-indigo-500 p-1 hover:bg-indigo-500 transition rounded-md">{tag}</p>
                {/each}
            </div>
        </div>
    </div>
</div>
<!-- <div>
    <div class="flex flex-row flex-wrap items-center gap-2">
        {#each pane.tags as tag}
            <p class="text-xs bg-indigo-500 p-1 rounded-md">{tag}</p>
        {/each}
    </div>
</div> -->
