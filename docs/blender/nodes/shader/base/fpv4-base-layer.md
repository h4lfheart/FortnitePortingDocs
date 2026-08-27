---
title: "FPv4 Base Layer"
description: "The FPv4 Base Layer node group from Fortnite Porting."
---

# FPv4 Base Layer

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Base Layer node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/base/fpv4-base-layer.png then uncomment:
![FPv4 Base Layer](/blender/nodes/shader/base/fpv4-base-layer.png)
-->

## Inputs

### Is Transparent

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Default: `0`

### Diffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0.8, 0.8, 0.8, 1)`

### MaskTexture

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(1, 1, 1, 1)`

### Background Diffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(1, 1, 1, 1)`

### Background Diffuse Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Default: `1`

### Normals

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0.5, 0.5, 1, 1)`

### SpecularMasks

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0.5, 0, 0.5, 1)`

### Emission

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0, 0, 0, 1)`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Background Diffuse](/blender/nodes/utilities/fpv4-background-diffuse)
- [FPv4 Material Attributes](/blender/nodes/utilities/fpv4-material-attributes)
- [FPv4 SpecularMasks](/blender/nodes/utilities/fpv4-specularmasks)
