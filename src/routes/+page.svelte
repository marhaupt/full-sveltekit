<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import Footer from './_components/Footer.svelte';
    import Header from './_components/Header.svelte';
    import * as m from '$lib/paraglide/messages.js';

    const t = (key: string) => key;
</script>

<div class="flex min-h-screen flex-col">
    <Header />
    <section class="relative flex min-h-[100svh] items-center justify-center bg-black text-white">
        <enhanced:img
            src="./movie-background-collage.jpg"
            alt="Movie collage"
            class="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div class="relative z-10 px-4 text-center sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                {m.home_hero_title()}
            </h1>
            <p class="mx-auto mt-4 max-w-3xl text-lg text-gray-300 sm:text-xl md:text-2xl">
                {m.home_hero_subtitle()}
            </p>
            <Button href="/movies" class="bg-background text-primary mt-8 hover:bg-slate-400">
                {m.home_hero_cta()}
            </Button>
        </div>
    </section>

    <section class="bg-gray-100 py-16 md:py-24">
        <div class="w-full px-4 sm:px-6 lg:px-8">
            <div class="space-y-4 text-center">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {m.home_cta_title()}
                </h2>
                <p
                    class="mx-auto max-w-[700px] text-balance text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                >
                    {m.home_cta_subtitle()}
                </p>
                <Button href="/signup">
                    {m.home_cta_button()}
                </Button>
            </div>
        </div>
    </section>

    <Footer />
</div>
