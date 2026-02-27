const products = [
  {
    id: 0,
    name: "Chronos Noir",
    collection: "Série Nuit",
    category: "automatico",
    ref: "CHR-2024-N01",
    price: 28500,
    tagline:
      "Quando a escuridão encontra a perfeição. Um manifesto em aço e safira.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Aço Inoxidável 904L",
      Diâmetro: "42mm",
      Espessura: "11.2mm",
      "Resistência à Água": "300m / 30 ATM",
      Movimento: "Cal. CH-3235 Automático",
      "Reserva de Marcha": "70 horas",
      Vidro: "Safira Duplex AR",
      Pulseira: "Couro de Aligátor",
    },
  },
  {
    id: 1,
    name: "Atelier Blanc",
    collection: "Série Lumière",
    category: "automatico",
    ref: "CHR-2024-L02",
    price: 34900,
    tagline:
      "Branco que não é ausência de cor. É a presença de toda elegância possível.",
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Ouro Branco 18K",
      Diâmetro: "40mm",
      Espessura: "9.8mm",
      "Resistência à Água": "100m / 10 ATM",
      Movimento: "Cal. CH-9001 Automático",
      "Reserva de Marcha": "64 horas",
      Vidro: "Safira Triplex",
      Pulseira: "Couro de Crocodilo",
    },
  },
  {
    id: 2,
    name: "Grand Complication",
    collection: "Série Heritage",
    category: "complication",
    ref: "CHR-2024-H01",
    price: 89000,
    tagline:
      "A máquina mais complexa que a humanidade conseguiu miniaturizar. Um legado.",
    images: [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Platina 950",
      Diâmetro: "44mm",
      Espessura: "14.5mm",
      "Resistência à Água": "50m / 5 ATM",
      Movimento: "Cal. CH-G01 Manual",
      "Reserva de Marcha": "96 horas",
      Complicações: "Tourbillon, Repeater, Calendário Perpétuo",
      Pulseira: "Couro de Jacaré Solitaire",
    },
  },
  {
    id: 3,
    name: "Veloce Cronografo",
    collection: "Série Sport",
    category: "cronografo",
    ref: "CHR-2024-S03",
    price: 19800,
    tagline:
      "Cada segundo capturado com a precisão de quem nunca aceita menos que o máximo.",
    images: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Titânio Grau 5",
      Diâmetro: "43mm",
      Espessura: "13.2mm",
      "Resistência à Água": "200m / 20 ATM",
      Movimento: "Cal. CH-4130 Automático",
      "Reserva de Marcha": "68 horas",
      Vidro: "Safira Anti-Reflexo",
      Pulseira: "Borracha / Aço",
    },
  },
  {
    id: 4,
    name: "Minimaliste",
    collection: "Série Pure",
    category: "automatico",
    ref: "CHR-2024-P01",
    price: 16500,
    tagline:
      "A perfeição não é quando não há mais nada para adicionar, mas quando não há mais nada para remover.",
    images: [
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Aço PVD Preto",
      Diâmetro: "38mm",
      Espessura: "7.9mm",
      "Resistência à Água": "50m / 5 ATM",
      Movimento: "Cal. CH-2824 Automático",
      "Reserva de Marcha": "42 horas",
      Vidro: "Safira Plana",
      Pulseira: "Couro Sueco",
    },
  },
  {
    id: 5,
    name: "Réserve Marine",
    collection: "Série Aqua",
    category: "automatico",
    ref: "CHR-2024-A01",
    price: 22300,
    tagline:
      "Das profundezas do oceano à superfície do elegante. Dois mundos, um relógio.",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Aço Cerâmica",
      Diâmetro: "42mm",
      Espessura: "12.1mm",
      "Resistência à Água": "600m / 60 ATM",
      Movimento: "Cal. CH-3235 Automático",
      "Reserva de Marcha": "70 horas",
      Bezel: "Cerâmica Unidirecional",
      Pulseira: "Aço Oyster",
    },
  },
  {
    id: 6,
    name: "Tourbillon Céleste",
    collection: "Série Heritage",
    category: "complication",
    ref: "CHR-2024-H02",
    price: 142000,
    tagline:
      "O tourbillon é a dança perpétua da gravidade vencida. Uma obra-prima em movimento.",
    images: [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Ouro Rosa 18K",
      Diâmetro: "43mm",
      Espessura: "13.8mm",
      "Resistência à Água": "30m / 3 ATM",
      Movimento: "Cal. CH-T01 Manual Tourbillon",
      "Reserva de Marcha": "80 horas",
      Complicações: "Tourbillon Flying, Fuso Duplo",
      Pulseira: "Couro de Avestruz",
    },
  },
  {
    id: 7,
    name: "Perpetuel Calendrier",
    collection: "Série Heritage",
    category: "complication",
    ref: "CHR-2024-H03",
    price: 67500,
    tagline:
      "Um calendário que conhece cada ano bissexto até 2100. A matemática como poesia.",
    images: [
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Aço Inoxidável 316L",
      Diâmetro: "41mm",
      Espessura: "12.4mm",
      "Resistência à Água": "50m / 5 ATM",
      Movimento: "Cal. CH-P01 Automático",
      "Reserva de Marcha": "72 horas",
      Complicações: "Calendário Perpétuo, Fase da Lua",
      Pulseira: "Couro de Vitela",
    },
  },
  {
    id: 8,
    name: "Sport Extreme",
    collection: "Série Sport",
    category: "cronografo",
    ref: "CHR-2024-S01",
    price: 24600,
    tagline:
      "Construído para os extremos. Feito para aqueles que não conhecem limites.",
    images: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Carbono Forjado",
      Diâmetro: "45mm",
      Espessura: "14.2mm",
      "Resistência à Água": "300m / 30 ATM",
      Movimento: "Cal. CH-4131 Automático",
      "Reserva de Marcha": "72 horas",
      Vidro: "Safira Antirreflexo",
      Pulseira: "Borracha Fluorelastômero",
    },
  },
  {
    id: 9,
    name: "Racing Chrono",
    collection: "Série Sport",
    category: "cronografo",
    ref: "CHR-2024-S02",
    price: 31200,
    tagline:
      "Inspirado nas pistas. Cada subdial conta a história de uma corrida perfeita.",
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Aço PVD Antracite",
      Diâmetro: "44mm",
      Espessura: "13.5mm",
      "Resistência à Água": "100m / 10 ATM",
      Movimento: "Cal. CH-4132 Automático",
      "Reserva de Marcha": "65 horas",
      Bezel: "Taquímetro em Cerâmica",
      Pulseira: "Couro Alcântara",
    },
  },
  {
    id: 10,
    name: "Lumière Rose",
    collection: "Série Lumière",
    category: "automatico",
    ref: "CHR-2024-L01",
    price: 41800,
    tagline:
      "O ouro rosa como extensão da pele. Elegância que transcende o gênero.",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Ouro Rosa 18K",
      Diâmetro: "39mm",
      Espessura: "9.2mm",
      "Resistência à Água": "50m / 5 ATM",
      Movimento: "Cal. CH-9002 Automático",
      "Reserva de Marcha": "60 horas",
      Vidro: "Safira Bombê",
      Pulseira: "Couro de Python",
    },
  },
  {
    id: 11,
    name: "Nuit Étoilée",
    collection: "Série Nuit",
    category: "automatico",
    ref: "CHR-2024-N02",
    price: 38900,
    tagline:
      "O céu estrelado gravado no mostrador. Astronomia e relojoaria em perfeita harmonia.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Aço Escovado",
      Diâmetro: "41mm",
      Espessura: "10.8mm",
      "Resistência à Água": "100m / 10 ATM",
      Movimento: "Cal. CH-3236 Automático",
      "Reserva de Marcha": "70 horas",
      Mostrador: "Météorite (Aerolite)",
      Pulseira: "Couro Preto Cobalto",
    },
  },
  {
    id: 12,
    name: "Pure Titanium",
    collection: "Série Pure",
    category: "automatico",
    ref: "CHR-2024-P02",
    price: 18700,
    tagline:
      "Titânio grau aeroespacial. Leveza que desafia a presença, presença que desafia o tempo.",
    images: [
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Titânio Grau 23",
      Diâmetro: "40mm",
      Espessura: "8.6mm",
      "Resistência à Água": "100m / 10 ATM",
      Movimento: "Cal. CH-2825 Automático",
      "Reserva de Marcha": "50 horas",
      "Peso Total": "72g",
      Pulseira: "Titânio Integrado",
    },
  },
  {
    id: 13,
    name: "Aqua Profonde",
    collection: "Série Aqua",
    category: "automatico",
    ref: "CHR-2024-A02",
    price: 29400,
    tagline:
      "Certificado para 1000 metros de profundidade. Onde a luz cessa, o CHRONOS brilha.",
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Aço Super-LumiNova",
      Diâmetro: "44mm",
      Espessura: "15.2mm",
      "Resistência à Água": "1000m / 100 ATM",
      Movimento: "Cal. CH-3237 Automático",
      "Reserva de Marcha": "70 horas",
      "Válvula Hélio": "Automática",
      Pulseira: "Borracha Integrada",
    },
  },
  {
    id: 14,
    name: "Monopusher Classic",
    collection: "Série Sport",
    category: "cronografo",
    ref: "CHR-2024-S04",
    price: 44500,
    tagline:
      "Um só botão. Uma só decisão. A elegância do cronógrafo clássico em sua forma mais pura.",
    images: [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
    ],
    specs: {
      "Material da Caixa": "Ouro Amarelo 18K",
      Diâmetro: "40mm",
      Espessura: "13.0mm",
      "Resistência à Água": "30m / 3 ATM",
      Movimento: "Cal. CH-4133 Manual",
      "Reserva de Marcha": "65 horas",
      Complicações: "Cronógrafo Monopusher",
      Pulseira: "Couro de Lagarto",
    },
  },
];

