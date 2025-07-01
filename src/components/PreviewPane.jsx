export default function PreviewPane({ sections }) {
  const personal = sections.find(s => s.id === "personal")?.data || {};
  const summary  = sections.find(s => s.id === "summary")?.data || {};

  return (
    <div className="prose max-w-none border rounded p-6 bg-white shadow">
      {personal.name && <h1 className="m-0">{personal.name}</h1>}
      {(personal.email || personal.phone) && (
        <p className="mt-0 text-sm text-gray-600">
          {personal.email} {personal.email && personal.phone && "\u2022"} {personal.phone}
        </p>
      )}
      {summary.text && (
        <>
          <h2>Resumo</h2>
          <p>{summary.text}</p>
        </>
      )}
    </div>
  );
}
