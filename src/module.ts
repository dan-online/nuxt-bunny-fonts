import { defineNuxtModule } from "@nuxt/kit";
import { name } from "../package.json";

// Module options TypeScript inteface definition
export type Font = Record<string, number[]>;

export interface ModuleOptions {
	families: Font,
	swap?: boolean;
}

const constructURL = (
	fonts: { family: string; weights: number[] }[],
	options: ModuleOptions,
) => {
	const base = "https://fonts.bunny.net/css";
	const families = fonts
		.map((font) => `${font.family}:${font.weights.join(",")}`)
		.join("|");
	const swap = options.swap ? "&display=swap" : "";
	return `${base}?family=${families}${swap}`;
};

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: name,
		configKey: "bunnyFonts",
	},
	defaults: {
		families: {},
		swap: true,
	},
	setup(options, nuxt) {
		const fonts = Object.entries(options.families)
			.map(([family, weights]) => {
				return {
					family,
					weights,
				};
			})
			.filter((font) => font.weights.length > 0);

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
			href: constructURL(fonts, options),
		});
	},
});
