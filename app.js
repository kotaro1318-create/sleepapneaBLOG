function renderArticles() {
  const list = document.getElementById("article-list");

  ARTICLES.forEach((article, i) => {
    const li = document.createElement("li");
    li.className = "article-item";
    li.dataset.open = "false";

    const sourcesHtml = article.sources
      .map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a></li>`)
      .join("");

    li.innerHTML = `
      <button class="article-toggle" aria-expanded="false">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <span class="article-title">${article.title}</span>
        <svg class="chev" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 4V16M4 10H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="article-panel">
        <div class="article-panel-inner">
          <p>${article.body}</p>
          <div class="sources">
            <div class="sources-label">出典</div>
            <ol>${sourcesHtml}</ol>
          </div>
        </div>
      </div>
    `;

    const btn = li.querySelector(".article-toggle");
    const panel = li.querySelector(".article-panel");

    btn.addEventListener("click", () => {
      const isOpen = li.dataset.open === "true";

      document.querySelectorAll('.article-item[data-open="true"]').forEach((openItem) => {
        if (openItem !== li) {
          openItem.dataset.open = "false";
          openItem.querySelector(".article-toggle").setAttribute("aria-expanded", "false");
          openItem.querySelector(".article-panel").style.maxHeight = null;
        }
      });

      if (isOpen) {
        li.dataset.open = "false";
        btn.setAttribute("aria-expanded", "false");
        panel.style.maxHeight = null;
      } else {
        li.dataset.open = "true";
        btn.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });

    list.appendChild(li);
  });
}

function drawBreath() {
  const canvas = document.getElementById("breath");
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height, midY = h / 2;

  ctx.clearRect(0, 0, w, h);

  const grad = ctx.createLinearGradient(0, 0, w, 0);
  grad.addColorStop(0, "#3a4668");
  grad.addColorStop(0.55, "#7a6a5a");
  grad.addColorStop(1, "#f4a261");

  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.strokeStyle = grad;
  ctx.beginPath();

  const splitX = w * 0.52;
  let x = 0;
  let started = false;
  const apneaGaps = [ [260, 90], [520, 130], [760, 70] ];

  function inGap(px) {
    return apneaGaps.some(([start, len]) => px >= start && px <= start + len);
  }

  while (x <= w) {
    if (x < splitX) {
      if (inGap(x)) {
        x += 4;
        started = false;
        continue;
      }
      const y = midY - Math.sin(x * 0.045) * 26 * (0.7 + 0.3 * Math.sin(x * 0.01));
      if (!started) { ctx.moveTo(x, y); started = true; } else { ctx.lineTo(x, y); }
    } else {
      const t = x - splitX;
      const y = midY - Math.sin(t * 0.05) * 46;
      if (!started) { ctx.moveTo(x, y); started = true; } else { ctx.lineTo(x, y); }
    }
    x += 4;
  }
  ctx.stroke();

  ctx.setLineDash([2, 6]);
  ctx.strokeStyle = "rgba(244,162,97,0.45)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(splitX, 20);
  ctx.lineTo(splitX, h - 20);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#f4a261";
  ctx.font = "12px 'Zen Kaku Gothic New', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("CPAP", splitX, 18);
}

function initBreathCanvas() {
  const canvas = document.getElementById("breath");
  const resize = () => {
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    drawBreath();
  };
  window.addEventListener("resize", resize);
  resize();
}

document.addEventListener("DOMContentLoaded", () => {
  renderArticles();
  initBreathCanvas();
});
