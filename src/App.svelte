<script lang="ts">
    import Icon from "mdi-svelte";
    import { mdiWindowClose } from "@mdi/js";
	import { tweened } from 'svelte/motion';

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
	}, 1000)

	$: days = Math.floor($timer / 86400);
	$: hours = Math.floor(($timer - (days * 86400)) / 3600);
	$: minutes = Math.floor(($timer - (days * 86400) - (hours * 3600)) / 60);
	$: seconds = Math.floor($timer - (days * 86400) - (hours * 3600) - (minutes * 60));
</script>

<main>
    <div class="h-screen w-screen flex flex-col items-center justify-center">
		<div class="p-10 flex flex-col items-center">
			<p class="text-xl font-bold">Time until Vienna:</p>
			<p class="text-3xl font-bold text-blue-200">{days}d : {hours}h : {minutes}m : {seconds}s</p>
		</div>
        <div class="bg-container-dark p-5 w-1/2 rounded-lg shadow-md">
            <header class="w-full flex flex-row items-center">
                <p class="font-bold text-xl flex-1">Hey there. 👋</p>
                <Icon path={mdiWindowClose} color="white" />
            </header>
        </div>
    </div>
</main>