const reviews = [
  {
    author: "Rafael M.",
    date: "Janeiro 2024",
    text: "Recebi meu Chronos Noir há 3 semanas e cada detalhe é uma obra-prima. O peso na mão, o tick suave, a qualidade do couro... Valeu absolutamente cada centavo.",
  },
  {
    author: "Camila S.",
    date: "Fevereiro 2024",
    text: "Comprei o Atelier Blanc para o meu marido como presente de aniversário. O serviço de entrega foi impecável, embalagem de luxo e o relógio é absolutamente magnífico.",
  },
  {
    author: "André P.",
    date: "Março 2024",
    text: "Colecionador há 15 anos. O Grand Complication é o melhor relógio que já tive. O tourbillon visível pelo caseback é de tirar o fôlego.",
  },
];

let cart = JSON.parse(localStorage.getItem("chronos_cart") || "[]");

function saveCart() {
  localStorage.setItem("chronos_cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const existing = cart.find((i) => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart();
  updateCartCount();
  showToast("Produto adicionado ao carrinho");
}

function removeFromCart(productId) {
  cart = cart.filter((i) => i.id !== productId);
  saveCart();
  updateCartCount();
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById("cartCount");
  el.textContent = total;
  el.classList.remove("bump");
  void el.offsetWidth;
  el.classList.add("bump");
}

function cartTotal() {
  return cart.reduce((s, i) => {
    const p = products.find((pr) => pr.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}

function fmtPrice(n) {
  return "R$ " + n.toLocaleString("pt-BR");
}

let currentPage = "home";

function navigate(page, productId) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  currentPage = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (page === "catalog") renderCatalog("all");
  if (page === "cart") renderCart();
  if (page === "checkout") renderCheckout();
  if (page === "product" && productId !== undefined) renderProduct(productId);
  initReveal();
  renderFooters();
}

function openProduct(id) {
  navigate("product", id);
}

function renderCatalog(filter) {
  const grid = document.getElementById("catalogGrid");
  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);
  grid.innerHTML = filtered
    .map(
      (p) => `
      <div class="product-card" onclick="openProduct(${p.id})">
        <div class="product-img-wrap">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
          <div class="product-quick">Ver Detalhes</div>
        </div>
        <div class="product-info">
          <p class="product-collection">${p.collection}</p>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-ref">${p.ref}</p>
          <p class="product-price">${fmtPrice(p.price)}</p>
        </div>
      </div>
    `,
    )
    .join("");
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
    btn.onclick = () => renderCatalog(btn.dataset.filter);
  });
}

