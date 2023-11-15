import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TinkerHub Docs',
			social: {
				github: 'https://www.tinkerhub.org/',
			},
			sidebar: [
				{
					label: 'Hacks in tech',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Documenting Knowledge', link: '/guides/example/' },
						
					],
				},
				//mutate below two lines for every new folder being added and replace directory with exact folder name
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Practicals',
					autogenerate: { directory: 'Learning practically' },
				},
			],
		}),
	],
});
