export const contacto = {
  whatsapp: "59172825669",
  whatsappVisible: "+591 72825669",
  whatsappMensaje: "¡Hola! Vi el menú de El Sazón de Brissi y quiero hacer un pedido 😋",
  ubicacionTexto: "Trinidad – Beni, Bolivia",
  ubicacionMaps: "https://maps.app.goo.gl/wqYsAEBvpWTr76WP6",
};

export const whatsappUrl = `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(contacto.whatsappMensaje)}`;
