import {createClient} from "@sanity/client"
import ImageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: "qwoxusny",
    // projectId: "oov4q50j",
    dataset: "production",
    useCdn: true,
    apiVersion: '2021-10-21',
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;