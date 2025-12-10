// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.nexarq.ai',
	integrations: [
		starlight({
			title: 'nexarq docs',
			description: 'Comprehensive developer documentation for nexarq, covering operating systems, networking, infrastructure, and security.',
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nexarq-ai/dev-docs' }],
			head: [
				{ tag: 'meta', attrs: { name: 'keywords', content: 'nexarq, documentation, developer, networking, security, infrastructure, cloudflare' } },
				{ tag: 'meta', attrs: { name: 'author', content: 'nexarq' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: '/favicon.svg' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
			],
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
					label: 'Layer 7',
					items: [
						{ label: 'DNS Fundamentals', slug: 'layer-7/dns' },
						{ label: 'HTTP', slug: 'layer-7/http' },
						{ label: 'TLS/SSL', slug: 'layer-7/tls-ssl' },
					],
				},
				{
					label: 'Infrastructure Components',
					items: [
						{ label: 'Infrastructure Components', slug: 'infrastructure' },
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
						{ label: 'Cloudflare Security', slug: 'security/cloudflare-security' },
					],
				},
				{
					label: 'Developer Services',
					items: [
						{
							label: 'Compute',
							items: [
								{ label: 'Introduction', slug: 'developer-services/compute' },
								{
									label: 'JavaScript',
									items: [
										{ label: 'Basics & Event Loop', slug: 'developer-services/compute/javascript/basics' },
										{ label: 'V8 Engine', slug: 'developer-services/compute/javascript/v8' },
									],
								},
							],
						},
						{
							label: 'Databases',
							items: [
								{ label: 'Overview', slug: 'developer-services/databases' },
								{ label: 'SQL', slug: 'developer-services/databases/sql' },
								{
									label: 'NoSQL',
									items: [
										{ label: 'MongoDB', slug: 'developer-services/databases/nosql/mongodb' },
										{ label: 'DynamoDB', slug: 'developer-services/databases/nosql/dynamodb' },
									],
								},
								{ label: 'Cloudflare Data', slug: 'developer-services/databases/cloudflare' },
							],
						},
					],
				},
			],
		}),
		mermaid(),
	],

	adapter: cloudflare({
		platformProxy: {
			enabled: true
		},
	}),
});