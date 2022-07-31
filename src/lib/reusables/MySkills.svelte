<script>
    import FrontEnd from "./FrontEnd.svelte";
    import BackEnd from "./BackEnd.svelte";
    let currentSkill = 0;

    let buttonStates = [
        {
            buttonId: 0,
            state: 1,
        },
        {
            buttonId: 1,
            state: 0,
        },
    ];
</script>

<div>
    <div class="flex flex-row items-center gap-3 px-2">
        <button
            class="flex-1 {buttonStates[0].state === 1
                ? 'bg-indigo-500'
                : 'bg-transparent'} uppercase font-bold p-1 rounded-md transition hover:bg-indigo-500"
            on:click={() => {
                currentSkill = 0;
                buttonStates[0].state = 1;
                buttonStates[1].state = 0;
            }}
        >
            Frontend
        </button>
        <button
            class="flex-1 {buttonStates[1].state === 1
                ? 'bg-indigo-500'
                : 'bg-transparent'} uppercase font-bold p-1 rounded-md transition hover:bg-indigo-500"
            on:click={() => {
                currentSkill = 1;
                buttonStates[1].state = 1;
                buttonStates[0].state = 0;
            }}
        >
            Backend
        </button>
    </div>
    <div class="transition-container">
        {#if currentSkill === 0}
            <div>
                <FrontEnd />
            </div>
        {:else if currentSkill === 1}
            <div>
                <BackEnd />
            </div>
        {/if}
    </div>
</div>

<style>
    .transition-container {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }

    .transition-container > * {
        grid-row: 1;
        grid-column: 1;
    }
</style>
