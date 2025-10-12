import type { LoadEvent } from '@sveltejs/kit';

export const load = async ({ fetch }: LoadEvent) => {
    const res = await fetch(`api/posts`);
    if (res.ok) {
        const posts = await res.json();
        return { posts };
    } else {
        return { posts: [] };
    }
};