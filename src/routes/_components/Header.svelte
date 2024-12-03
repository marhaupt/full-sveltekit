<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import * as m from '$lib/paraglide/messages.js';
</script>

<header
    class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur"
>
    <div class="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" class="mr-6 flex items-center space-x-2">
            <span class="font-bold">{m.header_title()}</span>
        </a>
        <Button href="/login" variant="ghost">
            {m.header_login()}
        </Button>
    </div>
</header>
