export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // JSON-LD is safe, structured data injected server-side.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
