<script>
    import { quintOut } from "svelte/easing";
    import { fly } from "svelte/transition";
</script>

<div
    class="bg-container-dark/70 backdrop-blur-md p-5 rounded-lg shadow-md shadow-shadow"
    in:fly={{ duration: 800, easing: quintOut, x: 200 }}
    out:fly={{ duration: 800, easing: quintOut, x: -200 }}
>
    My Projects works!
</div>