function renderProduct(id) {
  const p = products[id];
  if (!p) return;
  document.getElementById("mainProductImg").src = p.images[0];
  document.getElementById("breadcrumbName").textContent = p.name;
  document.getElementById("productCollection").textContent = p.collection;
  document.getElementById("productTitle").textContent = p.name;
  document.getElementById("productRef").textContent = "Ref. " + p.ref;
  document.getElementById("productPrice").textContent = fmtPrice(p.price);
  document.getElementById("productInstall").textContent =
    "ou 12× de " + fmtPrice(Math.round(p.price / 12)) + " sem juros";
  document.getElementById("productTagline").textContent = p.tagline;
  document.getElementById("addToCartBtn").onclick = () => addToCart(id);

  const thumbs = document.getElementById("galleryThumbs");
  thumbs.innerHTML = p.images
    .map(
      (img, i) => `
      <div class="gallery-thumb ${i === 0 ? "active" : ""}" onclick="switchImg('${img}',this)">
        <img src="${img}" alt="">
      </div>
    `,
    )
    .join("");

  const specs = document.getElementById("specsGrid");
  specs.innerHTML = Object.entries(p.specs)
    .map(
      ([k, v]) => `
      <div class="spec-row"><span class="spec-key">${k}</span><span class="spec-val">${v}</span></div>
    `,
    )
    .join("");

  document.getElementById("reviewsContainer").innerHTML = reviews
    .map(
      (r) => `
      <div class="review-item">
        <div class="review-header"><span class="review-author">${r.author}</span><span class="review-date">${r.date}</span></div>
        <div class="review-stars">★★★★★</div>
        <p class="review-text">${r.text}</p>
      </div>
    `,
    )
    .join("");

  document.querySelectorAll(".variant-btn").forEach((b) => {
    b.onclick = () => {
      document
        .querySelectorAll(".variant-btn")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
    };
  });
}

