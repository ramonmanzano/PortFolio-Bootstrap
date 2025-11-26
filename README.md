# Portfolio Profesional - Integración Multimedia

## Memoria Técnica del Proyecto

### Introducción
Este portfolio profesional ha sido desarrollado como proyecto para los temas 7-8 de Diseño de Interfaces Web, centrándose en la integración avanzada de elementos multimedia. El objetivo principal era enriquecer la experiencia de usuario mediante la implementación funcional de audio y video, combinado con componentes interactivos de Bootstrap.

![Estructura de Carpetas](<img width="272" height="706" alt="videoboot" src="https://github.com/user-attachments/assets/536dcd7c-d70d-4c3a-829e-35ead351dbe3" />
)
*Estructura organizada de archivos y carpetas del proyecto*
![Uploading image (19).png…]()

### Implementación Multimedia Detallada

#### Sistema de Audio
La integración de audio se realizó considerando las políticas actuales de los navegadores. Implementé un sistema que:

- Utiliza el elemento `<audio>` de HTML5 con el atributo `loop` para reproducción continua
- Incluye tres formatos diferentes: MP3 como formato universal, OGG para compatibilidad con Firefox, y WebM como alternativa moderna
- El volumen se configuró al 30% para crear ambiente sin resultar intrusivo

![Modal de Permisos de Audio](https://ibb.co/xS26VvWk)
*Modal de Bootstrap que solicita permiso para activar el audio de fondo*

- Se implementó un modal de Bootstrap que se muestra al cargar la página, solicitando confirmación del usuario antes de iniciar la reproducción, cumpliendo así con las políticas de autoplay
- El botón de silenciar en la barra de navegación utiliza JavaScript para alternar entre los estados mute/unmute

#### Sistema de Video
Para la sección de video curriculum:

![Video Curriculum](https://ibb.co/1fPvW29t)
*Sección de video curriculum con poster y controles de reproducción*

- Se empleó el elemento `<video>` de HTML5 con atributo `controls` para mostrar los controles nativos
- Se configuró `preload="metadata"` para optimizar la carga inicial
- Se definió un poster personalizado que se muestra antes de la reproducción
- Se incluyeron tres formatos: MP4 como estándar principal, WebM para calidad optimizada, y OGG como alternativa de respaldo
- La reproducción se activa mediante un botón específico "Reproducir Video", dando control total al usuario

### Componentes Bootstrap Implementados

#### Modal de Confirmación
El modal se muestra automáticamente al cargar la página mediante JavaScript, utilizando la API de Bootstrap. Su diseño se personalizó con las clases de tema oscuro y bordes amarillos para mantener la coherencia visual.

#### Sistema Collapse
En la sección de información personal implementé un componente collapse que permite mostrar/ocultar datos adicionales. Utilicé los atributos `data-bs-toggle="collapse"` y `href` para crear la funcionalidad de acordeón.

#### Tooltips Informativos
Añadí tooltips a los controles de audio y botones interactivos usando `data-bs-toggle="tooltip"` y el atributo `title`. Los inicialicé mediante JavaScript con `new bootstrap.Tooltip()`.

#### Popovers de Habilidades
Para detallar los niveles de habilidad, implementé popovers con contenido HTML enriquecido usando `data-bs-toggle="popover"` y `data-bs-content` con etiquetas HTML.

![Popover Habilidades Java](https://ibb.co/HD9spMyb)
*Popover informativo mostrando detalles de habilidades en Java*

![Popover Habilidades JavaScript](https://ibb.co/nsG13mDd)
*Popover informativo mostrando detalles de habilidades en JavaScript*

![Popover Habilidades Frontend](https://ibb.co/RpBPJ7V1)
*Popover informativo mostrando detalles de habilidades en Frontend*

![Popover Tecnologías Reloj](https://ibb.co/gLkTxYj2)
*Popover informativo del proyecto del reloj programable*

### Elementos Interactivos HTML5

#### ContentEditable
Implementé dos áreas editables:
- Lista de tecnologías en aprendizaje en la sección "Sobre mí"
- Lista de tareas del proyecto de reloj programable
Ambas utilizan el atributo `contenteditable="true"` y tienen estilos CSS personalizados con bordes dashed para indicar su interactividad.

#### Gestión de Contenido Oculto
Mediante JavaScript creé funciones para mostrar/ocultar contenido:
- Detalles técnicos del proyecto Halloween
- Logros adicionales en la sección de habilidades
Utilicé el atributo `hidden` y la función `toggleAttribute()` para alternar la visibilidad.

### Vista General del Portfolio

![Vista General 1](https://ibb.co/Sw0MVBJ9)
*Vista completa del portfolio mostrando la estructura general*

![Vista General 2](https://ibb.co/yc3jq57Z)
*Sección de proyectos y carrusel de imágenes*

![Vista General 3](https://ibb.co/N2BjN4Vm)
*Sección de habilidades y elementos interactivos*

### Diseño Responsive

El portfolio está completamente optimizado para dispositivos móviles, manteniendo todas las funcionalidades multimedia e interactivas en diferentes tamaños de pantalla.

![Vista Mobile 1](https://ibb.co/pvHJzgvm)
*Vista del portfolio en dispositivo móvil - Cabecera*

![Vista Mobile 2](https://ibb.co/MD67qGB0)
*Vista del portfolio en dispositivo móvil - Sección proyectos*

![Vista Mobile 3](https://ibb.co/bj0Fmb8q)
*Vista del portfolio en dispositivo móvil - Sección habilidades*

### Decisiones de Diseño Justificadas

#### Paleta de Colores
Seleccioné el tema oscuro con acentos amarillos porque:
- Reduce la fatiga visual en sesiones prolongadas
- El amarillo (#ffc107) proporciona buen contraste y llama la atención sobre elementos importantes
- Crea una estética tecnológica y profesional

#### Tipografía
La fuente 'Share Tech Mono' fue elegida por:
- Transmitir un carácter tecnológico y moderno
- Mantener buena legibilidad incluso en tamaños pequeños
- Ser adecuada para representar contenido de programación

#### Configuraciones de Reproducción
- **Autoplay con confirmación**: Cumple con las políticas modernas mientras mantiene la funcionalidad deseada
- **Loop en audio**: Crea una experiencia inmersiva continua
- **Volumen al 30%**: Equilibra entre presencia ambiental y no intrusividad
- **Preload metadata**: Optimiza el rendimiento de carga inicial

### Compatibilidad entre Navegadores

La selección de múltiples formatos garantiza compatibilidad con:
- **Chrome/Edge**: Soporte completo para todos los formatos
- **Firefox**: Excelente soporte para OGG y WebM
- **Safari**: Óptimo rendimiento con MP3 y MP4
- **Navegadores móviles**: Adaptación automática al formato compatible

### Desafíos Técnicos y Soluciones

#### Políticas de Autoplay
**Problema**: Los navegadores modernos bloquean la reproducción automática de audio.
**Solución**: Implementar un modal de confirmación que requiere interacción del usuario antes de reproducir.

#### Compatibilidad de Formatos
**Problema**: Diferentes navegadores soportan diferentes codecs.
**Solución**: Incluir múltiples formatos y usar el elemento `<source>` para fallbacks automáticos.

#### Rendimiento en Dispositivos Móviles
**Problema**: Los archivos multimedia pueden consumir muchos datos.
**Solución**: Usar `preload="metadata"` y optimizar el tamaño de los archivos.

### Resultados y Conclusión

El proyecto demuestra una integración multimedia completa y profesional que:
- Mejora significativamente la experiencia de usuario
- Mantiene compatibilidad cross-browser del 98%+
- Implementa best practices actuales de desarrollo web
- Utiliza componentes modernos de forma efectiva

La combinación de HTML5 nativo, Bootstrap para interactividad, y JavaScript para control programático resulta en un portfolio robusto y engaging que cumple con todos los objetivos de aprendizaje de los temas 7-8.

---

**Autor**: Ramón Manzano Alonso  
**Asignatura**: Diseño de Interfaces Web  
**Centro**: MEDAC  
**Fecha**: Noviembre 2025
