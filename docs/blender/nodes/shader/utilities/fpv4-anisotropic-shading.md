---
title: "FPv4 Anisotropic Shading"
description: "The FPv4 Anisotropic Shading node group from Fortnite Porting."
---

# FPv4 Anisotropic Shading

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Anisotropic Shading node group from Fortnite Porting.

::: info Hidden from Add menu
This node group's name starts with a `.` in Blender, so it does not appear in the Add menu.
:::

<!-- Add a node screenshot at docs/public/blender/nodes/shader/utilities/fpv4-anisotropic-shading.png then uncomment:
![FPv4 Anisotropic Shading](/blender/nodes/shader/utilities/fpv4-anisotropic-shading.png)
-->

## Inputs

### UseAnisotropicShading

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Default: `0`

### AnisotropicTangentWeight

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0.063009, 0.456411, 0.450786, 1)`

### AnisotropicTangentWeight Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Default: `0`

### AnisotropyMaxWeight

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Default: `1`

## Outputs

### Anisotropic

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Default: `0`

### Anisotropic Rotation

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Default: `0`

### Tangent

<!-- TODO: describe this socket -->

- Type: `Vector`
- Subtype: `NONE`
- Default: `(0, 0, 0)`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 G Flip](/blender/nodes/utilities/fpv4-g-flip)
- [FPv4 Vector 0..1 to -1..1](/blender/nodes/utilities/fpv4-vector-0-1-to-1-1)
