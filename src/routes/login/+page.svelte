<script lang="ts">
    import type { PageData } from './$types';
    import LoginForm from './login-form.svelte';
    export let data: PageData;
</script>

<div class="flex min-h-screen items-center justify-center">
    <div class="w-full max-w-md rounded-lg bg-white p-4 shadow-lg">
        <LoginForm data={data.form} />
    </div>
</div>
