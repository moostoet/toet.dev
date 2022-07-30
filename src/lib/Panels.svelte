<script>
    import { quintOut } from "svelte/easing";
    import { fly } from "svelte/transition";

    import MyProjects from "./MyProjects.svelte";
    import AboutMe from "./AboutMe.svelte";
    import MySocials from "./MySocials.svelte";

    export let currentComponent;
</script>

<div class="transition-container w-screen md:w-1/2 ">
    {#if currentComponent == 0}
        <div>
            <AboutMe/>
        </div>
    {:else if currentComponent == 1}
        <div>
            <MyProjects/>
        </div>
    {:else if currentComponent == 2}
        <div>
            <MySocials/>
        </div>
    {/if}
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
