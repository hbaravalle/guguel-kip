# Guguel Kip

Una app de notas estilo Keep, hecha para **enseñar hooks de React en clase**.

La app no es el objetivo, es la excusa. Cada interacción común (borrar una nota, crear otra, buscar, cambiar el ancho de la ventana) dispara un hook distinto. Un panel lateral, el **Modo clase**, cuenta en el momento qué hook corrió y por qué.

Toda la UI está en español rioplatense.

---

## La idea

Los hooks se entienden mejor viéndolos reaccionar a algo real que leyendo la teoría. Por eso:

1. **Usás la app normalmente.** No hay un tour fijo ni pasos a seguir.
2. **Corren los hooks reales.** Cada hook que se ejecuta deja una entrada en el log, con la hora y el componente.
3. **El panel narra el evento.** Si corrieron varios hooks, explica el que corresponde a esa acción. El resto queda en el log.
4. **Podés romperlo a propósito.** Cada hook tiene un "modo malo" (sin cleanup, sin `useMemo`, etc.) y el problema se ve en la app, no en una simulación.

El panel es **explicativo, no un desafío**: no hay quiz ni "adiviná qué va a pasar". La comparación se hace cambiando de modo y mirando una tabla de métricas.

---

## Qué acción enseña qué hook

| Acción en la app            | Hook                         | Qué se ve                                                                                                                 | Modo malo                                                                                  |
| --------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Borrar una nota             | `useEffect`                  | Se desmonta la card y aparece un toast que se cierra solo a los 4 s. El cleanup cancela el timer si el toast se va antes. | **Sin cleanup:** si borrás dos notas seguidas, el segundo toast se cierra antes de tiempo. |
| Recargar o cambiar el ancho | `useLayoutEffect`            | El masonry mide el alto real de cada card y la ubica **antes** de que el navegador pinte.                                 | **`useEffect` + cámara lenta:** las cards se ven saltar a su lugar.                        |
| Editar una nota             | `useCallback` + `React.memo` | Solo se re-renderiza la card que cambió. Se mide con un contador de renders.                                              | **Sin `useCallback`** (o con una prop inline): se re-renderizan todas.                     |
| Buscar o hacer hover        | `useMemo`                    | El filtrado de notas se recalcula solo cuando cambian las notas o la búsqueda.                                            | **Sin `useMemo`:** con 1.000 notas, cada render vuelve a filtrar todo.                     |
| Abrir "Crear nota"          | `useRef`                     | El foco va directo al título (`titleRef.current.focus()`), sin estado y sin re-render.                                    | **Contador en `useState`:** cada cambio provoca un render innecesario.                     |
| (todas)                     | `useState`                   | Aparece en el log cada vez que cambia el estado: `notes: 22 → 21`.                                                        | —                                                                                          |

---

## Modo clase

Se abre con el botón `</>` del header o con un link `?exp=…`.

**Partes del panel**

- **Qué acaba de pasar:** título, explicación, el fragmento de código del hook y una sugerencia ("Probá: tocá Deshacer antes de 4 s").
- **Comparar:** alterna entre el modo bueno y el malo (por ejemplo, "con cleanup / sin cleanup"). Dice qué mirar y qué hacer, y muestra la tabla de métricas.
- **Log:** todos los hooks que corrieron, con la hora, un badge de color por hook y el componente.

**Barra de herramientas**

- **Cámara lenta:** frena los efectos unos 300 ms para que el salto se vea. Es exagerado a propósito.
- **1.000 notas:** carga datos de sobra para que las diferencias se puedan medir.
- **Reset:** vuelve los datos, los modos y el log al estado inicial.
- **Compartir:** copia el link `?exp=` del experimento activo, para preparar la clase.

**Reglas**

- **Un evento a la vez.** Si una acción dispara varios hooks, la explicación elige el que corresponde a esa acción.
- **Comparar sigue a la explicación.** Si aparece otro hook, la tarjeta cambia de experimento.
- **El modo malo persiste** hasta que lo apagás o tocás Reset, y el panel lo marca.
- **El modo malo es real.** El componente usa de verdad la versión rota. Se mide con `<Profiler>` y `performance.now()`, igual que el modo bueno.
- **`?exp=` abre listo:** la app arranca en ese modo y con el panel abierto.

**Colores de los hooks** (también se usan en los badges del log)

