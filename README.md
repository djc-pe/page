# DJC Page

Sitio de `https://page.djc.pe` — landing de venta de planes de hosting y
publicación de páginas web. Estático: HTML + CSS + JS vanilla, sin build ni
dependencias. Se despliega serviendo la raíz del repositorio.

## Estructura

```
index.html                  Landing principal
404.html                    Página de error
robots.txt / sitemap.xml    SEO
es/plan/<slug>/index.html   Una página por plan
static/www/css/             Hojas de estilos
  tokens.css                Variables de diseño (colores, tipografía, espaciado)
  base.css                  Reset, layout, botones, utilidades
  style.css                 Capa global del body
  content.css               Contenedor de contenido
  landing.css               Específico de la landing
  plan.css                  Específico de las páginas de plan
  footer.css                Pie de página
  pygments.css              Resaltado de código (traído de Pygments)
  codehilite.css            Resaltado de código (traído de Pygments)
static/www/components/
  top_nav_v2/               Barra de navegación + búsqueda
  top_nav_v2_menu/          Drawers lateral y de cuenta
static/www/img/             Logos e iconos
```

## Páginas de plan

Los cuatro planes tienen su página en `es/plan/<slug>/`:

| Slug          | Plan          |
| ------------- | ------------- |
| `basico`      | Básico        |
| `profesional` | Profesional   |
| `premium`     | Premium       |
| `personalizado` | Personalizado |

## Contenido pendiente

Las páginas de plan se scaffoldearon con la estructura completa, pero los
valores comerciales son marcadores. Buscá `TODO` en `es/plan/`:

- **Precio y periodicidad** — la caja `.price-box__amount` muestra `S/ 0.00`
  (o "A cotizar" en el plan Personalizado) y `.price-box__period` pide definir
  la vigencia.
- **Link de checkout** — `.price-box__note` y los botones "Contratar ahora"
  apuntan a `#contacto`; hay que poner la URL real de pago.
- **Canal de contratación** — la sección `#contacto` al final de cada página
  dice "TODO: definir el canal (formulario, correo o WhatsApp)".
- **Especificaciones técnicas** — la tabla `.specs` tiene los valores de disco,
  tráfico, buzones, bases de datos, recursos y frecuencia de respaldo.
- **FAQs de plan** — varias respuestas están marcadas como TODO.

## Desarrollo

No hay paso de build. Para levantar en local:

```sh
python -m http.server 8000
```

`CNAME` solo lo necesita el servidor de hosting; con `http.server` se ignora.

## Comprobaciones

```sh
# HTML (requiere Node 20 o superior)
npx html-validate@8 index.html 404.html es/plan/*/index.html

# Sintaxis JS
node --check static/www/js/*.js
```

El sitio no tiene todavía linter de CSS, CI ni tests automatizados.
