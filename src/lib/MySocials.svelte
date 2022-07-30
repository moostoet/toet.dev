<script>
    import { quintOut } from "svelte/easing";
    import { fly } from "svelte/transition";
    import Icon from "mdi-svelte";
    import { mdiGithub, mdiLinkedin, mdiAt } from "@mdi/js";
</script>

<div
    class="bg-container-dark/70 backdrop-blur-md p-5 rounded-lg shadow-md shadow-shadow"
    in:fly={{ duration: 800, easing: quintOut, x: 200 }}
    out:fly={{ duration: 800, easing: quintOut, x: -200 }}
>
    <div>
        <header
            class="w-full h-full flex flex-row p-3 items-center justify-center gap-3 border rounded-lg border-button-selected"
        >
            <p class="text-3xl font-bold">Socials</p>
            <p class="opacity-50">How to get in touch</p>
        </header>
        <main>
            <div
                class="flex flex-col xl:flex-row text-center p-3 h-full items-center gap-5 divide-y xl:divide-x xl:divide-y-0 divide-button-selected"
            >
                <div
                    class="h-full w-full justify-center flex flex-col items-center flex-1"
                >
                    <a href="https://github.com/moostoet" target="_blank">
                        <div
                            class="flex flex-col items-center group hover:scale-[1.05] transition-transform"
                        >
                            <Icon path={mdiGithub} size={4} />
                            <p class="text-xs uppercase font-bold">Github</p>
                            <p
                                class="text-xs font-bold border border-indigo-500 group-hover:bg-indigo-500 transition p-1 rounded-md"
                            >
                                moostoet
                            </p>
                        </div>
                    </a>
                </div>
                <div
                    class="h-full w-full justify-center flex flex-col items-center flex-1"
                >
                    <a
                        href="https://www.linkedin.com/in/moos-toet-3b93441b8/"
                        target="_blank"
                    >
                        <div
                            class="flex flex-col items-center group hover:scale-[1.05] transition-transform"
                        >
                            <Icon path={mdiLinkedin} size={4} />
                            <p class="text-xs uppercase font-bold">LinkedIn</p>
                            <p
                                class="text-xs font-bold border border-indigo-500 group-hover:bg-indigo-500 transition p-1 rounded-md"
                            >
                                Moos Toet
                            </p>
                        </div>
                    </a>
                </div>
                <div
                    class="h-full w-full justify-center flex flex-col items-center flex-1"
                >
                    <a href="mailto:moostoet@hotmail.com">
                        <div
                            class="flex flex-col items-center group hover:scale-[1.05] transition-transform"
                        >
                            <Icon path={mdiAt} size={4} />
                            <p class="text-xs uppercase font-bold">E-mail</p>
                            <p
                                class="text-xs font-bold border border-indigo-500 group-hover:bg-indigo-500 transition p-1 rounded-md"
                            >
                                moostoet@hotmail.com
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </main>
    </div>
</div>
