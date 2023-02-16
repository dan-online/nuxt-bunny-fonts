import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { setup, $fetch } from "@nuxt/test-utils";

describe("ssr w/ fonts", async () => {
	await setup({
		nuxtConfig: {
			bunnyFonts: {
				fonts: {
					ABeeZee: [500, 700],
				},
			},
		},
		rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
	});

	it("renders the index page", async () => {
		const html = await $fetch("/");
		expect(html).toContain(
			`<link rel="preconnect" href="https://fonts.bunny.net">`,
		);
		expect(html).toContain(
			`<link rel="stylesheet" href="https://fonts.bunny.net/css?family=ABeeZee:500,700&display=swap">`,
		);
	});
});
