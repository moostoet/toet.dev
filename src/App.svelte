<script lang="ts">
    import Icon from "mdi-svelte";
    import {
        mdiWindowClose,
        mdiAccountQuestion,
        mdiFileDocumentMultiple,
        mdiCardAccountDetails,
    } from "@mdi/js";
    import { tweened } from "svelte/motion";

    //variable dateToVienna: 14th August, 2022, 13:25 PM
    let dateToVienna = new Date(2022, 7, 14, 13, 25);

    //convert dateToVienna to seconds
    let dateToViennaInSeconds = dateToVienna.getTime() / 1000;

    //get curent date and count down to dateToViennaInSeconds
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
</script>

<main>
    <div
        class="h-screen w-screen flex flex-col gap-5 items-center justify-center relative"
    >
        <div class="absolute top-5 left-5">
            <p class="text-container-hover font-medium text-md">toet.dev</p>
        </div>
        <div class="p-10 flex flex-col items-center">
            <p class="text-xl font-bold">Time until Vienna:</p>
            <p class="text-3xl font-bold text-blue-200">
                {days}d : {hours}h : {minutes}m : {seconds}s
            </p>
        </div>
        <div
            class="bg-container-dark rounded-lg flex w-1/2 divide-x divide-slate-600 text-center font-bold"
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
        <div class="bg-container-dark p-5 w-1/2 rounded-lg shadow-md">
            <header class="w-full flex flex-row items-center">
                <p class="font-bold text-xl flex-1">Hey there. 👋</p>
                <Icon path={mdiWindowClose} color="white" />
            </header>
        </div>
    </div>
</main>
