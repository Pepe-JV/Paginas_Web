# Floristería Pétalo&Co - Proyecto Web

## Descripción
Página web completa para la floristería de barrio "Pétalo&Co" con 15 años de experiencia. Diseño moderno, visual y atractivo enfocado en mostrar sus productos y servicios.

## Estructura del Proyecto

```
entrega_DIW_II/
├── index.html              # Página principal
├── pages/
│   ├── catalogo.html       # Catálogo con grilla de productos
│   ├── contacto.html       # Formulario de contacto e información
│   ├── nosotros.html       # Historia, valores y servicios
│   └── faqs.html          # Preguntas frecuentes
├── assets/
│   ├── img/
│   │   ├── logo_sin_fondo.png
│   │   ├── logo_con_fondo.png
│   │   ├── flores/        # 3 imágenes de centros florales
│   │   ├── plantas/       # 6 imágenes de plantas
│   │   └── ramos/         # 4 imágenes de ramos
│   └── styles/
│       └── style.css      # Estilos CSS completos
└── README.md
```

## Características Implementadas

### ✅ Estructura de Páginas
- **index.html**: Página de inicio con hero, categorías destacadas y preview de nosotros
- **catalogo.html**: Catálogo completo con 3 categorías y grilla de productos
  - Ramos (4 productos)
  - Centros Florales (3 productos)
  - Plantas (6 productos)
- **contacto.html**: Formulario de contacto e información de ubicación
- **nosotros.html**: Historia, valores, galería del taller y servicios especiales
- **faqs.html**: Preguntas frecuentes organizadas por categorías

### 🎨 Elementos de Diseño
- **Logo**: Integrado en el header de todas las páginas
- **Navegación**: Header sticky con enlaces a todas las páginas
- **Grilla de productos**: Cards con imagen, descripción, medidas, precio y badges
- **Responsive**: Totalmente adaptable a móvil y tablet
- **Animaciones**: Efectos hover, transiciones suaves
- **Footer**: Completo con logo, enlaces, contacto y horarios

### 💐 Catálogo de Productos

#### Ramos (4 productos)
1. **White Cotton** - 45,00 € (Disponible)
2. **Sombrerera con Rosas Blancas** - 55,00 € (Nuevo)
3. **Pack Arreglo con Chocolate** - 39,90 € (Especial)
4. **Salem - Set de Mini Jarrones** - 32,00 €

#### Centros Florales (3 productos)
1. **Orquídea Exótica Sorpresa** - 48,00 € (Premium)
2. **Take It Easy** - 42,50 €
3. **Kokedama Tillandsia** - 28,00 € (Nuevo)

#### Plantas (6 productos)
1. **Ficus Tineke Mini** - 35,00 €
2. **Syngonium Neon Pink** - 29,90 € (Nuevo)
3. **Mini Monstera** - 32,50 €
4. **Peperomia** - 18,00 €
5. **Ceropegia Woodii** - 24,50 € (Especial)
6. **Mini Senecio** - 16,90 €

