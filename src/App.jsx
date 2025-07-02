import usePersistedState from "./hooks/usePersistedState";
import Sidebar from "./components/Sidebar";
import EditorPane from "./components/EditorPane";
import PreviewPane from "./components/PreviewPane";
import { arrayMove } from "@dnd-kit/sortable";

const sectionTemplates = {
  personal: { name: "", email: "", phone: "" },
  summary: { text: "" }
};

const initialSections = [
  { id: "personal", title: "Dados Pessoais", data: { ...sectionTemplates.personal } },
  { id: "summary",  title: "Resumo",         data: { ...sectionTemplates.summary  } }
];

export default function App() {
  const [sections, setSections] = usePersistedState("cv-sections", initialSections);
  const [activeId, setActiveId] = usePersistedState("cv-active", "personal");

  const handleSectionChange = (newData) => {
    setSections(prev =>
      prev.map(s => s.id === activeId ? { ...s, data: newData } : s)
    );
  };

  const activeSection = sections.find(s => s.id === activeId);

  const handleReorder = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setSections(prev => {
        const oldIndex = prev.findIndex(s => s.id === active.id);
        const newIndex = prev.findIndex(s => s.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }; 

  return (
    <div className="h-screen grid grid-cols-[250px_1fr]">
      <Sidebar
        sections={sections}
        activeId={activeId}
        onSelect={setActiveId}
        onReorder={handleReorder}
      />
      <div className="grid grid-cols-2 gap-4 p-4 overflow-auto">
        <EditorPane section={activeSection} onChange={handleSectionChange} />
        <PreviewPane sections={sections} />
      </div>
    </div>
  );
}
