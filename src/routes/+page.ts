import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const res = await fetch(
		'https://script.google.com/macros/s/AKfycbxwRjP-igPQeNIrTf2jenKcBp7MAl4Z_F_J7S6MQN9gJ2MX-2kJj4UEwC3AKYvxBSb1/exec'
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
	}>;

	return {
		blogData: promise
	};
}
