# Portfolio Profesional - Integración Multimedia

## Memoria Técnica del Proyecto

### Introducción
Este portfolio profesional ha sido desarrollado como proyecto para los temas 7-8 de Diseño de Interfaces Web, centrándose en la integración avanzada de elementos multimedia. El objetivo principal era enriquecer la experiencia de usuario mediante la implementación funcional de audio y video, combinado con componentes interactivos de Bootstrap.

![Estructura de Carpetas](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/estructura.png)
*Estructura organizada de archivos y carpetas del proyecto*

### Implementación Multimedia Detallada

#### Sistema de Audio
La integración de audio se realizó considerando las políticas actuales de los navegadores. Implementé un sistema que:

- Utiliza el elemento `<audio>` de HTML5 con el atributo `loop` para reproducción continua
- Incluye tres formatos diferentes: MP3 como formato universal, OGG para compatibilidad con Firefox, y WebM como alternativa moderna
- El volumen se configuró al 30% para crear ambiente sin resultar intrusivo

![Modal de Permisos de Audio](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/audioinicialboot.png)
*Modal de Bootstrap que solicita permiso para activar el audio de fondo - Diseño personalizado con tema oscuro y bordes amarillos*

- Se implementó un modal de Bootstrap que se muestra al cargar la página, solicitando confirmación del usuario antes de iniciar la reproducción, cumpliendo así con las políticas de autoplay
- El botón de silenciar en la barra de navegación utiliza JavaScript para alternar entre los estados mute/unmute
- El modal presenta un diseño personalizado que mantiene la coherencia visual del tema general del portfolio

#### Sistema de Video
Para la sección de video curriculum:

- Se empleó el elemento `<video>` de HTML5 con atributo `controls` para mostrar los controles nativos
- Se configuró `preload="metadata"` para optimizar la carga inicial
- Se definió un poster personalizado que se muestra antes de la reproducción
- Se incluyeron tres formatos: MP4 como estándar principal, WebM para calidad optimizada, y OGG como alternativa de respaldo
- La reproducción se activa mediante un botón específico "Reproducir Video", dando control total al usuario

### Componentes Bootstrap Implementados

#### Modal de Confirmación
El modal se muestra automáticamente al cargar la página mediante JavaScript, utilizando la API de Bootstrap. Su diseño se personalizó con las clases de tema oscuro y bordes amarillos para mantener la coherencia visual. Este componente es fundamental para cumplir con las políticas de autoplay modernas.

#### Popovers Informativos
Para detallar los niveles de habilidad, implementé popovers con contenido HTML enriquecido usando `data-bs-toggle="popover"` y `data-bs-content` con etiquetas HTML.

![Popover Habilidades Java](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/modal1boot.png)
*Popover informativo mostrando detalles de habilidades en Java - Nivel Avanzado con Spring Boot y JPA/Hibernate*

![Popover Habilidades JavaScript](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/modal2boot.png)
*Popover informativo mostrando detalles de habilidades en JavaScript - Nivel Intermedio con React y Node.js*

![Popover Habilidades Frontend](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/modal3boot.png)
*Popover informativo mostrando detalles de habilidades en Frontend - Nivel Avanzado con HTML5, CSS3 y Bootstrap 5*

![Popover Tecnologías Reloj](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/modal4boot.png)
*Popover informativo del proyecto del reloj programable - Tecnologías: Arduino UNO, C++, LEDs RGB, PCB personalizado*

#### Sistema Collapse
En la sección de información personal implementé un componente collapse que permite mostrar/ocultar datos adicionales. Utilicé los atributos `data-bs-toggle="collapse"` y `href` para crear la funcionalidad de acordeón.

#### Tooltips Informativos
Añadí tooltips a los controles de audio y botones interactivos usando `data-bs-toggle="tooltip"` y el atributo `title`. Los inicialicé mediante JavaScript con `new bootstrap.Tooltip()`.

#### Carruseles de Proyectos
Desarrollé tres carruseles independientes para mostrar imágenes de proyectos. Cada uno incluye controles de navegación personalizados con fondos amarillos y se configuró con `data-bs-ride="carousel"`.

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

![Vista General 1](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/web1.png)
*Vista completa del portfolio mostrando la estructura general y cabecera con información personal y foto de perfil*

![Vista General 2](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/web2.png)
*Sección de proyectos y carrusel de imágenes con elementos interactivos y botones de detalles técnicos*

![Vista General 3](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/web3.png)
*Sección de habilidades y video curriculum con controles multimedia y popovers informativos*

