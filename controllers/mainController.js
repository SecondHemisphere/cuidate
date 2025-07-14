exports.index = (req, res) => {
  res.render("index", {
    title: "Inicio - CuidaT",
    activo: "inicio",
  });
};

exports.guia = (req, res) => {
  res.render("guia", {
    title: "Guía de Primeros Auxilios - CuidaT",
    activo: "guia",
  });
};

exports.contacto = (req, res) => {
  res.render("contacto", {
    title: "Contacto - CuidaT",
    activo: "contacto",
    apiUrl: process.env.API_BASE_URL,
  });
};

exports.acerca = (req, res) => {
  res.render("acerca", {
    title: "Acerca de - CuidaT",
    activo: "acerca",
  });
};

exports.login = (req, res) => {
  res.render("auth/login", {
    title: "Login - CuidaT",
    activo: "login",
    apiUrl: process.env.API_URL,
  });
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};
