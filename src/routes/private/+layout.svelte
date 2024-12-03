<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import * as m from '$lib/paraglide/messages.js';

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
        <a href="/">{m.nav_home()}</a>
    </nav>
    <button onclick={logout}>{m.nav_logout()}</button>
</header>
<main>
    {@render children()}
</main>
