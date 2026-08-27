---
title: "FPv4 Layer"
description: "The FPv4 Layer node group from Fortnite Porting."
---

# FPv4 Layer

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Layer node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/layer/fpv4-layer.png then uncomment:
![FPv4 Layer](/blender/nodes/shader/layer/fpv4-layer.png)
-->

## Panels

- **Use Layer**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Layer

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `NONE`
- Default: `1`

### Is Transparent

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Default: `0`

### Use Layer

*Inputs in the Use Layer panel.*

#### Use Layer

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Layer
- Default: `True`

#### Diffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Layer
- Default: `(0.8, 0.8, 0.8, 1)`

#### MaskTexture

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Layer
- Default: `(1, 1, 1, 1)`

#### Background Diffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Layer
- Default: `(1, 1, 1, 1)`

#### Background Diffuse Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Layer
- Default: `1`

#### Normals

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Layer
- Default: `(0.5, 0.5, 1, 1)`

#### SpecularMasks

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Layer
- Default: `(0.5, 0, 0.5, 1)`

#### Emission

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Layer
- Default: `(0, 0, 0, 1)`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Background Diffuse](/blender/nodes/utilities/fpv4-background-diffuse)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
- [FPv4 SpecularMasks](/blender/nodes/utilities/fpv4-specularmasks)
