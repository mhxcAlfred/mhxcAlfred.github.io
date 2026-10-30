(function () {

  // =========================
  // 1️⃣ CSS 自动注入（强制修复）
  // =========================
  const style = document.createElement("style");
  style.innerHTML = `
    canvas {
      position: fixed !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    body {
      position: relative;
      z-index: 0;
    }
  `;
  document.head.appendChild(style);

  // =========================
  // 2️⃣ 工具：加载脚本
  // =========================
  function loadScript(src, cb) {
    const s = document.createElement("script");
    s.src = src;
    s.onload = cb || null;
    document.body.appendChild(s);
  }

  // =========================
  // 3️⃣ Canvas resize 修复（关键）
  // =========================
  function fixCanvasSize() {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", fixCanvasSize);

  // =========================
  // 4️⃣ 主逻辑
  // =========================
  window.addEventListener("load", () => {

    // ① 点击爱心
    loadScript("/js/clicklove.js");

    // ① 点击烟花
    loadScript("/js/clickfireworks.js");

    // ② Canvas（仅大屏）
    if (window.innerWidth <= 768) return;

    const script = document.createElement("script");
    script.src = "/js/canvas-nest.min.js";

    script.onload = function () {

      new CanvasNest(document.body, {

        // ⭐颜色必须 RGB
        color: "2,129,249",

        // ⭐建议 0.3~0.6（避免发白）
        opacity: 1,

        // ⭐密度
        count: 149,

        // ⭐避免被 footer 盖
        zIndex: -1,
      });

      // ⭐修复一次尺寸
      setTimeout(fixCanvasSize, 50);
    };

    document.body.appendChild(script);
  });

})();