export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1>FUNPAPI</h1>
        <nav className="flex gap-8">
          <a href="#home" className="hover:opacity-80 transition-opacity">
            Home
          </a>
          <a href="#projects" className="hover:opacity-80 transition-opacity">
            Ações e Projetos
          </a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