| Hook              | Token                        |
| ----------------- | ---------------------------- |
| `useState`        | `--color-hook-state`         |
| `useEffect`       | `--color-hook-effect`        |
| `useLayoutEffect` | `--color-hook-layout-effect` |
| `useRef`          | `--color-hook-ref`           |
| `useMemo`         | `--color-hook-memo`          |
| `useCallback`     | `--color-hook-callback`      |

---

## Diseño: Figma primero

El diseño se hizo entero en Figma antes de escribir código. La primera vez se saltó directo al código y no funcionó.

- **Archivo:** [Guguel Kip v2](https://www.figma.com/design/d8V5LE8iCXR1qr9s7tLX3S/)
- **Páginas:** Cover, Foundations (variables y text styles), Components, Screens (desktop y mobile) y Hooks layer (los escenarios 1 a 6b del Modo clase, el diagrama `useEffect` vs `useLayoutEffect` y el flujo del panel). La v1 quedó en "Archive (v1)".
- **Figma y código van sincronizados.** Si algo cambia en el código, se lleva a Figma, y al revés.
- **Las variables tienen code syntax CSS.** Lo que ves en Dev Mode (`var(--color-bg-canvas)`) existe con el mismo nombre en `src/styles/tokens.css`.
- **Los nombres de las capas son los nombres en el código.** `Note`, `Note actions`, `Create input` y `Toast` se convierten en componentes y clases BEM (`.note`, `.note-actions`…).

---

## Stack y decisiones

| Decisión                            | Por qué                                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Vite + React 19 + TypeScript**    | Arranque rápido y sin magia: los alumnos ven React tal cual.                                                      |
| **React Compiler apagado**          | El compiler memoiza solo y haría invisibles `useMemo` y `useCallback`, que son justamente lo que hay que mostrar. |
| **CSS plano con custom properties** | Sin Tailwind ni CSS-in-JS: los tokens de Figma pasan 1:1 a variables CSS.                                         |
| **lucide-react**                    | Son los mismos íconos que en Figma (cada componente de ícono dice qué `<Icon />` usar).                           |
| **Inter + Cascadia Mono**           | Cascadia Mono no tiene ligaduras, así los alumnos leen `=>` y `!==` tal como se escriben.                         |
| **Fuentes con `@fontsource`**       | Funcionan sin conexión, algo útil en un aula con mala conexión.                                                   |

---

## Estructura

```
guguel-kip/
├── src/
│   ├── components/   # UI de la app: Note, Masonry, Composer, Toast…
│   ├── hooks/        # hooks propios (por ejemplo, el que registra eventos en el log)
│   ├── devtools/     # todo lo del Modo clase: panel, log, modos malos, <Profiler>
│   ├── styles/       # tokens.css (espejo de las variables de Figma) + tus estilos
│   └── assets/       # logo
```

La app y el Modo clase están separados a propósito: `devtools/` observa la app pero no forma parte de ella. Así se puede mostrar la app "limpia" y después prender el panel.

---

## Orden recomendado para construirla

1. **Base:** tokens, estilos base y el layout (sidebar, top bar, contenido).
2. **Note estática:** una card con datos hardcodeados, sus 4 colores y el hover de las acciones.
3. **Estado de las notas** (`useState`): listar, crear, editar, archivar, borrar y restaurar.
4. **Toast al borrar** (`useEffect`): el timer de 4 s con cleanup y "Deshacer".
5. **Masonry** (`useLayoutEffect`): medir cards, calcular columnas y recalcular al cambiar el ancho.
6. **Composer** (`useRef`): colapsado/expandido y foco automático en el título.
7. **Búsqueda** (`useMemo`): filtrar por título y contenido, contar resultados y mostrar el estado vacío.
8. **`React.memo` + `useCallback`:** el contador de renders por card.
9. **Modo clase:**
    1. Infraestructura del log (un contexto donde cada hook registra su evento).
    2. Panel con "Qué acaba de pasar".
    3. Modos malos reales y la tarjeta "Comparar" con `<Profiler>`.
    4. Barra: cámara lenta, 1.000 notas, Reset y Compartir.
    5. Links `?exp=`.
10. **Mobile:** sidebar en menú y el panel como bottom sheet.

> **Ojo con StrictMode:** en desarrollo React monta, desmonta y vuelve a montar cada componente. Si no se explica, el log va a mostrar efectos duplicados. Se puede aprovechar para enseñar por qué el cleanup importa.

---

## Correrlo

```bash
npm install
npm run dev
```
