import { STRAPI_TOKEN, STRAPI_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	console.log('STRAPI_URL:', STRAPI_URL);
	console.log('Has token:', !!STRAPI_TOKEN);

	const res = await fetch(`${STRAPI_URL}/api/about`, {
		headers: {
			Authorization: `Bearer ${STRAPI_TOKEN}`
		}
	});

	console.log('Status:', res.status);
	console.log('Body:', await res.text());

	if (!res.ok) {
		throw new Error(`Failed to fetch from Strapi: ${res.status}`);
	}

	return {};
}) satisfies PageServerLoad;