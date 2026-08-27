---
title: "FPv4 Sequin"
description: "The FPv4 Sequin node group from Fortnite Porting."
---

# FPv4 Sequin

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Sequin node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-sequin.png then uncomment:
![FPv4 Sequin](/blender/nodes/shader/advanced-fx/fpv4-sequin.png)
-->

## Panels

- **Use Sequins**
- **Sequin Textures**
- **UseThinFilmOnSequins**
- **Color**
- **Material**
- **Sparkle**
- **Normals**
- **UseStripes**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Use Sequins

*Inputs in the Use Sequins panel.*

#### Use Sequins

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Sequins
- Default: `False`

#### SequinMaskChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Sequins
- Default: `(1, 0, 0, 1)`

### Sequin Textures

*Inputs in the Sequin Textures panel.*

#### SequinOffset

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Sequin Textures

#### SequinRoughness

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Sequin Textures

#### SequinNormal

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Sequin Textures

#### SequinTile

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Sequin Textures
- Default: `32`

#### SequinRotationAngle

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Sequin Textures
- Default: `0`

### UseThinFilmOnSequins

*Inputs in the UseThinFilmOnSequins panel.*

#### UseThinFilmOnSequins

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseThinFilmOnSequins
- Default: `False`

#### SequinThinFilmColor

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: UseThinFilmOnSequins

#### SequinThinFilmUVExponent

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseThinFilmOnSequins
- Default: `1`

#### SequinThinFilmUVScale

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseThinFilmOnSequins
- Default: `1`

#### SequinThinFilmUVOffset

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseThinFilmOnSequins
- Default: `1`

#### SequinThinFilmStrength_Basecolor

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseThinFilmOnSequins
- Default: `0`

#### SequinThinFilmStrength_Emissive

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseThinFilmOnSequins
- Default: `0`

### Color

*Inputs in the Color panel.*

#### SequinFresnel

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Color
- Default: `1`

#### SequinColorOffsetMin

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Color
- Default: `0.5`

#### SequinColorOffsetMax

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Color
- Default: `1.5`

#### MFSequin_UseBaseColor

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Color
- Default: `1`

#### SequinFalloffColor01

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Color
- Default: `(0.887917, 0.630758, 1, 1)`

#### SequinFalloffColor02

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Color
- Default: `(0.665383, 0.577581, 1, 1)`

#### SequinBrightness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Color
- Default: `1.5`

#### SequinEmissiveIntensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Color
- Default: `1`

### Material

*Inputs in the Material panel.*

#### Sequin_MinRoughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Material
- Default: `0`

#### Sequin_MaxRoughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Material
- Default: `1`

#### SequinBaseRoughnessBlendAmount

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Material
- Default: `1`

#### UseBaseRoughness

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Material
- Default: `0`

#### SequinMetalness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Material
- Default: `0.9`

### Sparkle

*Inputs in the Sparkle panel.*

#### SequinSparkleSpeed

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Sparkle
- Default: `0.01`

#### SequinDiamondTile

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Sparkle
- Default: `2`

#### SparkleColor

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Sparkle
- Default: `(0.571121, 0.226966, 1, 1)`

#### SparkleBrightness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Sparkle
- Default: `10`

### Normals

*Inputs in the Normals panel.*

#### UseBaseNormal

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Normals
- Default: `0`

#### SequinNormalIntensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Normals
- Default: `1`

### UseStripes

*Inputs in the UseStripes panel.*

#### UseStripes

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseStripes
- Default: `False`

#### StripeMask

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: UseStripes

#### StripedColorBlend

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseStripes
- Default: `0.7`

#### StripedNormalBlend

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseStripes
- Default: `0.9`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 CustomRotator](/blender/nodes/utilities/fpv4-customrotator)
- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 Flatten Normals](/blender/nodes/utilities/fpv4-flatten-normals)
- [FPv4 Fresnel](/blender/nodes/utilities/fpv4-fresnel)
- [FPv4 Normals](/blender/nodes/utilities/fpv4-normals)
- [FPv4 Panner](/blender/nodes/utilities/fpv4-panner)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
- [FPv4 Time](/blender/nodes/utilities/fpv4-time)
