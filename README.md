# Portfolio Profesional - Integración Multimedia

## Memoria Técnica del Proyecto

### Introducción
Este portfolio profesional ha sido desarrollado como proyecto para los temas 7-8 de Diseño de Interfaces Web, centrándose en la integración avanzada de elementos multimedia. El objetivo principal era enriquecer la experiencia de usuario mediante la implementación funcional de audio y video, combinado con componentes interactivos de Bootstrap.

### Estructura del Proyecto
![Estructura de Carpetas](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/estructura.png)

*Estructura organizada de archivos y carpetas del proyecto*

---

## Implementación Multimedia Detallada

### Sistema de Audio
La integración de audio se realizó considerando las políticas actuales de los navegadores. Implementé un sistema que:

- Utiliza el elemento `<audio>` de HTML5 con el atributo `loop` para reproducción continua
- Incluye tres formatos diferentes: MP3 como formato universal, OGG para compatibilidad con Firefox, y WebM como alternativa moderna
- El volumen se configuró al 30% para crear ambiente sin resultar intrusivo

![Modal de Permisos de Audio](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/audioinicialboot.png)

*Modal de Bootstrap que solicita permiso para activar el audio de fondo - Diseño personalizado con tema oscuro y bordes amarillos*

**Características técnicas:**
- Se implementó un modal de Bootstrap que se muestra al cargar la página
- Solicita confirmación del usuario antes de iniciar la reproducción
- Cumple con las políticas de autoplay modernas
- El botón de silenciar en la barra de navegación utiliza JavaScript para alternar entre estados mute/unmute

### Sistema de Video
Para la sección de video curriculum:

- Se empleó el elemento `<video>` de HTML5 con atributo `controls` para mostrar los controles nativos
- Se configuró `preload="metadata"` para optimizar la carga inicial
- Se definió un poster personalizado que se muestra antes de la reproducción
- Se incluyeron tres formatos: MP4 como estándar principal, WebM para calidad optimizada, y OGG como alternativa de respaldo
- La reproducción se activa mediante un botón específico "Reproducir Video", dando control total al usuario

---

## Componentes Bootstrap Implementados

### Popovers Informativos
Para detallar los niveles de habilidad, implementé popovers con contenido HTML enriquecido usando `data-bs-toggle="popover"` y `data-bs-content` con etiquetas HTML.

#### Popover Habilidades Java
![Popover Habilidades Java](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/modal1boot.png)

*Nivel Avanzado con Spring Boot y JPA/Hibernate*

#### Popover Habilidades JavaScript
![Popover Habilidades JavaScript](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/modal2boot.png)

*Nivel Intermedio con React y Node.js*

#### Popover Habilidades Frontend
![Popover Habilidades Frontend](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/modal3boot.png)

*Nivel Avanzado con HTML5, CSS3 y Bootstrap 5*

#### Popover Tecnologías Reloj
![Popover Tecnologías Reloj](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/modal4boot.png)

*Tecnologías: Arduino UNO, C++, LEDs RGB, PCB personalizado*

### Otros Componentes Implementados

#### Modal de Confirmación
El modal se muestra automáticamente al cargar la página mediante JavaScript, utilizando la API de Bootstrap. Su diseño se personalizó con las clases de tema oscuro y bordes amarillos para mantener la coherencia visual.

#### Sistema Collapse
En la sección de información personal implementé un componente collapse que permite mostrar/ocultar datos adicionales. Utilicé los atributos `data-bs-toggle="collapse"` y `href` para crear la funcionalidad de acordeón.

#### Tooltips Informativos
Añadí tooltips a los controles de audio y botones interactivos usando `data-bs-toggle="tooltip"` y el atributo `title`. Los inicialicé mediante JavaScript con `new bootstrap.Tooltip()`.

