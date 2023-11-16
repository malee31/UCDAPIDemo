export type DOC_SLUGS = {
	title: string,
	details: string,
	params: string,
	response: string,
	warnings: string,
	errors: string,
}

export class ChunkInterface {
	docSlug: string = "SLUG_NOT_SET";
	slugs!: DOC_SLUGS;
	constructor(docSlug: string) {
		this.generateSlugs(docSlug);
	}
	generateSlugs(newDocSlug: string) {
		this.docSlug = newDocSlug;
		this.slugs = {
			title: `${this.docSlug}`,
			details: `${this.docSlug}-details`,
			params: `${this.docSlug}-params`,
			response: `${this.docSlug}-response`,
			warnings: `${this.docSlug}-warnings`,
			errors: `${this.docSlug}-errors`
		};
	}
}
