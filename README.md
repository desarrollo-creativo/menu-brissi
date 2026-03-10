# El Sazón de Brissi — Menú Digital

Aplicación web de menú digital para el restaurante **El Sazón de Brissi**, ubicado en Trinidad, Beni, Bolivia. Diseñada para visualizarse desde el celular, con una experiencia moderna, animada y fácil de usar.

## Tecnologías

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- CSS personalizado con diseño mobile-first
- Fuentes: `Bebas Neue`, `Dancing Script`, `Nunito`

## Características

- Splash screen animado al cargar
- Navegación por categorías: **Comidas** y **Bebidas**
- Cards de productos con tags, descripción y precio
- Modal tipo bottom-sheet con ingredientes detallados y gesto de arrastrar para cerrar
- Tema oscuro con acentos en rosa/fucsia
- Animaciones suaves y efectos de fondo (blobs)

## Menú actual

### Comidas

| Producto | Precio |
|---|---|
| Alitas BBQ | Bs. 18 |
| Mini Hamburguesas | Bs. 12 |
| Pipocas de Pollo | Bs. 16 |

### Bebidas

| Bebida | Precio |
|---|---|
| Coca-Cola Mini | Bs. 8 |
| Fanta Mini | Bs. 8 |
| Sprite Mini | Bs. 8 |
| Jugo Natural | Bs. 12 |

## Estructura del proyecto

```
src/
├── components/
│   ├── SplashScreen.jsx
│   ├── CategoryTabs.jsx
│   ├── ProductCard.jsx
│   ├── BeverageCard.jsx
│   └── ProductModal.jsx
├── data/
│   └── menu.js          # Datos del menú (productos y bebidas)
├── styles/
│   └── globals.css      # Sistema de diseño y animaciones
└── App.jsx
```

## Comandos

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```