function switchImg(src, el) {
  document.getElementById("mainProductImg").src = src;
  document
    .querySelectorAll(".gallery-thumb")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cartItemCount").textContent =
    count + (count === 1 ? " item" : " itens");
  const el = document.getElementById("cartContent");
  if (cart.length === 0) {
    el.innerHTML = `<div class="empty-cart"><h2>Seu carrinho está vazio.</h2><p>Explore nossa coleção e encontre o relógio perfeito.</p><button class="btn-primary" onclick="navigate('catalog')"><span>Ver Coleção</span></button></div>`;
    return;
  }
  const shipping = cartTotal() >= 20000 ? 0 : 350;
  el.innerHTML = `
      <div class="cart-layout">
        <div class="cart-items">
          ${cart
            .map((item) => {
              const p = products.find((pr) => pr.id === item.id);
              if (!p) return "";
              return `<div class="cart-item">
              <img class="cart-item-img" src="${p.images[0]}" alt="${p.name}">
              <div>
                <p class="cart-item-name">${p.name}</p>
                <p class="cart-item-ref">${p.collection} · ${p.ref}</p>
                <p class="cart-item-price">${fmtPrice(p.price)}</p>
                <div class="qty-control">
                  <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
                  <span class="qty-num">${item.qty}</span>
                  <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
                </div>
              </div>
              <button class="remove-btn" onclick="removeFromCart(${p.id})">Remover</button>
            </div>`;
            })
            .join("")}
        </div>
        <div class="cart-summary">
          <p class="summary-title">Resumo do Pedido</p>
          <div class="summary-row"><span>Subtotal</span><span>${fmtPrice(cartTotal())}</span></div>
          <div class="summary-row"><span>Frete</span><span>${shipping === 0 ? "Grátis" : fmtPrice(shipping)}</span></div>
          <div class="summary-total"><span>Total</span><span>${fmtPrice(cartTotal() + shipping)}</span></div>
          <button class="btn-secondary" onclick="navigate('checkout')">Finalizar Compra</button>
          <div style="text-align:center;margin-top:20px;font-size:10px;color:var(--muted)">
            🔒 Pagamento 100% seguro · SSL 256-bit
          </div>
        </div>
      </div>`;
}

