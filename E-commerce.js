/* =========================================================
   AURELIA — App JavaScript
   Sections: Data, State, Render, Cart, Wishlist, Filters,
             Search, Sliders, Animations, Misc UI
========================================================= */

/* ---------- PRODUCT DATA ---------- */
const PRODUCTS = [
  { id: 1, name: "Oversized Wool Coat", category: "Women", price: 189, oldPrice: 240, rating: 4.8, reviews: 124, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", badge: "sale", desc: "A relaxed wool-blend coat with deep pockets and a belted waist — built for cold mornings." },
  { id: 2, name: "Classic Denim Jacket", category: "Men", price: 98, oldPrice: null, rating: 4.6, reviews: 89, img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80", badge: "new", desc: "Mid-wash denim jacket with a tailored cut. Layers well in every season." },
  { id: 3, name: "Kids Rainbow Hoodie", category: "Kids", price: 42, oldPrice: 55, rating: 4.9, reviews: 67, img: "https://images.unsplash.com/photo-1519278409-1f56fdda7485?w=600&q=80", badge: "sale", desc: "Soft fleece hoodie in playful colorways, sized for ages 4–10." },
  { id: 4, name: "Leather Crossbody Bag", category: "Accessories", price: 76, oldPrice: null, rating: 4.7, reviews: 152, img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80", badge: null, desc: "Full-grain leather crossbody with an adjustable strap and brass hardware." },
  { id: 5, name: "Minimalist Sneakers", category: "Shoes", price: 112, oldPrice: 140, rating: 4.8, reviews: 203, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80", badge: "sale", desc: "Clean-lined leather sneakers with a cushioned sole for all-day wear." },
  { id: 6, name: "Silk Wrap Blouse", category: "Women", price: 84, oldPrice: null, rating: 4.5, reviews: 58, img: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600&q=80", badge: "new", desc: "Fluid silk blouse with a soft wrap neckline. Pairs with everything." },
  { id: 7, name: "Tailored Chino Trousers", category: "Men", price: 68, oldPrice: null, rating: 4.4, reviews: 71, img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80", badge: null, desc: "Slim-tapered chinos in brushed cotton twill. A wardrobe staple." },
  { id: 8, name: "Kids Canvas Sneakers", category: "Kids", price: 38, oldPrice: null, rating: 4.6, reviews: 44, img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&q=80", badge: null, desc: "Durable canvas sneakers built for the playground, easy to wash." },
  { id: 9, name: "Gold Hoop Earrings", category: "Accessories", price: 34, oldPrice: 45, rating: 4.9, reviews: 96, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", badge: "sale", desc: "14k gold-plated hoops, lightweight enough for everyday wear." },
  { id: 10, name: "Suede Chelsea Boots", category: "Shoes", price: 145, oldPrice: null, rating: 4.7, reviews: 118, img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&q=80", badge: "new", desc: "Classic Chelsea silhouette in soft suede with an elastic side panel." },
  { id: 11, name: "Ribbed Knit Sweater", category: "Women", price: 72, oldPrice: 90, rating: 4.6, reviews: 84, img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80", badge: "sale", desc: "Soft ribbed knit with a relaxed fit — layers beautifully under coats." },
  { id: 12, name: "Linen Short-Sleeve Shirt", category: "Men", price: 56, oldPrice: null, rating: 4.3, reviews: 39, img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80", badge: null, desc: "Breathable linen shirt with a relaxed collar, perfect for warm days." },
  { id: 13, name: "Kids Puffer Vest", category: "Kids", price: 49, oldPrice: null, rating: 4.5, reviews: 28, img: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?w=600&q=80", badge: "new", desc: "Lightweight puffer vest that packs down small for on-the-go layering." },
  { id: 14, name: "Structured Leather Belt", category: "Accessories", price: 29, oldPrice: null, rating: 4.4, reviews: 52, img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80", badge: null, desc: "Full-grain leather belt with a brushed brass buckle." },
  { id: 15, name: "Running Performance Shoes", category: "Shoes", price: 128, oldPrice: 160, rating: 4.8, reviews: 167, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", badge: "sale", desc: "Engineered mesh upper with responsive cushioning for daily mileage." },
  { id: 16, name: "Pleated Midi Skirt", category: "Women", price: 64, oldPrice: null, rating: 4.5, reviews: 47, img: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=600&q=80", badge: null, desc: "Flowing pleated midi skirt that moves with you, in a soft satin finish." },
];

const CATEGORY_IMAGES = {
  Men: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&q=80",
  Women: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80",
  Kids: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6d8?w=500&q=80",
  Accessories: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500&q=80",
  Shoes: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
};

const REVIEWS = [
  { name: "Maya Thompson", role: "Verified Buyer", rating: 5, quote: "The wool coat fits better than anything I've bought in years — true to size and the fabric feels genuinely warm.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { name: "Daniel Reyes", role: "Verified Buyer", rating: 5, quote: "Ordered the Chelsea boots on a whim and now I want every color. Shipping was faster than promised too.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
  { name: "Priya Nair", role: "Verified Buyer", rating: 4, quote: "Great quality for the price. My only note is I'd love a few more colorways for the knit sweater.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
  { name: "Jonas Berg", role: "Verified Buyer", rating: 5, quote: "Bought the kids hoodie and rainbow joggers for my daughter — they survived the washing machine and a muddy playground.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" },
  { name: "Aisha Khan", role: "Verified Buyer", rating: 5, quote: "Customer service helped me size down my order within minutes over chat. The blouse itself is beautiful.", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80" },
];

/* ---------- STATE ---------- */
const state = {
  cart: [],          // { id, qty }
  wishlist: [],       // [id, id, ...]
  activeCategory: "all",
  maxPrice: 300,
  sort: "default",
  searchQuery: "",
};

const SHIPPING_THRESHOLD = 75;
const SHIPPING_COST = 6.99;

/* ---------- HELPERS ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const fmt = (n) => `$${n.toFixed(2)}`;
const getProduct = (id) => PRODUCTS.find(p => p.id === id);

function starString(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* =========================================================
   RENDER: CATEGORIES
========================================================= */
function renderCategories() {
  const grid = $("#catGrid");
  grid.className = "cat-grid stagger";
  grid.innerHTML = Object.keys(CATEGORY_IMAGES).map(cat => {
    const count = PRODUCTS.filter(p => p.category === cat).length;
    return `
      <div class="cat-card" data-cat="${cat}">
        <img src="${CATEGORY_IMAGES[cat]}" alt="${cat} category" loading="lazy">
        <div class="cat-card-label">
          <span class="cat-name">${cat}</span>
          <span class="cat-count">${count} items</span>
        </div>
      </div>`;
  }).join("");

  grid.querySelectorAll(".cat-card").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.dataset.cat;
      state.activeCategory = cat;
      $$(".filter-chip").forEach(c => c.classList.toggle("active", c.dataset.filter === cat));
      document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
      renderProducts();
    });
  });
}

/* =========================================================
   RENDER: PRODUCT CARD (shared by grid + featured)
========================================================= */
function productCardHTML(p) {
  const inWishlist = state.wishlist.includes(p.id);
  const badge = p.badge === "sale"
    ? `<span class="sale-badge">Sale</span>`
    : p.badge === "new"
      ? `<span class="new-badge">New</span>`
      : "";
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-media">
        ${badge}
        <button class="wish-btn ${inWishlist ? "active" : ""}" data-action="wishlist" data-id="${p.id}" aria-label="Toggle wishlist">
          <svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
        </button>
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <button class="quick-view-btn" data-action="quickview" data-id="${p.id}">Quick View</button>
      </div>
      <div class="product-info">
        <span class="product-cat">${p.category}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${starString(p.rating)}</span>
          <span class="rating-count">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <div class="price-group">
            <span class="price-now">${fmt(p.price)}</span>
            ${p.oldPrice ? `<span class="price-old">${fmt(p.oldPrice)}</span>` : ""}
          </div>
          <button class="add-cart-btn" data-action="add-cart" data-id="${p.id}" aria-label="Add to cart">
            <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
          </button>
        </div>
      </div>
    </article>`;
}

/* =========================================================
   RENDER: PRODUCT GRID (with filters/sort/search applied)
========================================================= */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (state.activeCategory !== "all") {
    list = list.filter(p => p.category === state.activeCategory);
  }
  list = list.filter(p => p.price <= state.maxPrice);

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.trim().toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }

  switch (state.sort) {
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "rating": list.sort((a, b) => b.rating - a.rating); break;
  }

  return list;
}

function renderProducts() {
  const grid = $("#productGrid");
  const list = getFilteredProducts();

  $("#resultsCount").textContent = `${list.length} product${list.length !== 1 ? "s" : ""} found`;
  $("#noResults").hidden = list.length !== 0;
  grid.innerHTML = list.map(productCardHTML).join("");
  // stagger card entrance delay
  grid.querySelectorAll(".product-card").forEach((card, i) => {
    card.style.animationDelay = `${Math.min(i, 8) * 0.05}s`;
  });
}

function renderFeatured() {
  const grid = $("#featuredGrid");
  const list = PRODUCTS.filter(p => p.badge === "sale").slice(0, 4);
  grid.innerHTML = list.map(productCardHTML).join("");
  grid.querySelectorAll(".product-card").forEach((card, i) => {
    card.style.animationDelay = `${i * 0.06}s`;
  });
}

/* =========================================================
   CART LOGIC
========================================================= */
function addToCart(id, btnEl) {
  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id, qty: 1 });
  }
  renderCart();
  updateBadges();
  const product = getProduct(id);
  showToast(`${product.name} added to your bag`);

  if (btnEl) {
    btnEl.classList.add("added");
    setTimeout(() => btnEl.classList.remove("added"), 700);
  }
}

function removeFromCart(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  renderCart();
  updateBadges();
}

function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    renderCart();
    updateBadges();
  }
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const p = getProduct(item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function renderCart() {
  const itemsWrap = $("#cartItems");
  const emptyWrap = $("#cartEmpty");
  const footer = $("#drawerFooter");
  const subtotal = cartSubtotal();
  const totalQty = state.cart.reduce((s, i) => s + i.qty, 0);

  $("#drawerCount").textContent = `(${totalQty})`;

  if (state.cart.length === 0) {
    itemsWrap.innerHTML = "";
    emptyWrap.classList.add("show");
    footer.style.display = "none";
    return;
  }

  emptyWrap.classList.remove("show");
  footer.style.display = "block";

  itemsWrap.innerHTML = state.cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return "";
    return `
      <div class="cart-item" data-id="${p.id}">
        <img src="${p.img}" alt="${p.name}">
        <div class="cart-item-info">
          <span class="cart-item-name">${p.name}</span>
          <span class="cart-item-cat">${p.category}</span>
          <div class="cart-item-row">
            <div class="qty-stepper">
              <button data-action="qty-down" data-id="${p.id}" aria-label="Decrease quantity">&minus;</button>
              <span>${item.qty}</span>
              <button data-action="qty-up" data-id="${p.id}" aria-label="Increase quantity">&plus;</button>
            </div>
            <span class="cart-item-price">${fmt(p.price * item.qty)}</span>
          </div>
          <button class="cart-item-remove" data-action="remove-cart" data-id="${p.id}">Remove</button>
        </div>
      </div>`;
  }).join("");

  const shipping = subtotal >= SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_COST;
  $("#cartSubtotal").textContent = fmt(subtotal);
  $("#cartShipping").textContent = shipping === 0 ? "Free" : fmt(shipping);
  $("#cartTotal").textContent = fmt(subtotal + shipping);
}

function updateBadges() {
  const cartCount = state.cart.reduce((s, i) => s + i.qty, 0);
  const cartBadge = $("#cartCount");
  cartBadge.textContent = cartCount;
  cartBadge.classList.toggle("show", cartCount > 0);
  cartBadge.classList.add("bump");
  setTimeout(() => cartBadge.classList.remove("bump"), 350);

  const wishBadge = $("#wishlistCount");
  wishBadge.textContent = state.wishlist.length;
  wishBadge.classList.toggle("show", state.wishlist.length > 0);
}

/* =========================================================
   WISHLIST LOGIC
========================================================= */
function toggleWishlist(id) {
  const idx = state.wishlist.indexOf(id);
  const product = getProduct(id);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast(`${product.name} removed from wishlist`);
  } else {
    state.wishlist.push(id);
    showToast(`${product.name} saved to wishlist`);
  }
  updateBadges();
  renderWishlist();
  // refresh hearts on visible cards
  $$(".wish-btn").forEach(btn => {
    const bid = Number(btn.dataset.id);
    btn.classList.toggle("active", state.wishlist.includes(bid));
  });
}

function renderWishlist() {
  const itemsWrap = $("#wishlistItems");
  const emptyWrap = $("#wishlistEmpty");
  $("#drawerWishCount").textContent = `(${state.wishlist.length})`;

  if (state.wishlist.length === 0) {
    itemsWrap.innerHTML = "";
    emptyWrap.classList.add("show");
    return;
  }
  emptyWrap.classList.remove("show");

  itemsWrap.innerHTML = state.wishlist.map(id => {
    const p = getProduct(id);
    if (!p) return "";
    return `
      <div class="cart-item" data-id="${p.id}">
        <img src="${p.img}" alt="${p.name}">
        <div class="cart-item-info">
          <span class="cart-item-name">${p.name}</span>
          <span class="cart-item-cat">${p.category} · ${fmt(p.price)}</span>
          <div class="cart-item-row">
            <button class="wish-move-btn" data-action="move-to-cart" data-id="${p.id}">Move to Bag</button>
          </div>
          <button class="cart-item-remove" data-action="remove-wishlist" data-id="${p.id}">Remove</button>
        </div>
      </div>`;
  }).join("");
}

/* =========================================================
   QUICK VIEW MODAL
========================================================= */
function openQuickView(id) {
  const p = getProduct(id);
  if (!p) return;
  const inWishlist = state.wishlist.includes(id);
  $("#quickView").innerHTML = `
    <button class="qv-close" id="qvClose" aria-label="Close">&times;</button>
    <div class="qv-media"><img src="${p.img}" alt="${p.name}"></div>
    <div class="qv-info">
      <span class="product-cat">${p.category}</span>
      <h3>${p.name}</h3>
      <div class="product-rating">
        <span class="stars">${starString(p.rating)}</span>
        <span class="rating-count">${p.rating} (${p.reviews} reviews)</span>
      </div>
      <p class="qv-desc">${p.desc}</p>
      <div class="qv-price-row">
        <span class="price-now">${fmt(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${fmt(p.oldPrice)}</span>` : ""}
      </div>
      <div class="qv-actions">
        <button class="btn btn-primary" data-action="add-cart" data-id="${p.id}">Add to Bag</button>
        <button class="btn btn-ghost" data-action="wishlist" data-id="${p.id}">${inWishlist ? "Saved ♥" : "Save for Later"}</button>
      </div>
    </div>`;
  $("#modalDim").classList.add("open");
  document.body.style.overflow = "hidden";
  $("#qvClose").addEventListener("click", closeQuickView);
}
function closeQuickView() {
  $("#modalDim").classList.remove("open");
  document.body.style.overflow = "";
}

/* =========================================================
   GLOBAL CLICK DELEGATION (cards, drawers, modal actions)
========================================================= */
document.addEventListener("click", (e) => {
  const actionEl = e.target.closest("[data-action]");
  if (!actionEl) return;
  const id = Number(actionEl.dataset.id);
  const action = actionEl.dataset.action;

  switch (action) {
    case "add-cart": addToCart(id, actionEl); break;
    case "wishlist": toggleWishlist(id); break;
    case "quickview": openQuickView(id); break;
    case "qty-up": changeQty(id, 1); break;
    case "qty-down": changeQty(id, -1); break;
    case "remove-cart": removeFromCart(id); break;
    case "remove-wishlist": toggleWishlist(id); break;
    case "move-to-cart":
      addToCart(id);
      toggleWishlist(id);
      break;
  }
});

/* =========================================================
   DRAWERS: CART & WISHLIST
========================================================= */
function openDrawer(drawer) {
  drawer.classList.add("open");
  $("#overlayDim").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeAllDrawers() {
  $("#cartDrawer").classList.remove("open");
  $("#wishlistDrawer").classList.remove("open");
  $("#overlayDim").classList.remove("open");
  document.body.style.overflow = "";
}

$("#cartToggle").addEventListener("click", () => openDrawer($("#cartDrawer")));
$("#cartClose").addEventListener("click", closeAllDrawers);
$("#wishlistToggle").addEventListener("click", () => openDrawer($("#wishlistDrawer")));
$("#wishlistClose").addEventListener("click", closeAllDrawers);
$("#overlayDim").addEventListener("click", closeAllDrawers);
$("#cartEmptyShop").addEventListener("click", closeAllDrawers);
$("#wishlistEmptyShop").addEventListener("click", closeAllDrawers);
$("#modalDim").addEventListener("click", (e) => { if (e.target.id === "modalDim") closeQuickView(); });
$("#checkoutBtn").addEventListener("click", () => {
  if (state.cart.length === 0) return;
  showToast("This is a demo — checkout isn't connected to a payment processor.");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllDrawers();
    closeQuickView();
    closeSearch();
  }
});

/* =========================================================
   SEARCH OVERLAY
========================================================= */
function openSearch() {
  $("#searchOverlay").classList.add("open");
  setTimeout(() => $("#searchInput").focus(), 350);
}
function closeSearch() {
  $("#searchOverlay").classList.remove("open");
}
$("#searchToggle").addEventListener("click", openSearch);
$("#searchClose").addEventListener("click", closeSearch);

$("#searchInput").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const resultsWrap = $("#searchResults");
  if (!q) { resultsWrap.innerHTML = ""; return; }
  const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 8);
  if (matches.length === 0) {
    resultsWrap.innerHTML = `<p class="search-empty">No products found for "${e.target.value}".</p>`;
    return;
  }
  resultsWrap.innerHTML = matches.map(p => `
    <div class="search-result-item" data-action="quickview" data-id="${p.id}">
      <img src="${p.img}" alt="${p.name}">
      <div>
        <span class="sr-name">${p.name}</span><br>
        <span class="sr-price">${fmt(p.price)}</span>
      </div>
    </div>`).join("");
});

$("#searchResults").addEventListener("click", (e) => {
  const item = e.target.closest("[data-action='quickview']");
  if (item) closeSearch();
});

/* =========================================================
   FILTERS BAR (category chips, price range, sort)
========================================================= */
$("#categoryFilters").addEventListener("click", (e) => {
  const chip = e.target.closest(".filter-chip");
  if (!chip) return;
  $$(".filter-chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  state.activeCategory = chip.dataset.filter;
  renderProducts();
});

$("#priceRange").addEventListener("input", (e) => {
  state.maxPrice = Number(e.target.value);
  $("#priceVal").textContent = `$${state.maxPrice}`;
  renderProducts();
});

$("#sortSelect").addEventListener("change", (e) => {
  state.sort = e.target.value;
  renderProducts();
});

/* =========================================================
   REVIEWS SLIDER
========================================================= */
let reviewIndex = 0;
let reviewAutoTimer = null;

function renderReviews() {
  $("#reviewsTrack").innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-inner">
        <div class="review-stars">${starString(r.rating)}</div>
        <p class="review-quote">"${r.quote}"</p>
        <div class="review-person">
          <img src="${r.img}" alt="${r.name}">
          <span>
            <span class="review-person-name">${r.name}</span>
            <span class="review-person-role">${r.role}</span>
          </span>
        </div>
      </div>
    </div>`).join("");

  $("#reviewDots").innerHTML = REVIEWS.map((_, i) =>
    `<button data-idx="${i}" class="${i === 0 ? "active" : ""}" aria-label="Go to review ${i + 1}"></button>`
  ).join("");
}

function goToReview(idx) {
  reviewIndex = (idx + REVIEWS.length) % REVIEWS.length;
  $("#reviewsTrack").style.transform = `translateX(-${reviewIndex * 100}%)`;
  $$("#reviewDots button").forEach((dot, i) => dot.classList.toggle("active", i === reviewIndex));
}

function startReviewAutoplay() {
  clearInterval(reviewAutoTimer);
  reviewAutoTimer = setInterval(() => goToReview(reviewIndex + 1), 5500);
}

$("#reviewPrev").addEventListener("click", () => { goToReview(reviewIndex - 1); startReviewAutoplay(); });
$("#reviewNext").addEventListener("click", () => { goToReview(reviewIndex + 1); startReviewAutoplay(); });
$("#reviewDots").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  goToReview(Number(btn.dataset.idx));
  startReviewAutoplay();
});

/* =========================================================
   NEWSLETTER
========================================================= */
$("#newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = $("#newsletterEmail").value.trim();
  const msg = $("#newsletterMsg");
  if (!email) return;
  msg.textContent = `Thanks! A confirmation has been sent to ${email}.`;
  $("#newsletterEmail").value = "";
  showToast("Subscribed to the newsletter");
});

/* =========================================================
   NAVBAR: scroll shadow, mobile menu, active link highlight
========================================================= */
const navbar = $("#navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
  $("#backToTop").classList.toggle("show", window.scrollY > 600);
}, { passive: true });

const hamburger = $("#hamburger");
const navLinksEl = $("#navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinksEl.classList.toggle("open");
});
$$(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinksEl.classList.remove("open");
  });
});

// Highlight active nav link on scroll
const sections = ["home", "shop", "categories", "about", "contact"];
const sectionEls = sections.map(id => document.getElementById(id)).filter(Boolean);
window.addEventListener("scroll", () => {
  let current = sections[0];
  for (const el of sectionEls) {
    const rect = el.getBoundingClientRect();
    if (rect.top <= 120) current = el.id;
  }
  $$(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}, { passive: true });

$("#backToTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* =========================================================
   SCROLL REVEAL (IntersectionObserver)
========================================================= */
function initScrollReveal() {
  const targets = $$(".fade-in-up, .slide-in-right, .stagger");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach(t => observer.observe(t));
}

/* =========================================================
   INIT
========================================================= */
function init() {
  renderCategories();
  renderProducts();
  renderFeatured();
  renderReviews();
  goToReview(0);
  startReviewAutoplay();
  updateBadges();
  renderCart();
  renderWishlist();
  initScrollReveal();

  // give grid + featured a moment to mount before observing (they're injected, not in initial DOM)
  setTimeout(initScrollReveal, 50);

  setTimeout(() => $("#preloader").classList.add("done"), 500);
}

document.addEventListener("DOMContentLoaded", init);
