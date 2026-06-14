window.addEventListener("load", () => {

  // 点击爱心
  loadScript("/js/clicklove.js");

  // Canvas背景（大屏才加载）
  if (window.innerWidth > 768) {
    loadScript("/js/canvas-nest.min.js", () => {
      new CanvasNest(document.body, {
        color: "2,129,249",
        opacity: 0.9,
        count: 99,
        zIndex: -1
      });
    });
  }
});

function loadScript(src, cb){
  const s = document.createElement("script");
  s.src = src;
  s.onload = cb || null;
  document.body.appendChild(s);
}