### 🎨 Estilo y Referencias
- **Diseño**: Delicadeza y naturalidad
- **Paleta de colores**: Verdes suaves (#8BA888, #B8C9B8) y crudos (#F5F1E8)
- **Tipografía**: Georgia/Garamond (títulos) + Helvetica (texto)
- **Iconos**: Emojis para elementos visuales
- **Cards**: Con efecto hover, sombras y badges de estado

### 📄 Contenidos Facilitados
- **Claim inicial**: "Flores que hablan por ti."
- **Copys de categorías**:
  - Ramos: "Clásicos y modernos para cada ocasión."
  - Centros: "Composiciones que transforman espacios."
  - Plantas: "Verde todo el año, bajo mantenimiento."
- **Horarios**: L–V 10:00–14:00 / 17:00–20:30. S 10:00–14:00
- **Envíos**: Envío en 24–48h en el municipio
- **Dirección**: C/ Magnolia 12, 28000

## Visualizar el Proyecto

### Opción 1: Abrir directamente
Abre el archivo `index.html` en tu navegador web

### Opción 2: Servidor local
```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js y npx
npx serve

# Con PHP
php -S localhost:8000
```

Luego accede a: `http://localhost:8000`

## Navegación

- **Inicio** (`index.html`): Página principal con hero y categorías
- **Catálogo** (`pages/catalogo.html`): Todos los productos organizados
- **Nosotros** (`pages/nosotros.html`): Historia y valores de la floristería
- **Contacto** (`pages/contacto.html`): Formulario y información de contacto
- **FAQs** (`pages/faqs.html`): Preguntas frecuentes

## Tecnologías Utilizadas
- HTML5 semántico
- CSS3 (Variables CSS, Grid, Flexbox)
- Diseño Responsive (Mobile First)
- Animaciones y transiciones CSS

## Características Técnicas
- ✅ Navegación sticky con logo
- ✅ Sistema de navegación entre páginas
- ✅ Grilla de productos con cards
- ✅ Badges de estado (Nuevo, Especial, Premium)
- ✅ Efectos hover en imágenes y botones
- ✅ Formulario de contacto estilizado
- ✅ Banner de cookies funcional (visual)
- ✅ Footer completo con enlaces
- ✅ Diseño responsive completo
- ✅ Paleta de colores naturales y consistente

## Imágenes Utilizadas
Todas las imágenes están organizadas en carpetas:
- **flores/**: 3 imágenes de centros florales
- **plantas/**: 6 imágenes de plantas de interior
- **ramos/**: 4 imágenes de ramos y arreglos
- **logos/**: Logo con y sin fondo

## Cliente
**Floristería Pétalo&Co**
- Fecha: 7/11/2025
- Gerente: Laura Campos
- 15 años de experiencia en el barrio

## Personalización
Para modificar colores, edita las variables CSS en `style.css`:
```css
:root {
    --verde-suave: #8BA888;
    --verde-claro: #B8C9B8;
    --crudo: #F5F1E8;
    /* ... */
}
```

---

**Proyecto completo y funcional** ✨

## Características Implementadas

### ✅ Necesidades Principales
- **Página web**: Foto hero con mensaje claro de quiénes somos
- **Catálogo por categorías**: Ramos, Centros, Plantas (cada tarjeta debe incluir imagen, nombre y precio)
- **Páginas de detalle**: Descripción, medidas aproximadas, aviso de disponibilidad
- **Formulario de contacto**: Nombre, email, teléfono, mensaje, campo fecha de evento
- **Información de envíos**: Solo ciudad y horarios
- **Apartado "Nosotros"**: Historia y fotos del taller
- **Sección FAQs**: Cuidados, tiempos de pedido, cambios
- **Aviso de cookies**: Visual (sin funcionalidad)

### 🎨 Estilo y Referencias
- **Diseño**: Delicadeza y naturalidad
- **Paleta de colores**: Verdes suaves y crudos
- **Tipografía**: Artesanal pero legible (Georgia/Garamond + Helvetica)
- **Responsive**: Adaptable a móvil

### 📄 Contenidos Facilitados
- **Claim inicial**: "Flores que hablan por ti."
- **Copys de categorías**:
  - Ramos: "Clásicos y modernos para cada ocasión."
  - Centros: "Composiciones que transforman espacios."
  - Plantas: "Verde todo el año, bajo mantenimiento."
- **Horarios**: L–V 10:00–14:00 / 17:00–20:30. S 10:00–14:00
- **Envíos**: Envío en 24–48h en el municipio
- **Dirección**: C/ Magnolia 12, 28000

## Instrucciones para Completar

### 1. Añadir Imágenes
Coloca las siguientes imágenes en la carpeta `assets/img/`:
- `ramos.jpg` - Imagen de ramos de flores
- `centros.jpg` - Imagen de centros florales
- `plantas.jpg` - Imagen de plantas
- `taller1.jpg` - Foto del taller/tienda
- `taller2.jpg` - Otra foto del taller/tienda

### 2. Visualizar el Proyecto
Abre el archivo `index.html` en tu navegador web o usa un servidor local:


### 3. Personalización (Opcional)
- Ajusta los colores en el archivo CSS (variables en `:root`)
- Modifica los textos en el HTML según necesites
- Añade más páginas de detalle de productos en la carpeta `pages/`

## Tecnologías Utilizadas
- HTML5
- CSS3 (con variables CSS, Grid, Flexbox)
- Diseño Responsive
- Animaciones CSS

## Características Técnicas
- ✅ Navegación sticky
- ✅ Efectos hover en tarjetas
- ✅ Formulario de contacto estilizado
- ✅ Banner de cookies
- ✅ Animaciones sutiles
- ✅ Diseño responsive (móvil y escritorio)
- ✅ Paleta de colores naturales

## Cliente
**Floristería Pétalo&Co**
- Fecha: 7/11/2025
- Gerente: Laura Campos
- 15 años de experiencia en el barrio

---

**Nota**: Recuerda añadir las imágenes en la carpeta `assets/img/` para que el diseño se vea completo.
