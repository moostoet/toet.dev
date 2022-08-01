<script lang="ts">
    import Icon from "mdi-svelte";
    import {
        mdiAccountQuestion,
        mdiFileDocumentMultiple,
        mdiCardAccountDetails,
    } from "@mdi/js";
    import { tweened } from "svelte/motion";
    import { fade, fly, slide } from "svelte/transition";
    import AboutMe from "./lib/AboutMe.svelte";
    import MyProjects from "./lib/MyProjects.svelte";
    import MySocials from "./lib/MySocials.svelte";
    import Panels from "./lib/Panels.svelte";
    import { quintOut } from "svelte/easing";

    const components = [AboutMe, MyProjects, MySocials];

    let currentComponent = -1;

    let dateToVienna = new Date(2022, 7, 14, 13, 25);
    let dateToViennaInSeconds = dateToVienna.getTime() / 1000;
    let currentDate = new Date();
    let currentDateInSeconds = currentDate.getTime() / 1000;
    let timeLeft = dateToViennaInSeconds - currentDateInSeconds;

    let timer = tweened(timeLeft);

    let isTransitioning = false;

    function startTransition(ms) {
        isTransitioning = true;
        setTimeout(() => {
            isTransitioning = false;
        }, ms);
    }

    setInterval(() => {
        if ($timer > 0) $timer--;
    }, 1000);

    $: days = Math.floor($timer / 86400);
    $: hours = Math.floor(($timer - days * 86400) / 3600);
    $: minutes = Math.floor(($timer - days * 86400 - hours * 3600) / 60);
    $: seconds = Math.floor(
        $timer - days * 86400 - hours * 3600 - minutes * 60
    );
</script>

<main>
    <div
        class="h-screen w-screen flex flex-col gap-5 items-center relative bg-gradient-to-r from-primary-dark to-black"
    >
        <div class="absolute top-5 left-5 z-50">
            <p class="text-container-hover font-medium text-md">toet.dev</p>
            <div
                class="text-container-hover text-xs flex flex-row items-center gap-1"
            >
                <p>Made with</p>
                <a href="https://svelte.dev/" target="_blank">
                    <img
                        src="/Svelte_Logo.svg"
                        alt="Svelte logo"
                        class="w-8 h-8 opacity-20 hover:opacity-100 filter transition"
                    />
                </a>
            </div>
        </div>
        <div class="flex flex-col items-center absolute top-5 right-5">
            <p class="text-xl font-bold">Time until Vienna:</p>
            <p class="text-3xl font-bold text-blue-200">
                {days}d : {hours}h : {minutes}m : {seconds}s
            </p>
        </div>
        <div
            class="sticky mt-24 top-0 z-10 w-screen bg-container-dark md:bg-container-dark/70 md:rounded-lg flex flex-col md:flex-row md:w-1/2 divide-y md:divide-x md:divide-y-0 divide-slate-600 text-center font-bold shadow-md shadow-shadow"
        >
            <button
                class="disabled:opacity-10 {currentComponent === 0
                    ? 'outline outline-2 outline-button-selected'
                    : ''} flex flex-row items-center md:rounded-l-lg md:rounded-tr-none justify-center w-full gap-3 flex-1 p-3 hover:bg-container-hover transition"
                disabled={isTransitioning}
                on:click={() => {
                    if (currentComponent != 0) {
                        currentComponent = 0;
                        startTransition(800);
                    }
                }}
            >
                <Icon path={mdiAccountQuestion} color="white" />
                <p>Who am I?</p>
            </button>
            <button
                class="disabled:opacity-10 {currentComponent === 1
                    ? 'outline outline-2 outline-button-selected'
                    : ''} flex flex-row items-center justify-center w-full gap-3 flex-1 p-3 hover:bg-container-hover transition"
                disabled={isTransitioning}
                on:click={() => {
                    if (currentComponent != 1) {
                        currentComponent = 1;
                        startTransition(800);
                    }
                }}
            >
                <Icon path={mdiFileDocumentMultiple} color="white" />
                <p>My projects</p>
            </button>
            <button
                class="disabled:opacity-10 {currentComponent === 2
                    ? 'outline outline-2 outline-button-selected'
                    : ''} flex flex-row items-center md:rounded-r-lg md:rounded-bl-none justify-center w-full gap-3 flex-1 p-3 hover:bg-container-hover transition"
                disabled={isTransitioning}
                on:click={() => {
                    if (currentComponent != 2) {
                        currentComponent = 2;
                        startTransition(800);
                    }
                }}
            >
                <Icon path={mdiCardAccountDetails} color="white" />
                <p>My socials</p>
            </button>
        </div>
        {#if currentComponent === -1}
            <div
                class="bg-container-dark/70 backdrop-blur-md p-5 w-screen md:w-1/2 rounded-lg shadow-md shadow-shadow"
            >
                <header class="w-full flex flex-col items-center gap-3">
                    <p class="font-bold text-xl">Hey there. 👋</p>
                    <p>
                        Click one of the buttons above to learn more about me!
                    </p>
                </header>
            </div>
        {/if}
        <!-- <svelte:component this={components[currentComponent]} /> -->
        <Panels bind:currentComponent />
    </div>
</main>

<style>
    .filter {
        filter: invert(9%) sepia(11%) saturate(2234%) hue-rotate(185deg)
            brightness(95%) contrast(93%);
    }

    .filter:hover {
        filter: none;
    }
</style>