#### Carruseles de Proyectos
Desarrollé tres carruseles independientes para mostrar imágenes de proyectos. Cada uno incluye controles de navegación personalizados con fondos amarillos y se configuró con `data-bs-ride="carousel"`.

---

## Elementos Interactivos HTML5

### ContentEditable
Implementé dos áreas editables:
- Lista de tecnologías en aprendizaje en la sección "Sobre mí"
- Lista de tareas del proyecto de reloj programable

Ambas utilizan el atributo `contenteditable="true"` y tienen estilos CSS personalizados con bordes dashed para indicar su interactividad.

### Gestión de Contenido Oculto
Mediante JavaScript creé funciones para mostrar/ocultar contenido:
- Detalles técnicos del proyecto Halloween
- Logros adicionales en la sección de habilidades

Utilicé el atributo `hidden` y la función `toggleAttribute()` para alternar la visibilidad.

---

## Vista General del Portfolio

### Vista de Escritorio
![Vista General 1](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/web1.png)

*Cabecera con información personal y foto de perfil*

![Vista General 2](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/web2.png)

*Sección de proyectos con carrusel de imágenes y elementos interactivos*

![Vista General 3](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/web3.png)

*Sección de habilidades y video curriculum con controles multimedia*

---

## Diseño Responsive

El portfolio está completamente optimizado para dispositivos móviles, manteniendo todas las funcionalidades multimedia e interactivas en diferentes tamaños de pantalla.

### Vista Móvil
![Vista Mobile 1](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/res1.png)

*Navegación y cabecera adaptativa con botón de audio visible*

![Vista Mobile 2](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/res2.png)

*Sección proyectos con carrusel responsive y controles táctiles*

![Vista Mobile 3](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/res3.png)

*Sección habilidades y elementos interactivos adaptados a pantalla pequeña*

---

## Decisiones de Diseño Justificadas

### Paleta de Colores
Seleccioné el tema oscuro con acentos amarillos porque:
- Reduce la fatiga visual en sesiones prolongadas
- El amarillo (#ffc107) proporciona buen contraste
- Crea una estética tecnológica y profesional
- Mejora la legibilidad del contenido principal

### Tipografía
La fuente 'Share Tech Mono' fue elegida por:
- Transmitir un carácter tecnológico y moderno
- Mantener buena legibilidad en tamaños pequeños
- Ser adecuada para contenido de programación
- Crear identidad visual coherente

### Configuraciones de Reproducción
- **Autoplay con confirmación**: Cumple con políticas modernas
- **Loop en audio**: Experiencia inmersiva continua
- **Volumen al 30%**: Equilibrio ambiental no intrusivo
- **Preload metadata**: Optimización de rendimiento
- **Controles nativos**: Compatibilidad garantizada

---

## Compatibilidad entre Navegadores

La selección de múltiples formatos garantiza compatibilidad con:
- **Chrome/Edge**: Soporte completo (MP3, MP4, WebM)
- **Firefox**: Excelente soporte (OGG y WebM)
- **Safari**: Óptimo rendimiento (MP3 y MP4)
- **Dispositivos móviles**: Adaptación automática

---

## Desafíos Técnicos y Soluciones

### Políticas de Autoplay
**Problema**: Navegadores bloquean reproducción automática de audio
**Solución**: Modal de confirmación que requiere interacción del usuario

### Compatibilidad de Formatos
**Problema**: Diferentes codecs en navegadores y dispositivos
**Solución**: Múltiples formatos y elementos `<source>` para fallbacks

### Rendimiento Móvil
**Problema**: Archivos multimedia consumen muchos datos
**Solución**: `preload="metadata"` y optimización de tamaños

### Experiencia Consistente
**Problema**: Mantener funcionalidad en todos los dispositivos
**Solución**: Diseño responsive y componentes touch-friendly


---

**Autor**: Ramón Manzano Alonso  
**Asignatura**: Diseño de Interfaces Web  
**Centro**: MEDAC  
**Fecha**: Noviembre 2025
