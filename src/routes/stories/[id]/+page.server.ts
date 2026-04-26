import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";
import { strapi } from "@strapi/client";

export const load = (async ( {params} ) => {
  const client = strapi({
    baseURL: `${env.STRAPI_URL}/api`,
  });
console.log(params.id);
  const homepage = client.collection("stories");

const story = await homepage.findOne(params.id, {
  populate: {
    Media: {populate: "*"}
  }
});

  return {
    page: story,
    base : env.STRAPI_URL
  };
}) satisfies PageServerLoad;