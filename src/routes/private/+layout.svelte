<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';

    type Props = {
        children: Snippet;
        data: LayoutData;
    };

    let { children, data }: Props = $props();

    const logout = $derived(async () => {
        const { error } = await data.supabase.auth.signOut();
        if (error) {
            console.error(error);
        }
    });
</script>

<header class="flex w-full items-center justify-between bg-gray-800 p-4 text-white">
    <nav>
        <a href="/">Home</a>
    </nav>
    <button onclick={logout}>Logout</button>
</header>
<main>
    {@render children()}
</main>
