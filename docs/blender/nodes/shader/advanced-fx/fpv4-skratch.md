---
title: "FPv4 Skratch"
description: "The FPv4 Skratch node group from Fortnite Porting."
---

# FPv4 Skratch

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Skratch node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-skratch.png then uncomment:
![FPv4 Skratch](/blender/nodes/shader/advanced-fx/fpv4-skratch.png)
-->

## Panels

- **Base Color**
- **Use Camo**
- **Use Tattoo**
- **Use Banner**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Base Color

*Inputs in the Base Color panel.*

#### Zone1Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0, 0, 0, 1)`

#### Zone2Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0.0196065, 0.0196065, 0.0196065, 1)`

#### Zone3Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0.0732391, 0.0732391, 0.0732391, 1)`

#### OverlayAdding

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Base Color
- Default: `0`

### Use Camo

*Inputs in the Use Camo panel.*

#### Use Camo

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Camo
- Default: `False`

#### CamoTex

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Use Camo

#### IsCamoUV2

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Use Camo
- Default: `0`

#### CamoTiling

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Camo
- Default: `0.5`

#### CamoOffsetX

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Camo
- Default: `0`

#### CamoOffsetY

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Camo
- Default: `0`

#### CamoAdding

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Camo
- Default: `0`

### Use Tattoo

*Inputs in the Use Tattoo panel.*

#### Use Tattoo

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Tattoo
- Default: `True`

#### TattoosTex

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Use Tattoo

#### TC_UseSecondUVChannel(Tattoo)

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Use Tattoo
- Default: `1`

#### TattooOpacity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Tattoo
- Default: `0`

#### TattooColorIntensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Tattoo
- Default: `0.92`

### Use Banner

*Inputs in the Use Banner panel.*

#### Use Banner

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Banner
- Default: `True`

#### BannerTex

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Use Banner

#### BannerColor

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Banner
- Default: `(1, 1, 1, 1)`

#### Front_BannerIconSize

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Banner
- Default: `0.4`

#### Front_BannerIconMask

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Banner
- Default: `0.3`

#### Front_BannerPos

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Banner
- Default: `0`

#### Back_BannerIconSizeX

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Banner
- Default: `0.6`

#### Back_BannerIconSizeY

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Banner
- Default: `0.6`

#### Back_BannerIconMaskX

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Banner
- Default: `0.205`

#### Back_BannerIconMaskY

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Banner
- Default: `0.205`

#### Back_BannerPosShirt

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Banner
- Default: `0.055`

#### Back_BannerPosVest

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Banner
- Default: `0.055`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 RangeMask](/blender/nodes/utilities/fpv4-rangemask)
- [FPv4 Scale UVs by Center](/blender/nodes/utilities/fpv4-scale-uvs-by-center)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
