"use client";

import useSimpleAnime from "@/hooks/useSimpleAnime";
import Button from "@/components/ui/Button/Button";

export default function NotFoundClient() {
  useSimpleAnime();

  return (
    <main>
      <section
        style={{ minHeight: "60vh" }}
        className="container fadeInUp"
        data-anime="100"
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
            gap: 20,
            textAlign: "center",
            padding: "80px 0",
          }}
        >
          <span className="font-1-xxl cor-p1 fadeInLeft" data-anime="150">
            404
          </span>
          <h1 className="font-1-xl cor-12 fadeInRight" data-anime="200">
            Página não encontrada
          </h1>
          <p className="font-2-l cor-8 fadeInUp" data-anime="250">
            A página que você procura não existe ou foi removida.
          </p>

          <div className="fadeInUp" data-anime="300">
            <Button href="/">Voltar para a Home</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
