# DJC Page

Sitio de `https://page.djc.pe` — landing de venta de páginas web para negocios.
Estático: HTML + CSS + JS vanilla, sin build ni dependencias. Se despliega
sirviendo la raíz del repositorio.

## Enfoque comercial

El sitio está escrito para un cliente que **no sabe de tecnología** y que viene
con una inquietud concreta: venta mayorista que quiere pedidos por WhatsApp, un
car wash que necesita que lo consulten, un consultorio que quiere que lo
encuentren.

Consecuencias del enfoque, a respetar al escribir contenido:

- El copy va de **lo que el cliente consigue** (que te escriban, que te
  encuentren, que se vea profesional), no de especificaciones de hosting.
- La parte técnica (hosting, SSL, respaldos, dominio) se menciona solo como
  algo que **hacemos nosotros**, nunca como algo que el cliente tiene que
  entender o contratar aparte.
- El subdominio `*.page.pe` solo aparece **junto al hosting**. No es un
  argumento de venta por sí solo; el dominio propio se ofrece desde el plan
  Profesional.
- El flujo comercial es: el cliente escribe por WhatsApp contando su caso →
  DJC propone alcance y precio cerrado → DJC entrega la web funcionando.
- No hay autoinventario: nada de "editor visual", "panel", "sube tus archivos"
  ni "publica tú". El contenido lo pone DJC.

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

Los precios están definidos (rango por la web completa en un solo pago, más
hosting mensual y 3 meses de hosting sin costo). **No quedan marcadores `TODO`
en el sitio.**

Lo que sí hay que revisar antes de publicar, porque son datos internos que el
copy evita a propósito:

- **Tabla `.specs`** — se describen en términos de lo que el cliente recibe
  (páginas, contenido, contacto), no en GB, MB de CPU ni tráfico. Si DJC quiere
  publicar límites reales, hay que agregarlos.
- **Precios de dominio** — el registro y la renovación anual del `.com` se
  cotizan aparte, pero el monto exacto no está escrito en ninguna parte.
- **"Sin permanencia"** — es la política actual del hosting. Conviene
  confirmarla antes de subir a producción.
- **Términos y privacidad** — los enlaces del footer apuntan a `#`.

## Contacto

El canal de contratación es **WhatsApp**: `https://wa.me/51994444789`.
Los botones de cotización llevan un mensaje precargado por plan vía el
parámetro `?text=`. Si cambia el número, hay que actualizarlo en las cinco
páginas (`index.html` y las cuatro de plan).

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
node --check static/www/components/top_nav_v2_menu/script.js
node --check static/www/components/top_nav_v2/search.js
```

El sitio no tiene todavía linter de CSS, CI ni tests automatizados.
