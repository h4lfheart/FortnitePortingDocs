---
title: "FPv4 Base Foliage"
description: "The FPv4 Base Foliage node group from Fortnite Porting."
---

# FPv4 Base Foliage

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Base Foliage node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/base/fpv4-base-foliage.png then uncomment:
![FPv4 Base Foliage](/blender/nodes/shader/base/fpv4-base-foliage.png)
-->

## Panels

- **Color**
- **UseColorBlend**
- **IsFlowers**
- **Material**
- **UseSpecularMasks**
- **Adjustments**

## Inputs

### Color

*Inputs in the Color panel.*

#### Diffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Color
- Default: `(0.020289, 0.215861, 0.006512, 1)`

#### MasksTexture

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Color
- Default: `(0.8, 0.8, 0.8, 1)`

### UseColorBlend

*Inputs in the UseColorBlend panel.*

#### UseColorBlend

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseColorBlend
- Default: `False`

#### Color1_Base

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: UseColorBlend
- Default: `(0.0759846, 0.0920252, 0.00488767, 1)`

#### Color2_Lit

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: UseColorBlend
- Default: `(0.105806, 0.150349, 0.00384122, 1)`

#### Color3_Shadows

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: UseColorBlend
- Default: `(0.0130011, 0.0319315, 0.00202471, 1)`

### IsFlowers

*Inputs in the IsFlowers panel.*

#### IsFlowers

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: IsFlowers
- Default: `False`

#### FlowerColorMult

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: IsFlowers
- Default: `(1, 1, 1, 1)`

### Material

*Inputs in the Material panel.*

#### Normals

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Material
- Default: `(0.5, 0.5, 1, 1)`

#### Normal Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Material
- Default: `1`

#### Specular

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Material
- Default: `0.25`

#### Metallic

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Material
- Default: `0`

#### Roughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Material
- Default: `0.5`

### UseSpecularMasks

*Inputs in the UseSpecularMasks panel.*

#### UseSpecularMasks

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseSpecularMasks
- Default: `False`

#### SpecularMasks

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: UseSpecularMasks
- Default: `(0.5, 0, 0.5, 1)`

### Adjustments

*Inputs in the Adjustments panel.*

#### Hue

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Adjustments
- Default: `0.5`

#### Saturation

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Adjustments
- Default: `1`

#### Value

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Adjustments
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
