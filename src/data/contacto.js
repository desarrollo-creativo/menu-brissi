export const contacto = {
  whatsapp: "59172825669",
  whatsappVisible: "+591 72825669",
  whatsappMensaje: "¡Hola! Vi el menú de El Sazón de Brissi y quiero hacer un pedido 😋",
  ubicacionTexto: "Trinidad – Beni, Bolivia",
  ubicacionMaps: "https://maps.app.goo.gl/wqYsAEBvpWTr76WP6",
  ubicacionEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30854.743057849402!2d-64.897024!3d-14.834073599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93dd714151c5da79%3A0x3a0fefe632dcca26!2sEl%20Saz%C3%B3n%20de%20Brissi!5e0!3m2!1ses-419!2sbo!4v1793130973468!5m2!1ses-419!2sbo",
};

export const whatsappUrl = `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(contacto.whatsappMensaje)}`;
