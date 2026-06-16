const header = document.querySelector("[data-header]");

if (header) {
  header.innerHTML = `
    <a class="brand" href="index.html" aria-label="NSVAIR Software Technology home"><img src="assets/logo.svg" alt="NSVAIR Software Technology"></a>
    <button class="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-nav-toggle><span></span><span></span><span></span></button>
    <nav class="site-nav" data-nav>
      <a href="index.html" data-nav-link="enterprise">Enterprise Solutions</a>
      <a href="index.html" data-nav-link="home">Home</a>
      <div class="nav-item has-mega">
        <button type="button" class="nav-link" data-mega-toggle aria-expanded="false">Products</button>
        <div class="mega-menu product-menu">
          <div class="mega-feature"><span>NSVAIR Suite</span><h3>One platform for sales, operations and customer workflows.</h3><p>Launch CRM, ERP, POS, booking and AI modules with one brand system.</p></div>
          <div class="mega-columns">
            <div><h4>Business Products</h4><a href="products.html#crm">CRM Platform</a><a href="products.html#erp">ERP Suite</a><a href="products.html#pos">Retail POS</a><a href="products.html#inventory">Inventory Management</a><a href="products.html#accounting">Accounting System</a></div>
            <div><h4>Digital Products</h4><a href="products.html#ecommerce">Ecommerce Store</a><a href="products.html#booking">Booking Portal</a><a href="products.html#hrms">HRMS Portal</a><a href="products.html#analytics">Analytics Dashboard</a><a href="products.html#support">Support Desk</a></div>
            <div><h4>AI Products</h4><a href="ai.html#agents">AI Agents</a><a href="ai.html#chatbots">Website Chatbots</a><a href="ai.html#documents">Document AI</a><a href="ai.html#sales">Sales Assistant</a><a href="ai.html#insights">AI Insights</a></div>
          </div>
        </div>
      </div>
      <div class="nav-item has-mega">
        <button type="button" class="nav-link" data-mega-toggle aria-expanded="false">Industries</button>
        <div class="mega-menu industries-menu">
          <div class="industry-groups">
            <div><h4>Retail</h4><a href="industries.html#book-store">Book Store</a><a href="industries.html#clothing-store">Clothing Store</a><a href="industries.html#furniture-store">Furniture Store</a><a href="industries.html#grocery-store">Grocery Store</a><a href="industries.html#hardware-store">Hardware Store</a><a href="industries.html#toy-store">Toy Store</a></div>
            <div><h4>Food & Hospitality</h4><a href="industries.html#bar-and-pub">Bar and Pub</a><a href="industries.html#restaurant">Restaurant</a><a href="industries.html#fast-food">Fast Food</a><a href="industries.html#guest-house">Guest House</a><a href="industries.html#beverage-distributor">Beverage Distributor</a><a href="industries.html#hotel">Hotel</a></div>
            <div><h4>Real Estate</h4><a href="industries.html#real-estate-agency">Real Estate Agency</a><a href="industries.html#architecture-firm">Architecture Firm</a><a href="industries.html#construction">Construction</a><a href="industries.html#estate-management">Estate Management</a><a href="industries.html#gardening">Gardening</a><a href="industries.html#property-owner-association">Property Owner Association</a></div>
            <div><h4>Consulting</h4><a href="industries.html#accounting-firm">Accounting Firm</a><a href="industries.html#marketing-agency">Marketing Agency</a><a href="industries.html#law-firm">Law firm</a><a href="industries.html#talent-acquisition">Talent Acquisition</a><a href="industries.html#audit-certification">Audit & Certification</a></div>
            <div><h4>Manufacturing</h4><a href="industries.html#textile">Textile</a><a href="industries.html#metal">Metal</a><a href="industries.html#furnitures">Furnitures</a><a href="industries.html#food">Food</a><a href="industries.html#brewery">Brewery</a><a href="industries.html#corporate-gifts">Corporate Gifts</a></div>
            <div><h4>Health & Fitness</h4><a href="industries.html#sports-club">Sports Club</a><a href="industries.html#eyewear-store">Eyewear Store</a><a href="industries.html#fitness-center">Fitness Center</a><a href="industries.html#wellness-practitioners">Wellness Practitioners</a><a href="industries.html#pharmacy">Pharmacy</a><a href="industries.html#hair-salon">Hair Salon</a></div>
            <div><h4>Trades</h4><a href="industries.html#handyman">Handyman</a><a href="industries.html#it-hardware-support">IT Hardware & Support</a><a href="industries.html#solar-energy-systems">Solar Energy Systems</a><a href="industries.html#shoe-maker">Shoe Maker</a><a href="industries.html#cleaning-services">Cleaning Services</a><a href="industries.html#hvac-services">HVAC Services</a></div>
            <div><h4>Others</h4><a href="industries.html#nonprofit-organization">Nonprofit Organization</a><a href="industries.html#environmental-agency">Environmental Agency</a><a href="industries.html#billboard-rental">Billboard Rental</a><a href="industries.html#photography">Photography</a><a href="industries.html#bike-leasing">Bike Leasing</a><a href="industries.html#software-reseller">Software Reseller</a></div>
          </div>
        </div>
      </div>
      <div class="nav-item has-mega">
        <button type="button" class="nav-link" data-mega-toggle aria-expanded="false">Services</button>
        <div class="mega-menu services-menu">
          <div class="mega-columns compact">
            <div><h4>Build</h4><a href="services.html">Website Development</a><a href="services.html">Custom Software</a><a href="services.html">Mobile Apps</a><a href="services.html">UI/UX Design</a></div>
            <div><h4>Scale</h4><a href="services.html">Cloud & DevOps</a><a href="services.html">Cybersecurity</a><a href="services.html">Data Analytics</a><a href="services.html">API Integration</a></div>
            <div><h4>Automate</h4><a href="ai.html">AI Integration</a><a href="services.html">Workflow Automation</a><a href="demos.html">Live Demos</a><a href="contact.html">Project Consulting</a></div>
          </div>
        </div>
      </div>
      <a href="apps.html" data-nav-link="apps">Apps</a>
      <a href="pricing.html" data-nav-link="pricing">Pricing</a>
      <a href="ai.html" data-nav-link="ai">AI</a>
      <a href="about.html" data-nav-link="about">About</a>
      <a class="nav-cta" href="contact.html" data-nav-link="contact">Start Project</a>
    </nav>`;
}

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-mega-toggle]").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const parent = toggle.closest(".has-mega");
    const isOpen = parent.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.querySelectorAll(".has-mega").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("open");
        item.querySelector("[data-mega-toggle]")?.setAttribute("aria-expanded", "false");
      }
    });
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-nav")) {
    document.querySelectorAll(".has-mega").forEach((item) => {
      item.classList.remove("open");
      item.querySelector("[data-mega-toggle]")?.setAttribute("aria-expanded", "false");
    });
  }
});

