exports.dashboard = (req, res) => {
  res.render("admin/dashboard", {
    layout: "layouts/admin",
    title: "Dashboard - CuidaT",
    activo: "dashboard",
    apiUrl: process.env.API_URL,
  });
};
