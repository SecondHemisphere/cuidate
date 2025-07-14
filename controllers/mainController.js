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
  });
};

exports.acerca = (req, res) => {
  res.render("acerca", {
    title: "Acerca de - CuidaT",
    activo: "acerca",
  });
};
