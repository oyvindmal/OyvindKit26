import { STRAPI_TOKEN, STRAPI_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';
 import { strapi } from '@strapi/client';

export const load = (async () => {
	
console.log(STRAPI_TOKEN);
const client = strapi({ baseURL: 'http://cms.oyvindmal.no/api'});

const homepage = client.single('front-page');
const defaultHomepage = await homepage.find()
return { "page" : defaultHomepage};


}) satisfies PageServerLoad;