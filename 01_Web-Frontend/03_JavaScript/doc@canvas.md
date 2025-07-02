To ensure the information about the Canvas API is current and accurate, I will perform a search for its core functionalities and typical use cases.
Here's a plan for the sections:

1.  **Fundamentals of Canvas API:**
      * What is the HTML5 Canvas API?
      * Why use it? (vs. SVG, DOM manipulation).
      * Core concepts: `<canvas>` element, rendering context, drawing primitives, state management.
      * Use cases.
2.  **Drawing Primitives:**
      * Paths: `beginPath()`, `moveTo()`, `lineTo()`, `arc()`, `closePath()`, `stroke()`, `fill()`.
      * Rectangles: `fillRect()`, `strokeRect()`, `clearRect()`.
      * Text: `fillText()`, `strokeText()`, font properties (`font`, `textAlign`, `textBaseline`).
      * Images: `drawImage()`.
3.  **Styles and Colors:**
      * `fillStyle`, `strokeStyle`.
      * `lineWidth`, `lineCap`, `lineJoin`, `miterLimit`.
      * Gradients: `createLinearGradient()`, `createRadialGradient()`, `addColorStop()`.
      * Patterns: `createPattern()`.
      * Shadows: `shadowOffsetX`, `shadowOffsetY`, `shadowBlur`, `shadowColor`.
4.  **Transformations:**
      * `translate()`, `rotate()`, `scale()`.
      * `save()` and `restore()` for managing transformation state.
      * `transform()` and `setTransform()` for matrix transformations.
5.  **Pixels and Images:**
      * `getImageData()`: Getting pixel data.
      * `putImageData()`: Putting pixel data back.
      * Image manipulation (pixel-level effects).
      * Drawing images from `<img>`, `<video>`, `<canvas>`, `ImageBitmap`.
      * `createImageBitmap()` for optimized image drawing.
6.  **Animations:**
      * `requestAnimationFrame()`.
      * Animation loop: Clear, draw, update.
      * State management for animated objects.
7.  **Interactivity:**
      * Event listeners (mouse, keyboard, touch) on the `<canvas>` element.
      * Detecting clicks/hovers on drawn shapes (e.g., using `isPointInPath()`).
      * Hit testing.
8.  **Performance Considerations:**
      * Minimizing state changes.
      * Batching draw calls.
      * Offscreen canvas.
      * Avoiding floating-point coordinates.
      * `will-change` CSS property.
      * Debouncing/throttling expensive redraws.
9.  **WebGL vs. Canvas 2D:**
      * When to choose one over the other.
      * Core differences (2D vs. 3D, GPU acceleration, API complexity).
10. **Accessibility:**
      * Fallback content for `<canvas>`.
      * ARIA attributes.
      * Providing alternative ways to interact with data.
11. **Common Patterns & Best Practices:**
      * Organizing drawing code (e.g., drawing functions).
      * Managing canvas size and responsiveness.
      * Clear `canvas` element.
      * Using helper libraries (e.g., Konva.js, Fabric.js, Paper.js).
12. **Common Interview Questions & Scenarios.**

This plan covers a comprehensive range of topics for a Canvas API interview, including its integration within a web environment, performance, and best practices.
The Canvas API is a fundamental and widely-used part of modern web development. The search results confirm its core functionalities, common use cases, and key interfaces. I have sufficient information to proceed with generating the interview guide.

Here's an extensive, topic-wise guide for a Canvas API interview, with a focus on its core functionalities, practical applications, and performance considerations.

-----

# Canvas API Interview Guide (Extensive Topic-Wise)

This document provides a comprehensive guide to the HTML5 Canvas API, covering its fundamental principles, drawing capabilities, advanced techniques, performance considerations, and common use cases. It's designed to prepare you for interviews focused on 2D graphics rendering in web browsers.

## Table of Contents

