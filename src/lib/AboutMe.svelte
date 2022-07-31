<script>
    import { quintOut } from "svelte/easing";
    import { fly } from "svelte/transition";
    import Icon from "mdi-svelte";
    import {
        mdiLanguageJavascript,
        mdiLanguageTypescript,
        mdiVuejs,
        mdiAngular,
        mdiNodejs
    } from "@mdi/js";
    import SkillProgress from "./SkillProgress.svelte";
    import MySkills from "./reusables/MySkills.svelte";

    let myDateOfBirth = new Date(2002, 3, 1);
    let currentDate = new Date();
    let myAge = currentDate.getFullYear() - myDateOfBirth.getFullYear();

    let currentSlide = 0;

    let skillLevels = {
        javaScript: {
            progress: 0.8,
        },
        typeScript: {
            progress: 0.75,
        },
        vue: {
            progress: 0.85,
        },
        angular: {
            progress: 0.7,
        },
        nodeJs: {
            progress: 0.65,
        }
    };
</script>

<div
    class="transition-container bg-container-dark/70 backdrop-blur-md p-2 rounded-lg shadow-md shadow-shadow"
    in:fly={{ duration: 800, easing: quintOut, x: 200 }}
    out:fly={{ duration: 800, easing: quintOut, x: -200 }}
>
    {#if currentSlide === 0}
        <div
            in:fly={{ duration: 800, easing: quintOut, x: 200 }}
            out:fly={{ duration: 800, easing: quintOut, x: -200 }}
        >
            <header
                class="w-full flex flex-row p-3 items-center justify-center gap-3 border rounded-lg border-button-selected"
            >
                <p class="text-3xl font-bold">Moos Toet</p>
                <p class="opacity-50">Full-stack web developer</p>
            </header>
            <main
                class="flex flex-col items-center md:flex-row md:items-start gap-3 p-3"
            >
                <div class="flex-col flex-1 relative">
                    <p class="uppercase font-bold">Something about me</p>
                    <p class="max-w-prose text-sm opacity-75">
                        Hey there! Thanks for visiting my page. I'm a full-stack
                        web developer based in the Netherlands. I'm always on
                        the lookout for new ways to challenge myself and improve
                        my skills.
                    </p>
                    <p class="max-w-prose text-sm opacity-75 mt-5">
                        I have been programming seriously since 2018 - with me
                        doing it as a hobby before that. Along with me studying
                        Software Engineering at Hogeschool Leiden, I am
                        constantly improving my skills and insights in the field
                        of web development.
                    </p>
                    <p class="max-w-prose text-sm opacity-75 mt-5">
                        Want to know more about my skills?
                    </p>
                    <div class="mt-5">
                        <button
                            class="border max-w-max px-4 py-1 uppercase text-xs font-bold rounded-md hover:bg-button-selected transition"
                            on:click={() => {
                                currentSlide = 1;
                            }}
                        >
                            Click here
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src="/profile.jpg"
                        class="w-64 h-64 object-cover rounded-md shadow-lg shadow-shadow"
                        alt=""
                    />
                </div>
            </main>
        </div>
    {:else if currentSlide === 1}
        <div
            in:fly={{ duration: 800, easing: quintOut, x: 200 }}
            out:fly={{ duration: 800, easing: quintOut, x: -200 }}
        >
            <header
                class="w-full flex flex-row p-3 items-center justify-center gap-3 border rounded-lg border-button-selected"
            >
                <p class="text-3xl font-bold">My Skills</p>
                <p class="opacity-50">Per language / framework</p>
            </header>
            <main class="p-3">
                <MySkills/>
                <div class="mt-5">
                    <button
                    class="border max-w-max px-4 py-1 uppercase text-xs font-bold rounded-md hover:bg-button-selected transition"
                    on:click={() => {
                        currentSlide = 0;
                    }}
                >
                    Go back
                </button>
                </div>
            </main>
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
