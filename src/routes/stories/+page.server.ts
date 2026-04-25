import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";
import { strapi } from "@strapi/client";

export const load = (async () => {
  const client = strapi({
    baseURL: `${env.STRAPI_URL}/api`,
  });

  const homepage = client.collection("stories");

  const stories = await homepage.find();

  return {
    page: stories
  };
}) satisfies PageServerLoad;