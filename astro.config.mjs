// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.nexarq.ai',
	integrations: [
		starlight({
			title: 'Nexarq Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nexarq-ai/dev-docs' }],
			sidebar: [
				{
					label: 'Operating System',
					items: [
						{ label: 'Operating Systems & Linux Fundamentals', slug: 'operating-system' },
					],
				},
				{
					label: 'Networking Fundamentals',
					items: [
						{ label: 'OSI Model (7 Layers)', slug: 'networking/osi-model' },
						{ label: 'IP Addressing', slug: 'networking/ip-addressing' },
						{ label: 'Routing', slug: 'networking/routing' },
					],
				},
				{
					label: 'Infrastructure Components',
					items: [
						{ label: 'Infrastructure Components', slug: 'infrastructure' },
					],
				},
				{
					label: 'Layer 7',
					items: [
						{ label: 'DNS Fundamentals', slug: 'layer-7/dns' },
						{ label: 'HTTP', slug: 'layer-7/http' },
						{ label: 'TLS/SSL', slug: 'layer-7/tls-ssl' },
					],
				},
				{
					label: 'Key Design Concerns',
					items: [
						{ label: 'Three-Tier Architecture', slug: 'design/three-tier' },
						{ label: 'Key Design Concerns', slug: 'design/concerns' },
					],
				},
				{
					label: 'Security',
					items: [
						{ label: 'Security: WAAP', slug: 'security/waap' },
					],
				},
			],
		}),
	],

	adapter: cloudflare({
		platformProxy: {
			enabled: true
		},
	}),
});