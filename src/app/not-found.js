import Button from "@/components/ui/Button/Button";

export const metadata = {
  title: "404 | Bikcraft",
  description: "Página não encontrada na Bikcraft.",
};

export default function NotFound() {
  return (
    <main>
      <section style={{ minHeight: '60vh' }} className="container">
        <div style={{ display: 'grid', placeItems: 'center', gap: 20, textAlign: 'center', padding: '80px 0' }}>
          <span className="font-2-l-b cor-p1" style={{ fontSize: 28 }}>404</span>
          <h1 className="font-1-xxl cor-12">Página não encontrada</h1>
          <p className="font-2-l cor-8">A página que você procura não existe ou foi removida.</p>
          <Button href="/">Voltar para a Home</Button>
        </div>
      </section>
    </main>
  );
}
