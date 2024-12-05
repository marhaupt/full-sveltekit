<script lang="ts">
    import { page } from '$app/stores';
</script>

{#if $page.error}
    <div
        class="relative mt-4 rounded border border-destructive bg-destructive-foreground px-4 py-3 text-destructive"
    >
        <strong class="font-bold">Ups!</strong>
        <span class="block sm:inline">{$page.error.message}</span>
    </div>
{/if}
