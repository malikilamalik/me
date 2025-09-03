import { error } from '@sveltejs/kit';

const modules = import.meta.glob('../../../posts/*.{md,svx,svelte.md}'); 

export const load = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const keyMd = `../../../posts/${slug}.md`;
  const keySvx = `../../../posts/${slug}.svx`;
  const keySvelteMd = `../../../posts/${slug}.svelte.md`;


  const loader = modules[keyMd] ?? modules[keySvx] ?? modules[keySvelteMd];
  if (!loader) throw error(404, 'Post not found');

  const mod: any = await loader();            // ← now get the module
  return {
    Content: mod.default,                     // compiled Svelte component
    meta: { ...(mod.metadata ?? {}), slug },  // frontmatter from mdsvex
  };
};