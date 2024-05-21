import { fetchPageBySlug } from '@/services/pages-service';

export default async function Page({ params }: { params: { slug: string[] } }) {
  const page = await fetchPageBySlug(params.slug);

  return (
    <div>
      <h1>{page?.title}</h1>
      <p>Here we reference getPayload and all hell breaks loose.</p>
      <p>
        This page includes a large payload admin bundle including Lexical and the custom CSS (notice
        the page goes red as defined in (payload)/custom.scss)
      </p>
    </div>
  );
}
