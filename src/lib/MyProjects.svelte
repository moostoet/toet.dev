<script>
    import { quintOut } from "svelte/easing";
    import { fly } from "svelte/transition";

    import PaneList from "./PaneList.svelte";
</script>

<div
    class="bg-container-dark/70 backdrop-blur-md p-5 rounded-lg shadow-md shadow-shadow"
    in:fly={{ duration: 800, easing: quintOut, x: 200 }}
    out:fly={{ duration: 800, easing: quintOut, x: -200 }}
>
    <div>
        <header
            class="w-full flex flex-row p-3 items-center justify-center gap-3 border rounded-lg border-button-selected"
        >
            <p class="text-3xl font-bold">Projects</p>
            <p class="opacity-50">That I've worked on</p>
        </header>
        <main class="flex flex-col items-center md:flex-row md:items-start gap-3 p-3">
            <div>
                <p class="uppercase font-bold">My projects  </p>
                <PaneList/>
            </div>
        </main>
    </div>
</div>
