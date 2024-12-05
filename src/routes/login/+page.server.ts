import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { error, fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(formSchema)),
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(formSchema));

        if (!form.valid) {
            return fail(400, {
                form,
            });
        }

        const { email, password } = form.data;

        const { error: supabaseError } = await event.locals.supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (supabaseError) {
            error(400, { message: 'something went wrong' });
        }

        throw redirect(303, '/private/movies');
    },
};
