## `Theory assignment solution :`

## When and why do we need `lazy()`?

- The `lazy()` function is a feature introduced in React 16.6 that allows for the lazy loading of components.
- The `lazy()` function is typically used in scenarios where you have large or less frequently used components that you want to load `asynchronously`.

## What is `suspense`?

- `Suspense` is a component that helps manage the loading state of dynamic imports, such as lazily loaded components, and provides a `fallback` UI to display while the requested content is being loaded. It enables a better user experience by showing a `loading indicator` or `placeholder content` until the desired component or data is ready to be rendered..

- `Suspense` component allows us to show some fallback content (such as a `loading indicator/ Shimmer component`) while we’re waiting for the lazy component to load or the component is not yet rendered. It is similar to catch block. If a component suspends, the closest Suspense component above the suspending component catches it

## Advantages and Disadvantages of using this `code splitting pattern`?

| Advantages                                                                                                                                                                                                                                                                                                                | Disadvantages                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. `Improved performance`: Code splitting allows you to load only the necessary parts of your application when they are needed, reducing the initial bundle size. This results in faster load times and improved overall performance, particularly for larger applications.                                               | 1. `Increased complexity`: Code splitting adds complexity to your application's architecture, requiring you to manage and coordinate the loading of different code chunks. This can make the development process more challenging and may require additional tooling and configuration.                                        |
| 2. `Faster initial load`: By deferring the loading of non-essential code until it is actually required, code splitting can significantly reduce the time it takes for the initial page to load. This can greatly enhance the user experience, especially for users with slower internet connections or on mobile devices. | 2. `Potential for suboptimal user experience`: If code splitting is not implemented carefully, it can lead to suboptimal user experiences. Poorly optimized code splitting may result in visible loading delays or multiple small network requests, which can negatively impact the perceived performance of your application. |
| 3. `Better resource utilization`: With code splitting, you can optimize resource utilization by loading code chunks only when they are needed. This can reduce memory consumption and improve the efficiency of your application.                                                                                         | 3. `Additional network requests`: Code splitting can lead to an increase in the number of network requests made by your application. While these requests may be smaller in size, the total number of requests may still impact the overall load time, especially in scenarios with slower network connections.                |

## When `do we and why do we need suspense`?

When you want to load components lazily or `on- demand`, Suspense allows you to specify `fallback` content that will be displayed while the component is being loaded. This helps improve the user experience by showing a loading indicator or placeholder content until the component is ready to render.
