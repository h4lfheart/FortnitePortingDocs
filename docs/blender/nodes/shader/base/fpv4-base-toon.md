---
title: "FPv4 Base Toon"
description: "The FPv4 Base Toon node group from Fortnite Porting."
---

# FPv4 Base Toon

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Base Toon node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/base/fpv4-base-toon.png then uncomment:
![FPv4 Base Toon](/blender/nodes/shader/base/fpv4-base-toon.png)
-->

## Panels

- **Toon**
- **PBR**
- **Global**

## Inputs

### Toon

*Inputs in the Toon panel.*

#### LitDiffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Toon
- Default: `(1, 1, 1, 1)`

#### ShadedDiffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Toon
- Default: `(0.0152085, 0.0152085, 0.0152085, 1)`

#### ShadedColorDarkening

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Toon
- Default: `1`

#### DistanceField_InkLines

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Toon
- Default: `(0, 0, 0, 1)`

#### InkLineColor_Texture

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Toon
- Default: `(0, 0, 0, 1)`

#### RimColor

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Toon
- Default: `(1, 1, 1, 1)`

#### RimStrength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Toon
- Default: `0`

#### Brightness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Toon
- Default: `1`

### PBR

*Inputs in the PBR panel.*

#### Use PBR Shading

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: PBR
- Default: `0`

#### Specular

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: PBR
- Default: `0`

#### Roughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: PBR
- Default: `0`

### Global

*Inputs in the Global panel.*

#### Normals

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Global
- Default: `(0.5, 0.5, 1, 1)`

#### Normals Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Global
- Default: `1`

#### FakeNormalBlend_Amt

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Global
- Default: `0`

#### SSC_Texture

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Global
- Default: `(1, 0, 0, 1)`

#### SpecularTint

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Global
- Default: `(1, 1, 1, 1)`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Material Attributes](/blender/nodes/utilities/fpv4-material-attributes)
