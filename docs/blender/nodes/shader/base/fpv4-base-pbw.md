---
title: "FPv4 Base PBW"
description: "The FPv4 Base PBW node group from Fortnite Porting."
---

# FPv4 Base PBW

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Base PBW node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/base/fpv4-base-pbw.png then uncomment:
![FPv4 Base PBW](/blender/nodes/shader/base/fpv4-base-pbw.png)
-->

## Panels

- **Use Normal Map**
- **Use Specular Mask**

## Inputs

### Blueprint_Outline_Texture

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0, 0, 0, 1)`

### Blueprint_Outline_Texture Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Default: `0`

### Diffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0.8, 0.8, 0.8, 1)`

### Emission

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0, 0, 0, 1)`

### Use Normal Map

*Inputs in the Use Normal Map panel.*

#### Use Normal Map

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Normal Map
- Default: `False`

#### NormalMap

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Normal Map
- Default: `(0.5, 0.5, 1, 1)`

### Use Specular Mask

*Inputs in the Use Specular Mask panel.*

#### Use Specular Mask

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Specular Mask
- Default: `True`

#### SpecularMasks

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Specular Mask
- Default: `(0.5, 0, 0.5, 1)`

#### SpecRoughnessMin

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Specular Mask
- Default: `0`

#### SpecRoughnessMax

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Specular Mask
- Default: `1`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Material Attributes](/blender/nodes/utilities/fpv4-material-attributes)
- [FPv4 SpecularMasks](/blender/nodes/utilities/fpv4-specularmasks)