function renderCheckout() {
  if (cart.length === 0) {
    document.getElementById("checkoutContent").innerHTML =
      `<div style="text-align:center;padding:80px 0"><h2 style="font-family:var(--font-serif);font-size:40px;color:var(--white);margin-bottom:20px">Carrinho Vazio</h2><p style="color:var(--muted);margin-bottom:40px">Adicione produtos antes de finalizar.</p><button class="btn-primary" onclick="navigate('catalog')"><span>Ver Coleção</span></button></div>`;
    return;
  }
  const shipping = cartTotal() >= 20000 ? 0 : 350;
  document.getElementById("checkoutContent").innerHTML = `
      <div class="checkout-header"><h1>Finalizar<br>Compra</h1></div>
      <div class="checkout-layout">
        <form class="checkout-form" onsubmit="confirmOrder(event)">
          <div class="form-section">
            <p class="form-section-title">Informações Pessoais</p>
            <div class="form-grid two">
              <div class="form-group"><label class="form-label">Nome</label><input class="form-input" placeholder="Seu nome" required></div>
              <div class="form-group"><label class="form-label">Sobrenome</label><input class="form-input" placeholder="Seu sobrenome" required></div>
            </div>
            <div class="form-grid" style="margin-top:20px">
              <div class="form-group"><label class="form-label">E-mail</label><input type="email" class="form-input" placeholder="seu@email.com" required></div>
              <div class="form-group" style="margin-top:20px"><label class="form-label">Telefone</label><input class="form-input" placeholder="+55 (11) 00000-0000"></div>
            </div>
          </div>
          <div class="form-section">
            <p class="form-section-title">Endereço de Entrega</p>
            <div class="form-grid two">
              <div class="form-group"><label class="form-label">CEP</label><input class="form-input" placeholder="00000-000" required></div>
              <div class="form-group"><label class="form-label">Estado</label><select class="form-select"><option>São Paulo</option><option>Rio de Janeiro</option><option>Minas Gerais</option><option>Outro</option></select></div>
            </div>
            <div class="form-grid" style="margin-top:20px">
              <div class="form-group"><label class="form-label">Endereço</label><input class="form-input" placeholder="Rua, número" required></div>
              <div class="form-group" style="margin-top:20px"><label class="form-label">Complemento</label><input class="form-input" placeholder="Apto, sala..."></div>
            </div>
          </div>
          <!-- Seção de pagamento removida -->
          <button class="checkout-submit" type="submit">Confirmar Pedido — ${fmtPrice(cartTotal() + shipping)}</button>
        </form>
        <div class="order-summary-box">
          <p class="summary-title">Seu Pedido</p>
          ${cart
            .map((item) => {
              const p = products.find((pr) => pr.id === item.id);
              if (!p) return "";
              return `
            <div class="order-item">
              <img class="order-item-img" src="${p.images[0]}" alt="">
              <div>
                <p class="order-item-name">${p.name} × ${item.qty}</p>
                <p class="order-item-price">${fmtPrice(p.price * item.qty)}</p>
              </div>
            </div>`;
            })
            .join("")}
          <div class="summary-row" style="margin-top:20px"><span>Subtotal</span><span>${fmtPrice(cartTotal())}</span></div>
          <div class="summary-row"><span>Frete</span><span>${shipping === 0 ? "Grátis" : fmtPrice(shipping)}</span></div>
          <div class="summary-total"><span>Total</span><span>${fmtPrice(cartTotal() + shipping)}</span></div>
        </div>
      </div>`;
}

