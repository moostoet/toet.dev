<script>
    export let progress;
</script>

<div class="w-full bg-container-dark rounded-full">
    <div
        class="bg-button-selected text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style="width: {progress *
            100}%;"
    >
        {progress * 100}%
    </div>
</div>