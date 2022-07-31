<script>
    import { quintOut } from "svelte/easing";
    import Icon from "mdi-svelte";
    import { skillDataBackEnd } from "../data/skillData";
    import Skill from "./Skill.svelte";
    import { mdiLanguageJavascript, mdiLanguageTypescript } from "@mdi/js";
    import { fly } from "svelte/transition";
</script>

<div
    in:fly={{ duration: 800, easing: quintOut, x: 200 }}
    out:fly={{ duration: 800, easing: quintOut, x: -200 }}
>
    <div class="flex flex-col gap-2 p-3">
        <div>
            <p class="font-bold uppercase">Backend skills</p>
        </div>
        <div class="flex flex-col gap-8">
            {#each skillDataBackEnd.skills as skill}
                <Skill {skill} />
            {/each}
        </div>
    </div>
</div>
