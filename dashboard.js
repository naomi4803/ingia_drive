document.querySelectorAll(".dashboard-layout").forEach(function (layout) {
  const toggle = layout.querySelector(".dashboard-menu-toggle");
  const sidebar = layout.querySelector(".dashboard-sidebar");
  const backdrop = layout.querySelector(".dashboard-menu-backdrop");
  const closeButton = layout.querySelector(".dashboard-menu-close");

  function closeMenu() {
    sidebar.hidden = true;
    backdrop.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("dashboard-menu-open");
    toggle.focus();
  }

  function openMenu() {
    sidebar.hidden = false;
    backdrop.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("dashboard-menu-open");
    closeButton.focus();
  }

  toggle.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);

  sidebar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !sidebar.hidden) {
      closeMenu();
    }
  });
});
