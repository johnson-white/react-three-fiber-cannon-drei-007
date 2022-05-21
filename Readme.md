## Plan

Highest level component that:

- animates camera constantly towards camera position and lookAt position ✔️
- react router for pages, create two pages
  - use ThreeJS html to display some 2D elements (NavBar, h1, Content, Footer)
- need to set new camera position and lookAt position when react router Link is clicked and page changes
- these should be global app states that are updated by child components - perhaps store all scene positions:
  ```js
  [
      { scene1: { pos: vector3; target: vector3 } },
      { scene2: { pos: vector3; target: vector3 } },
      { scene3: { pos: vector3; target: vector3 } }
  ]
  ```
  - every scene needs one mesh with useRef
    - add to origin point for external position, lookAt origin point
  - function that updates/overrides ({scene: {pos, target}}) passed as props to children

User experience:

- user clicks on link
  - update the camera positions to start transforming there
  - react router leads to new page of components

#### ✔️ Completed

- load gltf into Fiber Canvas ✔️
  - use Fibers GLTF2 loader over Spline's code export ✔️
- block out a quick scene to move around in using Spline tool for 3D modelling ✔️
  - add plenty of spot lights for penumbra lighting ✔️