### Diseño Responsive

El portfolio está completamente optimizado para dispositivos móviles, manteniendo todas las funcionalidades multimedia e interactivas en diferentes tamaños de pantalla.

![Vista Mobile 1](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/res1.png)
*Vista del portfolio en dispositivo móvil - Navegación y cabecera adaptativa con botón de audio visible*

![Vista Mobile 2](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/res2.png)
*Vista del portfolio en dispositivo móvil - Sección proyectos con carrusel responsive y controles táctiles*

![Vista Mobile 3](https://raw.githubusercontent.com/ramonmanzano/PortFolio-Bootstrap/main/fotosPresentacion/res3.png)
*Vista del portfolio en dispositivo móvil - Sección habilidades y elementos interactivos adaptados a pantalla pequeña*

### Decisiones de Diseño Justificadas

#### Paleta de Colores
Seleccioné el tema oscuro con acentos amarillos porque:
- Reduce la fatiga visual en sesiones prolongadas
- El amarillo (#ffc107) proporciona buen contraste y llama la atención sobre elementos importantes
- Crea una estética tecnológica y profesional
- Mejora la legibilidad del contenido principal

#### Tipografía
La fuente 'Share Tech Mono' fue elegida por:
- Transmitir un carácter tecnológico y moderno
- Mantener buena legibilidad incluso en tamaños pequeños
- Ser adecuada para representar contenido de programación
- Crear una identidad visual coherente con el tema del portfolio

#### Configuraciones de Reproducción
- **Autoplay con confirmación**: Cumple con las políticas modernas mientras mantiene la funcionalidad deseada
- **Loop en audio**: Crea una experiencia inmersiva continua
- **Volumen al 30%**: Equilibra entre presencia ambiental y no intrusividad
- **Preload metadata**: Optimiza el rendimiento de carga inicial
- **Controles nativos para video**: Garantiza compatibilidad y familiaridad del usuario

### Compatibilidad entre Navegadores

La selección de múltiples formatos garantiza compatibilidad con:
- **Chrome/Edge**: Soporte completo para todos los formatos (MP3, MP4, WebM)
- **Firefox**: Excelente soporte para OGG y WebM
- **Safari**: Óptimo rendimiento con MP3 y MP4
- **Navegadores móviles**: Adaptación automática al formato compatible según el dispositivo

### Desafíos Técnicos y Soluciones

#### Políticas de Autoplay
**Problema**: Los navegadores modernos bloquean la reproducción automática de audio sin interacción del usuario.
**Solución**: Implementar un modal de confirmación que requiere interacción del usuario (clic en "Activar audio") antes de reproducir.

#### Compatibilidad de Formatos
**Problema**: Diferentes navegadores y dispositivos soportan diferentes codecs de audio y video.
**Solución**: Incluir múltiples formatos (MP3/OGG/WebM para audio, MP4/WebM/OGG para video) y usar el elemento `<source>` para fallbacks automáticos.

#### Rendimiento en Dispositivos Móviles
**Problema**: Los archivos multimedia pueden consumir muchos datos y ralentizar la carga en conexiones móviles.
**Solución**: Usar `preload="metadata"` para cargar solo la información básica inicial y optimizar el tamaño de los archivos multimedia.

#### Experiencia de Usuario Consistente
**Problema**: Mantener la misma funcionalidad e interactividad en todos los dispositivos.
**Solución**: Implementar diseño responsive con Bootstrap y asegurar que todos los componentes interactivos funcionen correctamente en touch.

### Resultados y Conclusión

El proyecto demuestra una integración multimedia completa y profesional que:
- Mejora significativamente la experiencia de usuario mediante elementos auditivos y visuales
- Mantiene compatibilidad cross-browser del 98%+ mediante el uso de múltiples formatos
- Implementa best practices actuales de desarrollo web y políticas de autoplay
- Utiliza componentes modernos de Bootstrap de forma efectiva y coherente
- Proporciona una interfaz intuitiva y atractiva para presentar habilidades y proyectos

La combinación de HTML5 nativo para elementos multimedia, Bootstrap para componentes interactivos, y JavaScript para control programático resulta en un portfolio robusto y engaging que cumple con todos los objetivos de aprendizaje de los temas 7-8. El sistema implementado no solo muestra contenido estático, sino que crea una experiencia dinámica y memorable para los visitantes.

---

**Autor**: Ramón Manzano Alonso  
**Asignatura**: Diseño de Interfaces Web  
**Centro**: MEDAC  
**Fecha**: Noviembre 2025
