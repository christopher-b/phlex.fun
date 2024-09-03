import { defineConfig } from "vitepress";

export default defineConfig({
	title: "Phlex",
	description: "Ruby views",
	themeConfig: {
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Community", link: "project/community" },
			{ text: "Guide", link: "/guide" },
		],
		sidebar: [
			{
				text: "Project",
				collapsed: false,
				items: [
					{ text: "Community", link: "/project/community" },
					{ text: "GitHub", link: "https://github.com/phlex-ruby" },
				],
			},
			{
				text: "Guide",
				collapsed: false,
				items: [
					{ text: "Intro", link: "/guide/" },
					{ text: "Setup", link: "/guide/setup" },
					{ text: "Your first component", link: "/guide/first-component" },
					{ text: "Under the hood", link: "/guide/under-the-hood" },
					{ text: "Attributes deep-dive", link: "/guide/attributes" },
					{ text: "Advanced components", link: "/guide/advanced-components" },
					{ text: "Tags", link: "/guide/tags" },
					{ text: "Layouts", link: "/guide/layouts" },
				],
			},
			{
				text: "Reference",
				collapsed: false,
				items: [
					{ text: "SGML", link: "/reference/sgml" },
					{ text: "HTML", link: "/reference/html" },
					{ text: "SVG", link: "/reference/svg" },
					{ text: "Kits", link: "/reference/kits" },
					{
						text: "Rails",
						collapsed: false,
						items: [
							{ text: "Helpers", link: "/reference/rails/helpers" },
							{ text: "Generators", link: "/reference/rails/generators" },
							{ text: "Streaming", link: "/reference/rails/streaming" },
						],
					},
				],
			},
			{
				text: "Technical Design",
				collapsed: false,
				items: [
					{ text: "Intro", link: "/design/intro" },
					{ text: "Caching", link: "/design/caching" },
					{ text: "Performance", link: "/design/performance" },
					{ text: "Component Kits" },
					{ text: "Rails Integration" },
					{ text: "Selective Rendering" },
					{ text: "Deferred Render" },
				],
			},
			{
				text: "AI Prompt",
				link: "/ai",
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/phlex-ruby" },
			{ icon: "discord", link: "https://discord.gg/p7C9SWS8Sa" },
		],
		footer: {
			message: "Released under the MIT License.",
		},
	},
});
