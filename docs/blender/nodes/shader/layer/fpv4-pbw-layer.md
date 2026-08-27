---
title: "FPv4 PBW Layer"
description: "The FPv4 PBW Layer node group from Fortnite Porting."
---

# FPv4 PBW Layer

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 PBW Layer node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/layer/fpv4-pbw-layer.png then uncomment:
![FPv4 PBW Layer](/blender/nodes/shader/layer/fpv4-pbw-layer.png)
-->

## Panels

- **Use Layer**
- **Use Diffuse**
- **Use Normal Map**
- **Use Specular Mask**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Layer

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `NONE`
- Default: `1`

### Use Layer

*Inputs in the Use Layer panel.*

#### Use Layer

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Layer
- Default: `True`

### Use Diffuse

*Inputs in the Use Diffuse panel.*

#### Use Diffuse

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Diffuse
- Default: `False`

#### Diffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Diffuse
- Default: `(0.8, 0.8, 0.8, 1)`

### Use Normal Map

*Inputs in the Use Normal Map panel.*

#### Use Normal Map

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Normal Map
- Default: `False`

#### Normals

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
- Default: `False`

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

- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
- [FPv4 SpecularMasks](/blender/nodes/utilities/fpv4-specularmasks)
