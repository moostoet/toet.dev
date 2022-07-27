<script lang="ts">
  import Icon from 'mdi-svelte';
  import { mdiWindowClose } from '@mdi/js';
</script>

<main>
  <div class="h-screen w-screen flex items-center justify-center">
    <div class="bg-container-dark p-5 w-1/2 rounded-lg shadow-md">
      <header class="w-full flex flex-row items-center">
        <p class="font-bold text-xl flex-1">Hey there. 👋</p>
        <p>Martin = stinky nerd. 🤓</p>
        <Icon path={mdiWindowClose} color="white"/>
      </header>
    </div>
  </div>
</main>