import 'server-only';
import { getPayload } from './payload-service-util';

export async function fetchPageBySlug(slug: string[]) {
  const payload = await getPayload();
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug.join('/'),
      },
    },
    limit: 1,
    depth: 1,
  });
  return result.docs[0];
}

export async function fetchNavigation() {
  const payload = await getPayload();
  const result = await payload.find({
    collection: 'pages',
    limit: 0,
    depth: 0,
    currentDepth: 0,
    sort: 'menuName',
  });
  return result.docs;
}