function confirmOrder(e) {
  e.preventDefault();
  cart = [];
  saveCart();
  updateCartCount();
  document.getElementById("checkoutContent").innerHTML = `
      <div class="order-confirmed">
        <div class="confirmed-check">✓</div>
        <h1 class="confirmed-title">Pedido Confirmado.</h1>
        <p class="confirmed-sub">Obrigado por escolher CHRONOS. Seu relógio está sendo preparado com o cuidado que merece. Você receberá um e-mail com os detalhes de rastreamento em breve.</p>
        <p style="font-size:11px;letter-spacing:2px;color:var(--gold);margin-bottom:40px">PRAZO ESTIMADO: 3 DIAS ÚTEIS</p>
        <button class="btn-primary" onclick="navigate('home')"><span>Voltar ao Início</span></button>
      </div>`;
}

const footerHTML = `
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <span class="nav-logo" onclick="navigate('home')">CHRONOS<span style="color:var(--gold)">.</span></span>
        <p>Relógios de alta relojoaria, criados para durar gerações. Cada peça é um manifesto de precisão, design e exclusividade.</p>
      </div>
      <div>
        <p class="footer-col-title">Navegação</p>
        <ul class="footer-links">
          <li><a onclick="navigate('home')">Início</a></li>
          <li><a onclick="navigate('catalog')">Coleção</a></li>
          <li><a onclick="navigate('about')">A Marca</a></li>
          <li><a onclick="navigate('contact')">Contato</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Legal</p>
        <ul class="footer-links">
          <li><a onclick="navigate('policies')">Política de Troca</a></li>
          <li><a onclick="navigate('policies')">Privacidade</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Contato</p>
        <ul class="footer-links">
          <li><a>Av. Paulista, 1374, SP</a></li>
          <li><a>+55 (11) 3040-7000</a></li>
          <li><a>atendimento@chronos.com.br</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2024 CHRONOS Manufacture. Todos os direitos reservados.</p>
      <div class="footer-socials">
        <a>Instagram</a>
        <a>LinkedIn</a>
        <a>WhatsApp</a>
      </div>
    </div>
  </footer>`;

function renderFooters() {
  document.querySelectorAll('[id^="footer-"]').forEach((el) => {
    el.innerHTML = footerHTML;
  });
}

function switchPolicy(id, el) {
  document
    .querySelectorAll(".policy-content")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".policy-tab")
    .forEach((t) => t.classList.remove("active"));
  document.getElementById("policy-" + id).classList.add("active");
  el.classList.add("active");
}

function submitContact(e) {
  e.preventDefault();
  showToast("Mensagem enviada com sucesso!");
  e.target.reset();
}

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  document.getElementById("toastText").textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

window.addEventListener("scroll", () => {
  document
    .getElementById("mainNav")
    .classList.toggle("scrolled", window.scrollY > 60);
  initReveal();
});

function initReveal() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) el.classList.add("visible");
  });
}

function openMobileMenu() {
  document.getElementById("mobileMenu").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
  document.body.style.overflow = "";
}

updateCartCount();
renderFooters();
renderCatalog("all");
setTimeout(initReveal, 500);
