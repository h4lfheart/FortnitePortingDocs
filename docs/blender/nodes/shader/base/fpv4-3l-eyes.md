---
title: "FPv4 3L Eyes"
description: "The FPv4 3L Eyes node group from Fortnite Porting."
---

# FPv4 3L Eyes

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 3L Eyes node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/base/fpv4-3l-eyes.png then uncomment:
![FPv4 3L Eyes](/blender/nodes/shader/base/fpv4-3l-eyes.png)
-->

## Panels

- **Textures**
- **Mapping**
- **Highlight**
- **Options**
- **UseEyeColorTinting**

## Inputs

### Textures

*Inputs in the Textures panel.*

#### Diffuse

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Textures

#### Normal

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Textures

#### SpecularMasks

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Textures

#### SwizzleRoughnessToGreen

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Textures
- Default: `0`

#### Eye Roughness Min

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Textures
- Default: `0.1`

#### Eye Metallic Mult

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Textures
- Default: `0.1`

#### Emissive

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Textures

#### Emissive Mult

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Textures
- Default: `1`

### Mapping

*Inputs in the Mapping panel.*

#### Eye Texture AspectRatio

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Mapping
- Default: `2`

#### Eye Cornea Radius (UV)

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Mapping
- Default: `0.078`

#### Eye Right UV Position

<!-- TODO: describe this socket -->

- Type: `Bundle`
- Panel: Mapping

#### Eye Left UV Position

<!-- TODO: describe this socket -->

- Type: `Bundle`
- Panel: Mapping

### Highlight

*Inputs in the Highlight panel.*

#### Eye UV Highlight Size

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Highlight
- Default: `0.005`

#### Eye Camera Light Vector

<!-- TODO: describe this socket -->

- Type: `Bundle`
- Panel: Highlight

#### Eye Use Sun Highlight

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Highlight
- Default: `0`

#### Eye Use UV Highlight

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Highlight
- Default: `1`

#### Eye UV Highlight Pos

<!-- TODO: describe this socket -->

- Type: `Bundle`
- Panel: Highlight

### Options

*Inputs in the Options panel.*

#### Eye Iris Normal Flatten

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Options
- Default: `0.25`

#### Eye Iris UV Radius

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Options
- Default: `0.4`

#### Eye Refraction Mix

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Options
- Default: `1`

#### Eye Cornea Mask Hardness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Options
- Default: `0.2`

#### Eye Cornea IOR

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Options
- Default: `1.336`

#### Eye Iris Depth Scale

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Options
- Default: `0.5`

#### Eye Refraction Mult

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Options
- Default: `0.02`

### UseEyeColorTinting

*Inputs in the UseEyeColorTinting panel.*

#### UseEyeColorTinting

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseEyeColorTinting
- Default: `False`

#### EyeTintColor

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: UseEyeColorTinting
- Default: `(0.53, 1, 0.47, 1)`

#### EyeTintMask_Radius

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseEyeColorTinting
- Default: `0.4`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 G Flip](/blender/nodes/utilities/fpv4-g-flip)
- [FPv4 Blend Angle Corrected Normals](/blender/nodes/utilities/fpv4-blend-angle-corrected-normals)
- [FPv4 Flatten Normals](/blender/nodes/utilities/fpv4-flatten-normals)
- [FPv4 Material Attributes](/blender/nodes/utilities/fpv4-material-attributes)
- [FPv4 Separate Vector4](/blender/nodes/utilities/fpv4-separate-vector4)
- [FPv4 SpecularMasks](/blender/nodes/utilities/fpv4-specularmasks)
- [FPv4 SphereMask](/blender/nodes/utilities/fpv4-spheremask)
