import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aviário e Pet Shop Bom de Bico | Rações, Banho e Tosa no Sítio Cercado, Curitiba" },
      { name: "description", content: "Rações, medicamentos, banho e tosa e tudo pro seu bichinho no Sítio Cercado, Curitiba. Você ama, a gente cuida." },
      { property: "og:title", content: "Aviário e Pet Shop Bom de Bico" },
      { property: "og:description", content: "Você ama, a gente cuida. No Sítio Cercado, Curitiba." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const WHATSAPP = "5541996953076";
const ADDRESS = "R. Eduardo Pinto da Rocha, 2626 - Sítio Cercado, Curitiba - PR, 81935-000";
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);
const wa = (message: string) => "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);

const categories = [
  ["Rações", "Para diferentes tamanhos e focinhos", "◒", "cat-food"],
  ["Comidas", "Opções para a hora da refeição", "✳", "food"],
  ["Brinquedos", "Diversão pro dia a dia", "✦", "toys"],
  ["Mordedores", "Pra gastar energia brincando", "⌁", "chew"],
  ["Ossos", "Mais opções pro seu bichinho", "⌁", "bones"],
  ["Coleiras", "Passeios com mais cuidado", "◎", "collars"],
  ["Casinhas", "Um cantinho pra chamar de seu", "⌂", "homes"],
  ["Roupas", "Peças para os dias mais fresquinhos", "◇", "clothes"],
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=80", alt: "Cachorro dourado olhando para a câmera", caption: "Um focinho cheio de carinho" },
  { src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&auto=format&fit=crop&q=80", alt: "Cachorro pequeno em um gramado", caption: "Companhia boa demais" },
  { src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80", alt: "Cachorro deitado olhando para cima", caption: "Olha esse jeitinho!" },
  { src: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&auto=format&fit=crop&q=80", alt: "Cachorro feliz ao ar livre", caption: "Alegria de quatro patas" },
  { src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&auto=format&fit=crop&q=80", alt: "Cachorro sentado em ambiente externo", caption: "Um amigo de verdade" },
  { src: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&auto=format&fit=crop&q=80", alt: "Cachorro brincando", caption: "Pura energia!" },
];

function Paw({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 54 48" aria-hidden="true" fill="currentColor"><ellipse cx="27" cy="31" rx="13" ry="11"/><ellipse cx="9" cy="18" rx="5.5" ry="8" transform="rotate(-25 9 18)"/><ellipse cx="21" cy="8" rx="5.5" ry="8" transform="rotate(-8 21 8)"/><ellipse cx="35" cy="8" rx="5.5" ry="8" transform="rotate(8 35 8)"/><ellipse cx="46" cy="18" rx="5.5" ry="8" transform="rotate(25 46 18)"/></svg>;
}

function Home() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", pet: "", porte: "Pequeno", servico: "Banho e tosa", dia: "", obs: "" });
  const [sent, setSent] = useState(false);
  const [photo, setPhoto] = useState<number | null>(null);
  const [cookie, setCookie] = useState(false);
  useEffect(() => { setCookie(!localStorage.getItem("bomdebico-cookie")); }, []);
  const [clubPlan, setClubPlan] = useState("Clube Amigo");

  function submitGrooming(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Olá! Gostaria de consultar um horário para banho e tosa.",
      "Nome: " + form.nome,
      "WhatsApp: " + form.whatsapp,
      "Pet: " + form.pet,
      "Porte: " + form.porte,
      "Serviço: " + form.servico,
      "Dia preferido: " + (form.dia || "A combinar"),
      "Observações: " + (form.obs || "Nenhuma"),
    ].join("\n");
    window.open(wa(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  function acceptCookies() {
    localStorage.setItem("bomdebico-cookie", "accepted");
    setCookie(false);
  }

  return (
    <main>
      <div className="top-strip"><span>NO SÍTIO CERCADO, CURITIBA</span><span>Você ama, a gente cuida. <Paw /></span></div>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Bom de Bico - início"><span className="brand-mark"><Paw /></span><span><strong>Bom de Bico</strong><small>AVIÁRIO E PET SHOP</small></span></a>
        <nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#produtos">Produtos</a><a href="#galeria">Galeria</a><a href="#clube">Clube</a><a href="#local">Onde estamos</a></nav>
        <a className="header-cta" href={wa("Olá! Vim pelo site do Bom de Bico.")} target="_blank" rel="noreferrer">Fale com a gente <span>↗</span></a>
      </header>

      <section className="hero paper-section" id="inicio">
        <div className="hero-copy reveal">
          <div className="hand-note"><span>feito com carinho no bairro</span><i>✳</i></div>
          <p className="eyebrow">AVIÁRIO E PET SHOP · SÍTIO CERCADO</p>
          <h1>Bom de<br/><em>Bico.</em></h1>
          <p className="hero-tagline">Você ama,<br/><span>a gente cuida.</span></p>
          <p className="hero-description">Rações, medicamentos, banho e tosa e tudo pro seu bichinho, aqui no Sítio Cercado.</p>
          <div className="hero-actions"><a className="button button-orange" href={wa("Olá! Vim pelo site do Bom de Bico.")}>Chamar no WhatsApp <span>↗</span></a><a className="text-link" href="#local">Ver como chegar <span>↓</span></a></div>
          <div className="google-stamp"><span className="google-stars">★★★★★</span><strong>4,8</strong><span>no Google<br/>86 avaliações</span></div>
        </div>
        <div className="hero-art">
          <div className="sun-shape"></div><div className="hero-photo"><img src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=1100&auto=format&fit=crop&q=85" alt="Cachorro dourado, em destaque na foto do Bom de Bico" /><span className="photo-tape"></span></div>
          <div className="hero-sticker"><Paw/><span>AMOR<br/>DE PET</span></div>
          <span className="hero-doodle doodle-one">✳</span><span className="hero-doodle doodle-two">〰</span>
          <div className="photo-caption">um carinho em cada cuidado ♡</div>
        </div>
        <div className="hero-bottom-note">PRA CACHORROS DE TODOS OS TAMANHOS <span>✳</span></div>
      </section>

      <section className="services section-wrap" id="servicos">
        <div className="section-heading"><p className="eyebrow">O QUE TEM POR AQUI</p><h2>Cuidado de<br/><em>ponta a ponta.</em></h2><p>O que seu companheiro precisa, com atendimento pertinho de você.</p></div>
        <div className="service-list">
          <article className="service-tag service-tag-one"><span className="tag-number">01 / CUIDADO</span><div className="service-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M17 39c-7-7-5-19 3-22 6-2 9 4 12 4s6-6 12-4c8 3 10 15 3 22l-11 12c-3 3-6 3-9 0L17 39Z"/><path d="M25 29c-3-5-2-11 1-14m12 14c3-5 2-11-1-14"/></svg></div><div><h3>Banho e Tosa</h3><p>Um cuidado especial pra deixar seu pet limpinho e bem cuidado.</p><a href="#banho">Pedir banho e tosa <span>↗</span></a></div><b className="tag-corner">✳</b></article>
          <article className="service-tag service-tag-two"><span className="tag-number">02 / ALIMENTAÇÃO</span><div className="service-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 29h40l-5 23H17l-5-23Z"/><path d="M18 29c0-8 6-15 14-15s14 7 14 15M25 23c-1-5 2-9 6-10m8 10c1-5-2-9-6-10"/></svg></div><div><h3>Rações</h3><p>Tem pra todo tamanho de focinho. Fale com a gente.</p><a href={wa("Olá! Gostaria de saber sobre as rações disponíveis.")} target="_blank" rel="noreferrer">Consultar no WhatsApp <span>↗</span></a></div><b className="tag-corner">✳</b></article>
          <article className="service-tag service-tag-three"><span className="tag-number">03 / BEM-ESTAR</span><div className="service-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M23 10h18v44H23zM18 19h28M18 45h28"/><path d="M32 25v14m-7-7h14"/></svg></div><div><h3>Medicamentos</h3><p>Medicamentos em geral para o seu pet. Consulte a disponibilidade.</p><a href={wa("Olá! Gostaria de consultar a disponibilidade de medicamentos para pet.")} target="_blank" rel="noreferrer">Consultar disponibilidade <span>↗</span></a></div><b className="tag-corner">✳</b></article>
        </div>
      </section>

      <AdSlot label="Publicidade" />

      <section className="products-section" id="produtos">
        <div className="products-inner">
          <div className="products-heading"><div><p className="eyebrow light">AQUI TEM DE TUDO UM POUQUINHO</p><h2>Tudo pro seu<br/><em>bichinho.</em></h2></div><p>Escolha o que procura e chama a gente pra consultar a disponibilidade.</p></div>
          <div className="category-mosaic">{categories.map(([name, desc, symbol], i) => <a className={"category category-" + (i + 1)} href={wa("Olá! Vi no site a categoria " + name + ". Vocês têm disponível?")} target="_blank" rel="noreferrer" key={name}><span className="category-symbol">{symbol}</span><strong>{name}</strong><small>{desc}</small><span className="category-arrow">↗</span></a>)}<div className="much-more"><span>e muito<br/><em>mais!</em></span><Paw/></div></div>
        </div>
      </section>

      <section className="gallery-section section-wrap" id="galeria">
        <div className="gallery-heading"><div><p className="eyebrow">NOSSA TURMA DE QUATRO PATAS</p><h2>Olha quem<br/><em>é de casa.</em></h2></div><p>Um cantinho reservado pros nossos amigos de focinho. Em breve, fotos enviadas pela comunidade.</p></div>
        <div className="photo-grid">{gallery.map((item, i) => <button className={"polaroid polaroid-" + (i + 1)} key={item.src} onClick={() => setPhoto(i)} aria-label={"Ampliar foto: " + item.alt}><span className="polaroid-tape"></span><img src={item.src} alt={item.alt} loading="lazy"/><span className="polaroid-caption">{item.caption}</span></button>)}</div>
        <p className="gallery-footnote"><Paw/> Fotos ilustrativas enquanto nossa galeria de clientes é preparada.</p>
      </section>

      <AdSlot label="Publicidade" />

      <section className="club-section" id="clube">
        <div className="club-paper">
          <div className="club-copy"><p className="eyebrow">UM CLUBE PRA QUEM AMA CUIDAR</p><h2>Clube<br/><em>Bom de Bico.</em></h2><p>Uma ideia pra ficar ainda mais pertinho de quem faz parte da família.</p><span className="coming-soon">PLANOS EM PREPARAÇÃO</span></div>
          <div className="club-plans">
            <button className={"club-plan " + (clubPlan === "Clube Amigo" ? "selected" : "")} onClick={() => setClubPlan("Clube Amigo")}><span>01 / PRA COMEÇAR</span><strong>Clube Amigo</strong><small>Avisos de novidades e informações da loja.</small><b>Quero participar ↗</b></button>
            <button className={"club-plan " + (clubPlan === "Clube Dono Coruja" ? "selected" : "")} onClick={() => setClubPlan("Clube Dono Coruja")}><span>02 / PRA QUEM É DE CASA</span><strong>Clube Dono Coruja</strong><small>Condições especiais definidas pela loja.</small><b>Quero participar ↗</b></button>
            <a className="button button-green club-cta" href={wa("Olá! Tenho interesse no " + clubPlan + ". Podem me avisar quando estiver disponível?")}>Tenho interesse no {clubPlan} <span>↗</span></a>
          </div>
          <span className="club-star">✳</span>
        </div>
      </section>

      <section className="grooming-section section-wrap" id="banho">
        <div className="grooming-intro"><p className="eyebrow">VAMOS MARCAR UM CUIDADO?</p><h2>Seu pet<br/><em>merece esse carinho.</em></h2><p>Preencha os dados e a gente continua a conversa pelo WhatsApp. O dia e o horário são confirmados diretamente com a loja.</p><div className="grooming-doodle"><Paw/><span>au au!</span></div></div>
        <form className="grooming-form" onSubmit={submitGrooming}>
          <div className="form-title"><span>FICHA DE ATENDIMENTO</span><span>✳ Nº 001</span></div>
          {sent && <p className="form-success"><Paw/> Sua mensagem foi preparada! Continue pelo WhatsApp para confirmar com a loja.</p>}
          <label>Seu nome<input required value={form.nome} onChange={e => setForm({...form,nome:e.target.value})} placeholder="Como podemos te chamar?"/></label>
          <label>Seu WhatsApp<input required type="tel" value={form.whatsapp} onChange={e => setForm({...form,whatsapp:e.target.value})} placeholder="(41) 9 0000-0000"/></label>
          <label>Nome do pet<input required value={form.pet} onChange={e => setForm({...form,pet:e.target.value})} placeholder="Nome do seu companheiro"/></label>
          <div className="form-row"><label>Porte<select value={form.porte} onChange={e => setForm({...form,porte:e.target.value})}><option>Pequeno</option><option>Médio</option><option>Grande</option></select></label><label>Serviço<select value={form.servico} onChange={e => setForm({...form,servico:e.target.value})}><option>Banho</option><option>Tosa</option><option>Banho e tosa</option></select></label></div>
          <label>Dia preferido<input type="text" value={form.dia} onChange={e => setForm({...form,dia:e.target.value})} placeholder="Ex.: sábado ou a combinar"/></label>
          <label>Observações<textarea rows={3} value={form.obs} onChange={e => setForm({...form,obs:e.target.value})} placeholder="Conte algo que a gente precisa saber (opcional)"/></label>
          <button className="button button-orange form-submit" type="submit">Enviar pelo WhatsApp <span>↗</span></button>
          <small className="form-disclaimer">O envio não confirma o agendamento. A loja combina os detalhes com você pelo WhatsApp.</small>
        </form>
      </section>

      <AdSlot label="Publicidade" />

      <section className="location-section" id="local">
        <div className="location-inner">
          <div className="location-copy"><p className="eyebrow light">PERTINHO DE VOCÊ</p><h2>Passa<br/><em>por aqui!</em></h2><p className="location-address">{ADDRESS}</p><p className="location-hours">Horário de funcionamento<br/><strong>Consulte nosso horário no WhatsApp</strong></p><div className="location-actions"><a className="button button-orange" href={MAPS} target="_blank" rel="noreferrer">Abrir no Google Maps ↗</a><a className="location-phone" href="tel:+554135646441">Ligar (41) 3564-6441</a><a className="location-phone" href={wa("Olá! Gostaria de informações sobre a loja.")} target="_blank" rel="noreferrer">WhatsApp (41) 9 9695-3076</a></div><p className="pickup-note">Compre na loja, retire na loja ou peça entrega.</p><div className="social-links"><a href="https://www.instagram.com/petbomdebico/" target="_blank" rel="noreferrer">Instagram @petbomdebico ↗</a><a href="https://www.facebook.com/petbomdebico" target="_blank" rel="noreferrer">Facebook @petbomdebico ↗</a></div></div>
          <div className="map-frame"><iframe title="Mapa do Aviário e Pet Shop Bom de Bico" src={"https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed"} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><span className="map-label">É aqui que a gente se encontra <Paw/></span></div>
        </div>
      </section>

      <footer className="site-footer"><a className="footer-brand" href="#inicio">Bom de Bico<span>AVIÁRIO E PET SHOP</span></a><p>Você ama, a gente cuida.</p><div><a href={wa("Olá! Vim pelo site do Bom de Bico.")} target="_blank" rel="noreferrer">Fale com a loja ↗</a><a href={wa("Olá! Quero anunciar no site do Bom de Bico.")} target="_blank" rel="noreferrer">Anuncie aqui ↗</a></div><small>© {new Date().getFullYear()} Aviário e Pet Shop Bom de Bico · Sítio Cercado, Curitiba - PR</small></footer>

      <a className="floating-whatsapp" href={wa("Olá! Vim pelo site do Bom de Bico.")} target="_blank" rel="noreferrer" aria-label="Chamar o Bom de Bico no WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a12 12 0 0 0-10.3 18.2L4 28l7-1.8A12 12 0 1 0 16 3Zm0 21.8a9.7 9.7 0 0 1-4.9-1.3l-.4-.2-4.1 1.1 1.1-4-.3-.4A9.8 9.8 0 1 1 16 24.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.8 5.1.8.4 1.5.6 2 .7.8.2 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z"/></svg></a>

      {photo !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada" onClick={() => setPhoto(null)}><button className="lightbox-close" onClick={() => setPhoto(null)} aria-label="Fechar">×</button><img src={gallery[photo].src} alt={gallery[photo].alt}/><p>{gallery[photo].caption}</p></div>}
      {cookie && <div className="cookie-note"><p>Este site usa armazenamento local para lembrar sua preferência de cookies. Recursos de publicidade só serão ativados após configuração.</p><button onClick={acceptCookies}>Entendi</button></div>}
    </main>
  );
}

function AdSlot({ label }: { label: string }) {
  return <div className="ad-slot" aria-label={label}><span>{label}</span><div>Espaço reservado</div></div>;
}
