---
title: "FPv4 Superhero"
description: "The FPv4 Superhero node group from Fortnite Porting."
---

# FPv4 Superhero

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Superhero node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-superhero.png then uncomment:
![FPv4 Superhero](/blender/nodes/shader/advanced-fx/fpv4-superhero.png)
-->

## Panels

- **Base Color**
- **Normals**
- **Use Primary Normal**
- **Use Secondary Normal**
- **Material**
- **Use Sticker**
- **ClothFuzz**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Base Color

*Inputs in the Base Color panel.*

#### Pattern

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0, 0, 0, 1)`

#### PrimaryColor

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0.05, 0.05, 0.9, 1)`

#### SecondaryColor

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0.9, 0.05, 0.05, 1)`

#### AccessoryColor

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0.1, 0.1, 0.1, 1)`

#### UseAccessoryMaterial

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Base Color
- Default: `1`

### Use Primary Normal

*Inputs in the Use Primary Normal panel.*

#### Use Primary Normal

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Primary Normal
- Default: `False`

#### PrimaryNormal

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Primary Normal
- Default: `(0.5, 0.5, 1, 1)`

### Use Secondary Normal

*Inputs in the Use Secondary Normal panel.*

#### Use Secondary Normal

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Secondary Normal
- Default: `False`

#### SecondaryNormal

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Secondary Normal
- Default: `(0.5, 0.5, 1, 1)`

### Material

*Inputs in the Material panel.*

#### PrimaryMaterial

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Material
- Default: `(0, 0.5, 1, 1)`

#### SecondaryMaterial

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Material
- Default: `(0, 0.5, 1, 1)`

#### AccessoryMaterial

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Material
- Default: `(0.5, 0.3, 0.5, 1)`

#### Sticker MSRE

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Material
- Default: `(0, 0.2, 0.2, 1)`

#### PrimaryCloth

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Material
- Default: `0`

#### SecondaryCloth

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Material
- Default: `0`

### Use Sticker

*Inputs in the Use Sticker panel.*

#### Use Sticker

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Sticker
- Default: `False`

#### Sticker

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Use Sticker

#### StickerPosition

<!-- TODO: describe this socket -->

- Type: `Bundle`
- Panel: Use Sticker

#### StickerScale

<!-- TODO: describe this socket -->

- Type: `Bundle`
- Panel: Use Sticker

#### BackStickerPosition

<!-- TODO: describe this socket -->

- Type: `Bundle`
- Panel: Use Sticker

#### BackStickerScale

<!-- TODO: describe this socket -->

- Type: `Bundle`
- Panel: Use Sticker

#### ElasticStickerMult

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Sticker
- Default: `1`

### ClothFuzz

*Inputs in the ClothFuzz panel.*

#### ClothFuzz Texture

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: ClothFuzz

#### Fuzz Tiling

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: ClothFuzz
- Default: `4`

#### Cloth Fuzz Tint

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: ClothFuzz
- Default: `(1, 1, 1, 1)`

#### Fuzz Exponent

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: ClothFuzz
- Default: `4`

#### Fuzz Fresnel Blend

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: ClothFuzz
- Default: `0`

#### Cloth Base Color Intensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: ClothFuzz
- Default: `0.9`

#### Cloth Roughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: ClothFuzz
- Default: `1`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Superhero Combine Specular](/blender/nodes/utilities/fpv4-superhero-combine-specular)
- [FPv4 ClothFuzz](/blender/nodes/utilities/fpv4-clothfuzz)
- [FPv4 Scale UVs by Center](/blender/nodes/utilities/fpv4-scale-uvs-by-center)
- [FPv4 Separate Vector4](/blender/nodes/utilities/fpv4-separate-vector4)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
