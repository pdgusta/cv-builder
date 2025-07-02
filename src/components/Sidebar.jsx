import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ id, title, isActive, onSelect }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => onSelect(id)}
      className={`w-full text-left px-3 py-2 rounded transition ${
        isActive
          ? "bg-blue-500 text-white"
          : "hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    >
      {title}
    </button>
  );
}

export default function Sidebar({ sections, activeId, onSelect, onReorder }) {
  return (
    <DndContext onDragEnd={onReorder} collisionDetection={closestCenter}>
      <SortableContext
        items={sections.map((s) => s.id)}
        strategy={verticalListSortingStrategy}
      >
        <aside className="bg-gray-100 dark:bg-gray-800 p-4 space-y-2">
          {sections.map(({ id, title }) => (
            <SortableItem
              key={id}
              id={id}
              title={title}
              isActive={id === activeId}
              onSelect={onSelect}
            />
          ))}
        </aside>
      </SortableContext>
    </DndContext>
  );
}
