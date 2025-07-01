export default function Sidebar({ sections, activeId, onSelect }) {
  return (
    <aside className="bg-gray-100 dark:bg-gray-800 p-4 space-y-2">
      {sections.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`w-full text-left px-3 py-2 rounded
            ${id === activeId
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
        >
          {title}
        </button>
      ))}
    </aside>
  );
}
