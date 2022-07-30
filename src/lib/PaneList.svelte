<script>
    import Pane from "./reusables/Pane.svelte";

    let paneData = [
        {
            title: "Qualityboard 2.0",
            year: 2018,
            imageUrl: "/qualityboard.png",
            description:
                "A SaaS solution for keeping track and managing goals with your team efficiently and easily.",
            tags: ["Vue 2", "NodeJS", "Docker", "DigitalOcean"],
        },
        {
            title: "KPN Typing Challenge",
            year: 2022,
            imageUrl: "/kpn_typing_challenge.png",
            description:
                "A website for the KPN Typing Challenge during the Tweakers Developers Summit 2022 in the Netherlands.",
            tags: ["Vue 3", "Typescript", "NodeJS"],
        },
        {
            title: "Qualityboard 3.0",
            year: 2022,
            imageUrl: "/qb_v3.png",
            description:
                "A reworked version of Qualityboard 2.0. Built in Angular instead of Vue - better design, scalability, features etc.",
            tags: ["Angular", "NodeJS", "Docker", "DigitalOcean", "AWS"],
        },
    ];
</script>

<div class="mt-3">
    <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {#each paneData as pane}
            <li>
                <Pane {pane} />
            </li>
        {/each}
    </ul>
</div>