1.  [Fundamentals of Canvas API](https://www.google.com/search?q=%231-fundamentals-of-canvas-api)
2.  [Getting Started with Canvas](https://www.google.com/search?q=%232-getting-started-with-canvas)
3.  [Drawing Primitives](https://www.google.com/search?q=%233-drawing-primitives)
4.  [Styles and Colors](https://www.google.com/search?q=%234-styles-and-colors)
5.  [Transformations](https://www.google.com/search?q=%235-transformations)
6.  [Pixels and Images](https://www.google.com/search?q=%236-pixels-and-images)
7.  [Compositing and Clipping](https://www.google.com/search?q=%237-compositing-and-clipping)
8.  [Animations](https://www.google.com/search?q=%238-animations)
9.  [Interactivity](https://www.google.com/search?q=%239-interactivity)
10. [Performance Considerations](https://www.google.com/search?q=%2310-performance-considerations)
11. [WebGL vs. Canvas 2D](https://www.google.com/search?q=%2311-webgl-vs-canvas-2d)
12. [Accessibility](https://www.google.com/search?q=%2312-accessibility)
13. [Common Patterns & Best Practices](https://www.google.com/search?q=%2313-common-patterns--best-practices)
14. [Common Interview Questions & Scenarios](https://www.google.com/search?q=%2314-common-interview-questions--scenarios)

-----

## 1\. Fundamentals of Canvas API

  * **What is the HTML5 Canvas API?**
      * A JavaScript API for drawing 2D graphics on the HTML `<canvas>` element.
      * It's a low-level, pixel-based drawing surface (raster graphics).
      * Graphics are rendered immediately; once drawn, they become part of the canvas bitmap and lose their individual identity (unlike SVG).
  * **Why use it? (Advantages & Disadvantages vs. SVG/DOM)**
      * **Advantages:**
          * **Performance for complex scenes:** Excellent for drawing a large number of shapes or complex pixel manipulations (e.g., image filters, video processing, games) due to its immediate mode rendering and direct pixel control.
          * **Real-time rendering:** Ideal for animations, simulations, and real-time data visualization where performance is critical.
          * **Image manipulation:** Powerful for working with pixel data (`getImageData`, `putImageData`) for effects, filters, etc.
      * **Disadvantages:**
          * **No DOM representation:** Drawn elements are not part of the DOM, making direct event handling (e.g., clicking a specific shape) more complex (requires manual hit testing).
          * **Scalability:** Graphics can become pixelated if scaled up too much, as they are bitmap-based.
          * **Accessibility:** Less inherent accessibility than DOM elements or SVG, requiring manual effort.
      * **Vs. SVG:**
          * **Canvas:** Pixel-based, immediate mode, better for complex, dynamic scenes, image manipulation.
          * **SVG:** Vector-based, retained mode (each element is a DOM object), better for static, scalable graphics, easier interactivity for individual shapes, better accessibility.
  * **Core Concepts:**
      * **`<canvas>` element:** The HTML element that acts as the drawing surface. It's just a container; actual drawing is done with JavaScript.
      * **Rendering Context:** The object (`CanvasRenderingContext2D`) returned by `canvas.getContext('2d')`. This object provides all the drawing methods and properties.
      * **Coordinate System:** The origin (0,0) is at the top-left corner of the canvas. X-coordinates increase to the right, Y-coordinates increase downwards.
      * **Drawing Primitives:** Basic shapes like rectangles, lines, arcs, and text.
      * **State Management:** `save()` and `restore()` methods to save and restore the current drawing state (transformations, styles, clipping paths).
  * **Common Use Cases:**
      * Games (2D)
      * Data visualization (charts, graphs, interactive dashboards)
      * Image processing and photo editing tools
      * Animations and simulations
      * Real-time video manipulation
      * Interactive drawing applications (e.g., whiteboards)

-----

## 2\. Getting Started with Canvas

  * **HTML Structure:**
    ```html
    <canvas id="myCanvas" width="800" height="600">
        Your browser does not support the Canvas API.
    </canvas>
    ```
      * The `width` and `height` attributes (not CSS properties) define the drawing surface resolution.
      * Fallback content for browsers that don't support canvas.
  * **JavaScript Initialization:**
    ```javascript
    const canvas = document.getElementById('myCanvas');
    if (canvas.getContext) { // Check for browser support
        const ctx = canvas.getContext('2d');
        // Now you can start drawing with ctx
    } else {
        console.error('Canvas not supported by this browser.');
    }
    ```
  * **Canvas Dimensions:**
      * `canvas.width` and `canvas.height`: Set the internal drawing surface size (important for resolution).
      * CSS `width` and `height`: Scale the rendered canvas (can lead to blurring if different from internal dimensions).
      * Best practice: Set `width` and `height` attributes directly on the `<canvas>` element or via JavaScript on the `canvas` object for precise resolution control.

-----

## 3\. Drawing Primitives

The `CanvasRenderingContext2D` object provides methods for drawing shapes.

  * **Rectangles:**
      * `fillRect(x, y, width, height)`: Draws a filled rectangle.
      * `strokeRect(x, y, width, height)`: Draws an outlined rectangle.
      * `clearRect(x, y, width, height)`: Clears a rectangular area, making it fully transparent. Often used to clear the entire canvas for animation frames.
  * **Paths (for lines, curves, and custom shapes):**
      * `beginPath()`: Starts a new path. Any subsequent path drawing commands are part of this new path.
      * `moveTo(x, y)`: Moves the drawing pen to a new point without drawing a line.
      * `lineTo(x, y)`: Draws a straight line from the current point to the specified point.
      * `arc(x, y, radius, startAngle, endAngle, counterclockwise)`: Draws an arc or a circle. Angles are in radians.
      * `arcTo(x1, y1, x2, y2, radius)`: Draws an arc with two tangents.
      * `quadraticCurveTo(cx, cy, x, y)`: Draws a quadratic Bézier curve. `(cx, cy)` is the control point.
      * `bezierCurveTo(cx1, cy1, cx2, cy2, x, y)`: Draws a cubic Bézier curve. `(cx1, cy1)` and `(cx2, cy2)` are control points.
      * `closePath()`: Closes the current path by drawing a straight line back to the `beginPath()` point.
      * `stroke()`: Renders the outline of the current path.
      * `fill()`: Fills the current path with the current `fillStyle`.
      * `rect(x, y, width, height)`: Creates a rectangular path.
  * **Text:**
      * `font = "48px serif"`: Sets the font style (CSS font syntax).
      * `textAlign = "center"`: Sets text alignment (`start`, `end`, `left`, `right`, `center`).
      * `textBaseline = "middle"`: Sets vertical alignment (`alphabetic`, `top`, `hanging`, `middle`, `ideographic`, `bottom`).
      * `fillText(text, x, y, maxWidth)`: Draws filled text.
      * `strokeText(text, x, y, maxWidth)`: Draws outlined text.
      * `measureText(text)`: Returns a `TextMetrics` object with information about text width.
  * **Images:**
      * `drawImage(image, dx, dy)`: Draws an image at a specific position.
      * `drawImage(image, dx, dy, dWidth, dHeight)`: Draws an image and scales it to a new size.
      * `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`: Draws a cropped portion of an image and scales it.
      * `image`: Can be an `HTMLImageElement`, `HTMLVideoElement`, `HTMLCanvasElement`, or `ImageBitmap`.

-----

## 4\. Styles and Colors

  * **`fillStyle` (string | CanvasGradient | CanvasPattern):** Sets the color, gradient, or pattern to use when filling shapes.
  * **`strokeStyle` (string | CanvasGradient | CanvasPattern):** Sets the color, gradient, or pattern to use when outlining shapes.
  * **Line Styles:**
      * `lineWidth` (number): Thickness of lines.
      * `lineCap` (string): Style of line endings (`butt`, `round`, `square`).
      * `lineJoin` (string): Style of corners when two lines meet (`round`, `bevel`, `miter`).
      * `miterLimit` (number): Maximum miter length when `lineJoin` is `miter`.
  * **Gradients:**
      * `createLinearGradient(x0, y0, x1, y1)`: Creates a linear gradient object.
      * `createRadialGradient(x0, y0, r0, x1, y1, r1)`: Creates a radial gradient object.
      * `gradient.addColorStop(offset, color)`: Adds color stops to a gradient.
  * **Patterns:**
      * `createPattern(image, repetition)`: Creates a pattern from an image (`repeat`, `repeat-x`, `repeat-y`, `no-repeat`).
  * **Shadows:**
      * `shadowOffsetX` (number): Horizontal distance of the shadow.
      * `shadowOffsetY` (number): Vertical distance of the shadow.
      * `shadowBlur` (number): Amount of blur applied to the shadow.
      * `shadowColor` (string): Color of the shadow.

-----

## 5\. Transformations

Transformations modify the canvas's coordinate system. They apply to all subsequent drawing operations.

  * **`translate(x, y)`:** Moves the origin (0,0) of the canvas.
  * **`rotate(angle)`:** Rotates the canvas around its current origin (in radians).
  * **`scale(x, y)`:** Scales the canvas horizontally and vertically.
  * **`save()` and `restore()`:**
      * `save()`: Pushes the current drawing state (transformations, `fillStyle`, `strokeStyle`, `shadow*` properties, `font`, `textAlign`, `textBaseline`, clipping path) onto a stack.
      * `restore()`: Pops the last saved state from the stack, restoring the canvas to that state.
      * Crucial for complex drawing, allowing you to apply temporary transformations or styles without affecting other parts of your drawing.
  * **`transform(a, b, c, d, e, f)`:** Directly applies a transformation matrix.
      * `a` (m11): Horizontal scaling.
      * `b` (m12): Horizontal skewing.
      * `c` (m21): Vertical skewing.
      * `d` (m22): Vertical scaling.
      * `e` (dx): Horizontal translation.
      * `f` (dy): Vertical translation.
  * **`setTransform(a, b, c, d, e, f)`:** Resets the current transformation matrix to the identity matrix, then applies the new transformation. Use this to explicitly set a transformation without accumulating previous ones.
  * **`resetTransform()`:** Resets the current transform to the identity matrix.

-----

## 6\. Pixels and Images

  * **`getImageData(sx, sy, sw, sh)`:**
      * Returns an `ImageData` object representing the pixel data for a specified rectangle of the canvas.
      * The `data` property of `ImageData` is a `Uint8ClampedArray` containing RGBA values for each pixel (four values per pixel).
      * Useful for pixel-level manipulation (e.g., grayscale, sepia, inversions).
  * **`putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)`:**
      * Puts the pixel data from an `ImageData` object onto the canvas.
      * The `dirty` parameters allow drawing only a portion of the `ImageData` object.
  * **Image Loading:**
    ```javascript
    const img = new Image();
    img.src = 'path/to/image.png';
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
    };
    img.onerror = () => {
        console.error('Image failed to load.');
    };
    ```
  * **`createImageBitmap()`:**
      * Asynchronously creates an `ImageBitmap` from various sources (Image elements, Blob, ImageData, etc.).
      * `ImageBitmap` is an optimized representation for drawing images to a canvas, often on the GPU.
      * Can be used with Web Workers for image processing off the main thread.

-----

## 7\. Compositing and Clipping

  * **`globalAlpha` (number):** Sets the transparency value (0.0 to 1.0) for all subsequent drawing operations.
  * **`globalCompositeOperation` (string):** Defines how new shapes are drawn onto existing shapes. Many values like `'source-over'` (default), `'destination-over'`, `'multiply'`, `'screen'`, `'overlay'`, etc.
      * Useful for blend modes, creating masked effects.
  * **Clipping Paths:**
      * `clip()`: Turns the current path into a clipping region. Only subsequent drawing operations within this region will be visible.
      * Requires `beginPath()`, path drawing commands, and then `clip()`.
      * Must be saved and restored using `save()` and `restore()` to prevent it from affecting the entire canvas.

-----

## 8\. Animations

Canvas animations typically follow a continuous loop.

  * **`requestAnimationFrame(callback)`:**
      * The preferred method for animations.
      * Tells the browser you want to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.
      * Optimized for performance: browser controls frame rate, pauses when tab is in background.
  * **Animation Loop Structure:**
    ```javascript
    let animationFrameId;

    function animate() {
        // 1. Update state (e.g., position, rotation of objects)
        // 2. Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 3. Draw objects based on updated state
        // 4. Request next frame
        animationFrameId = requestAnimationFrame(animate);
    }

    // To start:
    // animate();

    // To stop:
    // cancelAnimationFrame(animationFrameId);
    ```
  * **Delta Time:** Calculate the time elapsed between frames to make animations smooth and consistent across different frame rates.
    ```javascript
    let lastTime = 0;
    function animate(currentTime) {
        const deltaTime = currentTime - lastTime; // Milliseconds since last frame
        lastTime = currentTime;

        // Use deltaTime to update positions/animations
        // e.g., object.x += object.speed * (deltaTime / 1000); // speed in pixels/second

        // ... clear and draw ...
        requestAnimationFrame(animate);
    }
    ```

-----

## 9\. Interactivity

Since Canvas elements don't have a DOM representation for individual shapes, interactivity requires manual hit testing.

  * **Event Listeners on `<canvas>`:**
      * Attach standard DOM event listeners (e.g., `click`, `mousemove`, `mousedown`, `mouseup`, `touchstart`, `touchmove`, `touchend`) directly to the `<canvas>` element.
    <!-- end list -->
    ```javascript
    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Perform hit testing here
        if (isPointInCircle(mouseX, mouseY, circleX, circleY, circleRadius)) {
            console.log('Clicked on circle!');
        }
    });
    ```
  * **Hit Testing:**
      * **Manual Calculation:** For simple shapes (rectangles, circles), calculate if the mouse coordinates fall within the shape's bounds.
      * **`ctx.isPointInPath(x, y)`:** Checks if a given point is inside the current path (after `beginPath()` and path commands, but *before* `stroke()` or `fill()`).
        ```javascript
        function drawClickableRect(x, y, w, h) {
            ctx.beginPath();
            ctx.rect(x, y, w, h);
            ctx.fillStyle = 'blue';
            ctx.fill();
        }

        canvas.addEventListener('click', (event) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            // Redraw the shape as a path and then check
            ctx.beginPath();
            ctx.rect(100, 100, 50, 50); // The shape you want to check
            if (ctx.isPointInPath(mouseX, mouseY)) {
                console.log('Clicked on the blue rectangle!');
            }
        });
        ```
      * **Offscreen Canvas for Picking:** For complex scenes, draw unique colors for each object onto an invisible offscreen canvas. When a click occurs, read the pixel color from the offscreen canvas to identify the clicked object.
  * **State Management for Interactivity:** Maintain an array or map of your drawn objects, each with its position, size, and other properties, to facilitate hit testing and state updates (e.g., hovering, selection).

-----

## 10\. Performance Considerations

  * **Minimize State Changes:** Changing `fillStyle`, `strokeStyle`, `font`, `transformations`, etc., is relatively expensive. Group drawing operations that share the same state.
  * **Batch Draw Calls:** If drawing many similar shapes, try to draw them in batches rather than changing styles between each one.
  * **Avoid Floating-Point Coordinates:** Drawing on non-integer coordinates can lead to anti-aliasing and blurred lines. Use `Math.floor()` or `Math.round()` for pixel-perfect drawing.
  * **Offscreen Canvas (Double Buffering):**
      * Draw complex scenes to an invisible `<canvas>` in memory (`document.createElement('canvas')`).
      * Then, draw this offscreen canvas onto the visible canvas using `ctx.drawImage()`.
      * This prevents flickering during complex redraws by presenting a complete frame at once.
  * **`OffscreenCanvas` (Web Workers):**
      * Newer API for performing Canvas drawing operations entirely within a Web Worker.
      * Ideal for very complex or heavy drawing tasks that would otherwise block the main thread, keeping the UI responsive.
      * Requires transfer control of the canvas from the main thread to the worker.
  * **Clear Only What's Necessary:** Instead of `clearRect(0, 0, width, height)` for the entire canvas, clear only the regions that have changed, if possible. (Often complex for general animations).
  * **Hardware Acceleration:** Modern browsers often hardware-accelerate canvas operations, but inefficient code can still be slow.
  * **`will-change` CSS Property:** Can hint to the browser that an element (like your canvas) is expected to change frequently, allowing it to optimize rendering resources.
  * **Debounce/Throttle Redraws:** If external events trigger redraws (e.g., window resize, data updates), debounce or throttle the redraw function to prevent excessive rendering.

-----

## 11\. WebGL vs. Canvas 2D

  * **Canvas 2D:**
      * **API:** High-level, easy to learn, focuses on 2D drawing primitives.
      * **Acceleration:** Often software-rendered initially, but modern browsers can accelerate common 2D operations on GPU.
      * **Use Cases:** Standard charts, simple games, basic image manipulation.
  * **WebGL:**
      * **API:** Low-level, complex, direct interface to GPU for 3D (and advanced 2D). Uses OpenGL ES 2.0.
      * **Acceleration:** Always hardware-accelerated (runs directly on GPU).
      * **Use Cases:** Complex 3D graphics, high-performance 2D games, advanced visual effects, virtual reality.
      * **When to choose:** Use WebGL if you need true 3D rendering, highly complex 2D scenes that push the limits of Canvas 2D, or pixel-perfect control over GPU pipelines. For most 2D charting and simple animations, Canvas 2D is sufficient and much easier to work with.

-----

## 12\. Accessibility

The Canvas API, being pixel-based, poses challenges for accessibility compared to DOM elements.

  * **Fallback Content:** Provide descriptive text within the `<canvas>` tags for users whose browsers don't support canvas or who rely on screen readers.
  * **ARIA Attributes:** Add `role="img"` and `aria-label` or `aria-describedby` to the `<canvas>` element to describe the overall content.
  * **Alternative Information:**
      * Provide a data table below or near the chart for screen reader users or those with visual impairments.
      * Offer keyboard navigable controls outside the canvas to manipulate the canvas content.
  * **Interactive Labels/Tooltips:** When making parts of the canvas interactive, ensure there's an accessible way to convey the information normally provided by visual tooltips or highlights.

-----

## 13\. Common Patterns & Best Practices

  * **Modularity:** Break down complex drawing into smaller, reusable functions (e.g., `drawCircle(ctx, x, y, r)`, `drawChartBar(ctx, data)`).
  * **Responsiveness:**
      * Adjust `canvas.width` and `canvas.height` (attributes, not CSS) on window resize.
      * Scale drawing operations based on the new dimensions.
      * Use `devicePixelRatio` to draw at the screen's native resolution for crisp graphics on high-DPI displays.
  * **Clear Canvas Explicitly:** Always clear the canvas before drawing a new frame in an animation. `clearRect()` is the standard.
  * **Separate Data from Drawing:** Keep your application state (data for shapes, their positions, colors) separate from the drawing logic. The drawing logic consumes this state.
  * **Use Helper Libraries:** For complex interactions, advanced animations, or scene graph management, consider libraries like:
      * **Konva.js:** 2D canvas library for desktop and mobile, with scene graph, events, and layering.
      * **Fabric.js:** Object model on top of canvas, allows manipulating objects directly. Also has SVG parsing.
      * **Paper.js:** Vector graphics scripting framework.
      * **PixiJS:** 2D WebGL renderer that falls back to Canvas 2D, excellent for games and high-performance 2D.
  * **Resource Loading:** Handle image and other asset loading asynchronously, and only start drawing once all necessary resources are loaded.

-----

## 14\. Common Interview Questions & Scenarios

  * **"What is the HTML5 Canvas API, and how does it differ from SVG?"**
  * **"When would you choose Canvas over SVG, and vice-versa?"**
  * **"Explain the concept of a 'rendering context' in Canvas."**
  * **"How do you draw a rectangle, a line, and a circle on a canvas?"**
  * **"What are `ctx.save()` and `ctx.restore()` used for, and why are they important?"**
  * **"How do you apply transformations (translate, rotate, scale) in Canvas? Do they affect subsequent drawings?"**
  * **"Describe the typical animation loop using `requestAnimationFrame`. Why is it preferred over `setInterval`?"**
  * **"How do you handle user interaction (e.g., clicks, mouse movements) on shapes drawn on a canvas, given that shapes aren't part of the DOM?"**
  * **"Explain `getImageData()` and `putImageData()`. What are some practical uses for them?"**
  * **"What are `globalAlpha` and `globalCompositeOperation`? Give an example of their use."**
  * **"What are some common performance pitfalls in Canvas drawing, and how would you optimize for them?"**
  * **"When might you consider using `OffscreenCanvas` or a Web Worker with Canvas?"**
  * **"How do you ensure a Canvas drawing is accessible to users with disabilities?"**
  * **"Describe a scenario where you'd use a clipping path."**
  * **Coding Scenarios:**
      * Write JavaScript to draw a simple house (rectangle for body, triangle for roof, rectangle for door) on a canvas.
      * Create an animated bouncing ball on a canvas.
      * Implement a simple drawing application where the user can draw freehand lines with their mouse.
      * Given an image loaded on the canvas, write code to apply a grayscale filter.
      * Draw a clickable circle on the canvas and log its coordinates when clicked.