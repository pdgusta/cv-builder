import { useState } from "react";
import Sidebar from "./components/Sidebar";
import EditorPane from "./components/EditorPane";
import PreviewPane from "./components/PreviewPane";

const sectionTemplates = {
  personal: { name: "", email: "", phone: "" },
  summary: { text: "" }
};

export default function App() {
  const [sections, setSections] = useState([
    { id: "personal", title: "Dados Pessoais", data: sectionTemplates.personal },
    { id: "summary",  title: "Resumo",         data: sectionTemplates.summary  }
  ]);
  const [activeId, setActiveId] = useState("personal");

  const handleSectionChange = (newData) => {
    setSections(prev =>
      prev.map(s => s.id === activeId ? { ...s, data: newData } : s)
    );
  };

  const activeSection = sections.find(s => s.id === activeId);

  return (
    <div className="h-screen grid grid-cols-[250px_1fr]">
      <Sidebar
        sections={sections}
        activeId={activeId}
        onSelect={setActiveId}
      />
      <div className="grid grid-cols-2 gap-4 p-4 overflow-auto">
        <EditorPane section={activeSection} onChange={handleSectionChange} />
        <PreviewPane sections={sections} />
      </div>
    </div>
  );
}
