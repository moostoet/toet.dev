<script lang="ts">
    import Icon from "mdi-svelte";
    export let skill: {
        title: string;
        experience: string;
        description: string;
        icons: {
            path: string;
            iconColor: string;
        }[];
        iconSize: Number;
    };
</script>

<div class="flex flex-col gap-2">
    <div class="flex flex-row gap-2 items-center">
        <div class="flex items-center flex-row gap-1 border-2 border-button-selected rounded-md w-max">
            {#each skill.icons as icon}
                <Icon
                    path={icon.path}
                    size={skill.iconSize}
                    color={icon.iconColor}
                />
            {/each}
        </div>
        <p class="text-sm font-bold uppercase">
            {skill.title}
        </p>
        <p class="text-xs opacity-50 font-light">
            {skill.experience}
        </p>
    </div>
    <p class="text-sm font-medium opacity-75">
        {skill.description}
    </p>
</div>
