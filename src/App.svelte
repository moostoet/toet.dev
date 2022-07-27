<script lang="ts">
    import Icon from "mdi-svelte";
    import {
        mdiWindowClose,
        mdiAccountQuestion,
        mdiFileDocumentMultiple,
        mdiCardAccountDetails,
    } from "@mdi/js";
    import { tweened } from "svelte/motion";
    import AboutMe from "./lib/AboutMe.svelte";

    let dateToVienna = new Date(2022, 7, 14, 13, 25);
    let dateToViennaInSeconds = dateToVienna.getTime() / 1000;
    let currentDate = new Date();
    let currentDateInSeconds = currentDate.getTime() / 1000;
    let timeLeft = dateToViennaInSeconds - currentDateInSeconds;

    let timer = tweened(timeLeft);

    setInterval(() => {
        if ($timer > 0) $timer--;
    }, 1000);

    $: days = Math.floor($timer / 86400);
    $: hours = Math.floor(($timer - days * 86400) / 3600);
    $: minutes = Math.floor(($timer - days * 86400 - hours * 3600) / 60);
    $: seconds = Math.floor(
        $timer - days * 86400 - hours * 3600 - minutes * 60
    );

    let componentToShow = "";

    function changeComponentToShow(component) {
        componentToShow = component;
    }
</script>

<main>
    <div
        class="h-screen w-screen flex flex-col gap-5 items-center justify-center relative bg-gradient-to-r from-primary-dark to-black"
    >
        <div class="absolute top-5 left-5">
            <p class="text-container-hover font-medium text-md">toet.dev</p>
        </div>
        <div class="flex flex-col items-center absolute top-5 right-5">
            <p class="text-xl font-bold">Time until Vienna:</p>
            <p class="text-3xl font-bold text-blue-200">
                {days}d : {hours}h : {minutes}m : {seconds}s
            </p>
        </div>
        <div
            class="bg-container-dark/70 rounded-lg flex flex-col md:flex-row w-1/2 divide-y md:divide-x md:divide-y-0 divide-slate-600 text-center font-bold shadow-md shadow-shadow"
        >
            <button
                class="flex flex-row items-center rounded-l-lg justify-center w-full gap-3 flex-1 p-3 hover:bg-container-hover transition"
            >
                <Icon path={mdiAccountQuestion} color="white" />
                <p>Who am I?</p>
            </button>
            <button
                class="flex flex-row items-center justify-center w-full gap-3 flex-1 p-3 hover:bg-container-hover transition"
            >
                <Icon path={mdiFileDocumentMultiple} color="white" />
                <p>My projects</p>
            </button>
            <button
                class="flex flex-row items-center rounded-r-lg justify-center w-full gap-3 flex-1 p-3 hover:bg-container-hover transition"
            >
                <Icon path={mdiCardAccountDetails} color="white" />
                <p>My socials</p>
            </button>
        </div>
        <div
            class="bg-container-dark/70 backdrop-blur-md p-5 w-1/2 rounded-lg shadow-md shadow-shadow"
        >
            <header class="w-full flex flex-col items-center gap-3">
                <p class="font-bold text-xl">Hey there. 👋</p>
                <p>Click one of the buttons above to learn more about me!</p>
            </header>
        </div>
        <p class="text-sm opacity-50">
            This site is still a work-in-progress! 🏗️
        </p>
    </div>
</main>
