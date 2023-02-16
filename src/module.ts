import { defineNuxtModule } from "@nuxt/kit";
import { name } from "../package.json";

// Module options TypeScript inteface definition
export interface ModuleOptions {
	fonts: Record<string, number[]>; // { 'Roboto': [400, 500, 700] }
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: name,
		configKey: "bunnyFonts",
	},
	defaults: {
		fonts: {},
	},
	setup(options, nuxt) {
		const fonts = Object.entries(options.fonts).map(([family, weights]) => {
			return {
				family,
				weights,
			};
		});

		if (fonts.length < 1) {
			return;
		}

		nuxt.options.app.head.link = nuxt.options.app.head.link || [];
		nuxt.options.app.head.link.push({
			rel: "preconnect",
			href: "https://fonts.bunny.net",
		});
		nuxt.options.app.head.link.push({
			rel: "stylesheet",
			href: `https://fonts.bunny.net/css?family=${fonts
				.map((font) => `${font.family}:${font.weights.join(",")}`)
				.join("|")}`,
		});
	},
});
