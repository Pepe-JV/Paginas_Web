# Guía de Estilos - Floristería Pétalo&Co

## 1. Paleta de Colores

### Colores Principales

#### Verde Suave `#8BA888`
- **Uso**: Color corporativo principal
- **Aplicación**: Títulos principales, enlaces activos, botones primarios, elementos destacados
- **Significado**: Naturaleza, frescura, crecimiento. Representa la esencia vegetal de la floristería y transmite tranquilidad y conexión con la naturaleza

#### Verde Claro `#B8C9B8`
- **Uso**: Color secundario y fondos suaves
- **Aplicación**: Fondos de secciones hero, gradientes, elementos decorativos del footer
- **Significado**: Suavidad, delicadeza. Complementa al verde principal creando una atmósfera relajante y acogedora

#### Crudo `#F5F1E8`
- **Uso**: Color de fondo principal
- **Aplicación**: Fondo general del body, secciones alternas
- **Significado**: Naturalidad, artesanía, calidez. Evoca el papel kraft y los materiales naturales, reflejando la autenticidad de un negocio de barrio

#### Crudo Oscuro `#E8E3D6`
- **Uso**: Variante para contraste
- **Aplicación**: Fondos de tarjetas de información, elementos secundarios
- **Significado**: Contraste sutil que mantiene la calidez del diseño

---

## 2. Tipografía

### Familia Tipográfica Principal

**Georgia / Garamond** (Serif)
```css
font-family: 'Georgia', 'Garamond', serif;
```
- **Uso**: Títulos (h1, h2, h3, h4)
- **Características**: Tipografía serif elegante y clásica
- **Significado**: Tradición, artesanía, elegancia. Refleja los 15 años de experiencia y el carácter artesanal del negocio
- **Aplicaciones**:
  - Logo text
  - Títulos de sección
  - Encabezados de página

### Familia Tipográfica Secundaria

**Helvetica Neue / Arial** (Sans-serif)
```css
font-family: 'Helvetica Neue', Arial, sans-serif;
```
- **Uso**: Texto de contenido, navegación, formularios
- **Características**: Tipografía sans-serif moderna y legible
- **Significado**: Claridad, modernidad, accesibilidad
- **Aplicaciones**:
  - Párrafos de contenido
  - Navegación
  - Botones
  - Formularios
  - Descripciones de productos

---

## 3. Tamaños de Texto

### Títulos

#### H1 - Título Principal de Página
```css
font-size: 3.5rem;  /* 56px */
font-family: Georgia, serif;
color: #8BA888;
```
- **Uso**: Título principal en páginas internas (Hero)
- **Ejemplo**: "Preguntas Frecuentes", "Sobre Nosotros"

#### H1 - Logo
```css
font-size: 2rem;  /* 32px */
color: #8BA888;
letter-spacing: 1px;
```
- **Uso**: Nombre de la floristería en el header

#### H2 - Títulos de Sección
```css
font-size: 2.5rem;  /* 40px */
font-family: Georgia, serif;
color: #8BA888;
```
- **Uso**: Títulos de secciones principales
- **Ejemplo**: "Nuestros Valores", "Ramos", "Centros Florales"

#### H2 - Hero Principal (Index)
```css
font-size: 3rem;  /* 48px */
color: #8BA888;
```
- **Uso**: Claim principal en página de inicio
- **Ejemplo**: "¡Flores que hablan por ti!"

#### H3 - Subtítulos y Cards
```css
font-size: 1.5rem - 1.8rem;  /* 24px - 28.8px */
color: #2C2C2C o #8BA888;
```
- **Uso**: Nombres de productos, subtítulos de secciones
- **Ejemplo**: "White Cotton", "¿Con cuánta antelación debo pedir?"

#### H4 - Títulos Menores
```css
font-size: 1.3rem;  /* 20.8px */
color: #B8C9B8;
```
- **Uso**: Títulos de footer, subsecciones pequeñas

### Texto de Contenido

#### Párrafo Normal
```css
font-size: 1rem;  /* 16px (base) */
line-height: 1.6;
color: #2C2C2C;
```
- **Uso**: Texto de contenido general

#### Párrafo Grande (Subtítulos Hero)
```css
font-size: 1.2rem - 1.3rem;  /* 19.2px - 20.8px */
line-height: 1.8;
color: #5A5A5A;
```
- **Uso**: Descripciones destacadas, introducciones de sección

#### Párrafo Mediano
```css
font-size: 1.1rem;  /* 17.6px */
line-height: 1.7-1.8;
color: #5A5A5A;
```
- **Uso**: Textos de información, descripciones amplias

#### Descripción de Producto
```css
font-size: 0.95rem;  /* 15.2px */
line-height: 1.6;
color: #5A5A5A;
```
- **Uso**: Descripción en tarjetas de producto

#### Texto Pequeño (Detalles)
```css
font-size: 0.9rem;  /* 14.4px */
color: #5A5A5A;
```
- **Uso**: Medidas de producto, disponibilidad, información complementaria

#### Texto Muy Pequeño (Badges)
```css
font-size: 0.85rem;  /* 13.6px */
font-weight: 600;
```
- **Uso**: Badges de estado (Nuevo, Especial, Premium)

#### Tagline
```css
font-size: 0.85rem;  /* 13.6px */
font-style: italic;
color: #5A5A5A;
```
- **Uso**: Subtítulo del logo en header

### Elementos Especiales

#### Precio de Producto
```css
font-size: 1.8rem;  /* 28.8px */
font-weight: bold;
color: #8BA888;
```
- **Uso**: Precio destacado en tarjetas de producto

#### Blockquote (Citas)
```css
font-size: 1.3rem;  /* 20.8px */
font-style: italic;
color: #2C2C2C;
```
- **Uso**: Frases destacadas, testimonios
- **Ejemplo**: "Flores que hablan por ti."

#### Botones
```css
font-size: 1.1rem - 1rem;  /* 17.6px - 16px */
font-weight: 600;
```
- **Uso**: Texto en botones de acción

