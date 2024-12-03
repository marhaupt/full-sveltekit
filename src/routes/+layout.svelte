<script lang="ts">
    import { i18n } from '$lib/i18n';
    import { invalidate } from '$app/navigation';
    import { onMount, type Snippet } from 'svelte';
    import { ParaglideJS } from '@inlang/paraglide-sveltekit';
    import '../app.css';
    import type { LayoutData } from './$types';

    type Props = {
        children: Snippet;
        data: LayoutData;
    };

    let { children, data }: Props = $props();

    onMount(() => {
        const { data: supabaseData } = data.supabase.auth.onAuthStateChange((_, newSession) => {
            if (newSession?.expires_at !== data.session?.expires_at) {
                invalidate('supabase:auth');
            }
        });

        return () => supabaseData.subscription.unsubscribe();
    });
</script>

<ParaglideJS {i18n}>
    {@render children()}
</ParaglideJS>
