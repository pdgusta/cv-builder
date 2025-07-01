export default function EditorPane({ section, onChange }) {
  if (!section) return null;
  const { id, data } = section;

  const update = (field, value) => onChange({ ...data, [field]: value });

  switch (id) {
    case "personal":
      return (
        <div className="space-y-3">
          <input
            className="input"
            placeholder="Nome"
            value={data.name}
            onChange={e => update("name", e.target.value)}
          />
          <input
            className="input"
            placeholder="E-mail"
            value={data.email}
            onChange={e => update("email", e.target.value)}
          />
          <input
            className="input"
            placeholder="Telefone"
            value={data.phone}
            onChange={e => update("phone", e.target.value)}
          />
        </div>
      );
    case "summary":
      return (
        <textarea
          className="input h-40"
          placeholder="Resumo profissional"
          value={data.text}
          onChange={e => update("text", e.target.value)}
        />
      );
    default:
      return <p className="text-gray-500">Seção não suportada ainda.</p>;
  }
}
