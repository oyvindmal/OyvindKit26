import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";
import { strapi } from "@strapi/client";

export const load = (async ( {params} ) => {
  const client = strapi({
    baseURL: `${env.STRAPI_URL}/api`,
  });
console.log(params.id);
  const homepage = client.collection("stories");

  const stories = await homepage.findOne(params.id);

  return {
    page: stories
  };
}) satisfies PageServerLoad;