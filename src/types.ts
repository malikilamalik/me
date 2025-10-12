declare interface Post {
	date: string;
	title: string;
	tags: string[];
	published: boolean;
	image: string;
	kind: string;
	reading_time: {
		text: string;
		minutes: number;
		time: number;
		words: number;
	};
	reading_time_text: string;
	preview_html: string;
	preview: string;
	previewHtml: string;
	slug: string | null;
	path: string;
}