const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.getAttribute("href")?.split("#")[0] === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

const canvas = document.getElementById("brandCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const points = [];
  let width = 0;
  let height = 0;

  function resizeCanvas() {
    const ratio = window.devicePixelRatio || 1;
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    points.length = 0;
    const count = Math.max(34, Math.floor(width / 26));
    for (let i = 0; i < count; i += 1) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        r: Math.random() * 2 + 1
      });
    }
  }

  function drawCanvas() {
    ctx.clearRect(0, 0, width, height);
    const colors = ["#37a3ff", "#8fd4ff", "#0b64d8"];
    points.forEach((point, index) => {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < 0 || point.x > width) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      ctx.fillStyle = colors[index % colors.length];
      ctx.globalAlpha = 0.76;
      ctx.fill();
      for (let j = index + 1; j < points.length; j += 1) {
        const other = points[j];
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 135) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = "#bfe7ff";
          ctx.globalAlpha = (135 - distance) / 700;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawCanvas);
  }

  resizeCanvas();
  drawCanvas();
  window.addEventListener("resize", resizeCanvas);
}

const projectType = document.getElementById("projectType");
const screenCount = document.getElementById("screenCount");
const screenCountLabel = document.getElementById("screenCountLabel");
const needsAi = document.getElementById("needsAi");
const needsCloud = document.getElementById("needsCloud");
const estimateWeeks = document.getElementById("estimateWeeks");
const estimateSummary = document.getElementById("estimateSummary");

function updateEstimate() {
  if (!projectType || !screenCount || !estimateWeeks || !estimateSummary) return;
  const screens = Number(screenCount.value);
  let base = projectType.value === "website" ? 2 : projectType.value === "automation" ? 3 : 5;
  base += Math.ceil(screens / 10);
  if (needsAi?.checked) base += 2;
  if (needsCloud?.checked) base += 1;
  screenCountLabel.textContent = String(screens);
  estimateWeeks.textContent = `${base}-${base + 2} weeks`;
  const labels = {
    website: "A polished website with service pages, lead capture, content structure and deployment support.",
    portal: "A secure portal with dashboards, user roles, records, forms and notifications.",
    saas: "A product MVP with core workflows, database structure, interface states and launch setup.",
    automation: "A connected automation system for forms, alerts, reports and operational handoffs."
  };
  estimateSummary.textContent = labels[projectType.value];
}

[projectType, screenCount, needsAi, needsCloud].forEach((element) => {
  element?.addEventListener("input", updateEstimate);
});
updateEstimate();

const pagePlans = {
  startup: ["Home", "Product", "Pricing", "Case studies", "About", "Contact"],
  clinic: ["Home", "Services", "Doctors", "Appointment booking", "Patient FAQs", "Contact"],
  agency: ["Home", "Services", "Portfolio", "Process", "Testimonials", "Start project"]
};
const pagePlan = document.getElementById("pagePlan");
const pageDemoButtons = document.querySelectorAll("[data-page-demo] button");

function renderPagePlan(type) {
  if (!pagePlan) return;
  pagePlan.innerHTML = pagePlans[type].map((item) => `<li>${item}</li>`).join("");
}

pageDemoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    pageDemoButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPagePlan(button.dataset.type);
  });
});
renderPagePlan("startup");

const aiTask = document.getElementById("aiTask");
const aiResponse = document.getElementById("aiResponse");

function updateAiResponse() {
  if (!aiTask || !aiResponse) return;
  const responses = {
    support: "Summary: Customer needs help with login and invoice access. Recommended action: verify account email, reset password, then send invoice link.",
    lead: "Lead score: High. Reason: asked for SaaS MVP, timeline under 60 days and needs cloud deployment. Next step: book discovery call.",
    report: "Weekly report: leads increased, two automations saved manual time and the top website page was Services. Recommended focus: improve contact conversion."
  };
  aiResponse.textContent = responses[aiTask.value];
}

aiTask?.addEventListener("change", updateAiResponse);
updateAiResponse();

const contactForm = document.getElementById("contactForm");
const briefTitle = document.getElementById("briefTitle");
const briefBody = document.getElementById("briefBody");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name");
  const project = data.get("project");
  const budget = data.get("budget");
  const details = data.get("details");
  briefTitle.textContent = `${project} brief for ${name}`;
  briefBody.textContent = `Budget level: ${budget}. Project goal: ${details} Recommended next step: discovery call, sitemap or workflow map, then a clear delivery quote.`;
});
