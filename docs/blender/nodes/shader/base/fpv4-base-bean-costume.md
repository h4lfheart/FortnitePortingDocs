---
title: "FPv4 Base Bean Costume"
description: "The FPv4 Base Bean Costume node group from Fortnite Porting."
---

# FPv4 Base Bean Costume

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Base Bean Costume node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/base/fpv4-base-bean-costume.png then uncomment:
![FPv4 Base Bean Costume](/blender/nodes/shader/base/fpv4-base-bean-costume.png)
-->

## Panels

- **Textures**
- **Main Material**
- **Secondary Material**
- **Accent Material**

## Inputs

### Textures

*Inputs in the Textures panel.*

#### Metalness/Roughness/Specular

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Textures
- Default: `(0, 0, 0, 1)`

#### Albedo

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Textures
- Default: `0`

#### NormalMap

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Textures
- Default: `(0, 0, 0, 1)`

#### MaterialMasking

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Textures

#### Costume_UVPatternPosition

<!-- TODO: describe this socket -->

- Type: `Bundle`
- Panel: Textures

### Main Material

*Inputs in the Main Material panel.*

#### Costume_MainColor

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Main Material
- Default: `(0.0998981, 0.0998988, 0.0998988, 1)`

#### Costume_MainMaterialProps

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Main Material
- Default: `(0, 0.5, 0, 0)`

### Secondary Material

*Inputs in the Secondary Material panel.*

#### Costume_Secondary_Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Secondary Material
- Default: `(0.0998981, 0.0998988, 0.0998988, 1)`

#### Costume_SecondaryMaterialProps

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Secondary Material
- Default: `(0, 0.5, 0, 0)`

### Accent Material

*Inputs in the Accent Material panel.*

#### Costume_AccentColor

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Accent Material
- Default: `(0.0998981, 0.0998988, 0.0998988, 1)`

#### Costume_AccentMaterialProps

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Accent Material
- Default: `(0, 0.5, 0, 0)`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Vector Clamp](/blender/nodes/utilities/fpv4-vector-clamp)
- [FPv4 Bean Mask Position](/blender/nodes/utilities/fpv4-bean-mask-position)
- [FPv4 Hueshift](/blender/nodes/utilities/fpv4-hueshift)
- [FPv4 Material Attributes](/blender/nodes/utilities/fpv4-material-attributes)
