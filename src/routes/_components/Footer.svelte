<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { i18n } from '$lib/i18n';
    import * as m from '$lib/paraglide/messages.js';
    import { type AvailableLanguageTag, availableLanguageTags } from '$lib/paraglide/runtime';

    function switchToLanguage(newLanguage: AvailableLanguageTag) {
        const canonicalPath = i18n.route($page.url.pathname);
        const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
        goto(localisedPath);
    }
</script>

<footer class="border-t bg-gray-100">
    <div class="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <p class="text-center text-sm text-gray-600">
            © {new Date().getFullYear()}
            {m.footer_about()}
        </p>
        <div class="flex gap-2">
            {#each availableLanguageTags as loc}
                <button onclick={() => switchToLanguage(loc)}>{loc.toUpperCase()}</button>
            {/each}
        </div>
    </div>
</footer>
