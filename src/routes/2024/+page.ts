import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const res = await fetch(
		'https://script.google.com/macros/s/AKfycbxf002I0leN8oUMiKt8TGTZzGtmQmbQLoaTr5-CCRcZA_ngq0VINFjyydrpe0AC6Ave/exec'
	);

	if (!res.ok) {
		throw error(500, 'Woops! Kleshas are still there. Please try again later.');
	}

	const promise = res.json() as Promise<{
		status: 'success';
		data: {
			id: number;
			name: string;
			profileUrl: string;
			blogTitle: string;
			blogUrl: string;
		}[];
		release: {
			id: number;
			name: string;
			profileUrl: string;
			releaseTitle: string;
			releaseUrl: string;
		}[];
	}>;

	return {
		responseData: promise
	};
}
