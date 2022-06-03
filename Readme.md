## Plan

Research R3F with Lamina for layered material and shader-like effects similar to subsurface scattering that can be used to give objects really polished visuals.
Finalise low and medium fidelity 2D wireframes.
Finalise low and medium fidelity 3D wireframes.

Pages currently exist at the origin point and we use React Router to navigate between them. Test decoupling the two pages into separate locations:

- On App Level, render two meshes with a Html wrapper and Page component in each ✔️
- Position meshes away from each other (symmetrical of origin with plenty of space in between ideal for testing) ✔️, update scene co-ordinates in App to make these observable
- Function that updates scene should still be passed into NavBar ✔️
  - Refactor NavBar to no longer use React Router but still update scene onClick ✔️

Highest level component that:

- animates camera constantly towards camera position and lookAt position ✔️
- react router for pages, create two pages ✔️
  - use ThreeJS html to display some 2D elements (NavBar, h1, Content, Footer) ✔️
- need to set new camera position and lookAt position when react router Link is clicked and page changes
  - function passed to NavBar Links that update an active/current scene state ✔️
  - useEffect in App needs to change position and lookAt position vectors depending on this scene state ✔️
  - store all scene positions in App: ✔️
  ```js
  [
      { scene1: { lookFrom: vector3; lookAt: vector3 } },
      { scene2: { lookFrom: vector3; lookAt: vector3 } },
      { scene3: { lookFrom: vector3; lookAt: vector3 } }
  ]
  ```
  Use a mesh as a scene's camera guide so it's easier to change the scene's lookFrom and lookAt values
  - function that updates/overrides ({scene: {lookFrom, lookAt}}) passed as props to mesh children

User experience:

- user clicks on link ✔️
  - update the camera positions to start transforming there ✔️
  - react router leads to new page of components ✔️

#### ✔️ Completed

- load gltf into Fiber Canvas ✔️
  - use Fibers GLTF2 loader over Spline's code export ✔️
- block out a quick scene to move around in using Spline tool for 3D modelling ✔️
  - add plenty of spot lights for penumbra lighting ✔️
