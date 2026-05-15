"use client";

import Button from "@/components/ui/Button/Button";
import useSimpleAnime from "@/hooks/useSimpleAnime";
import styles from "./contatosection.module.css";

export default function ContatoForm() {
  useSimpleAnime();

  return (
    <section
      className={`${styles["contato-formulario"]} fadeInRight`}
      data-anime="400"
      aria-label="Formulário"
    >
      <h2 className="font-1-m cor-12 fadeInUp" data-anime="100">
        Formulário de contato
      </h2>
      <form className="form" action="/enviar.php" method="post">
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="(21) 9999-9999"
          />
        </div>
        <div className="col-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="contato@email.com"
            required
          />
        </div>
        <div className="col-2">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            rows="5"
            id="mensagem"
            name="mensagem"
            placeholder="O que você precisa?"
          />
        </div>
        <Button>Enviar Mensagem</Button>
      </form>
    </section>
  );
}
