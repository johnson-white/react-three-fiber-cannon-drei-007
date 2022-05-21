## Plan

Highest level component that:

- animates camera constantly towards camera position and lookAt position
- need to set new camera position and lookAt position when react router Link is clicked
- these should be global app states that are updated by child components - perhaps store all scene positions:
  ```js
  [
      { scene1: { pos: vector3; target: vector3 } },
      { scene2: { pos: vector3; target: vector3 } },
      { scene3: { pos: vector3; target: vector3 } }
  ]
  ```
  - every scene needs two meshes with useRef
    - one for moveto
    - one for lookat
  - function that updates/overrides (scene, pos, target) passed as props to children
- react router for pages

User experience:

- user clicks on link
  - update the camera positions to start transforming there
  - react router leads to new page of components

#### Completed

- load gltf into Fiber Canvas
  - use Fibers GLTF2 loader over Spline's code export
- block out a quick scene to move around in using Spline tool for 3D modelling
  - add plenty of spot lights for penumbra lighting
