---
title: "FPv4 Galaxy"
description: "The FPv4 Galaxy node group from Fortnite Porting."
---

# FPv4 Galaxy

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Galaxy node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-galaxy.png then uncomment:
![FPv4 Galaxy](/blender/nodes/shader/advanced-fx/fpv4-galaxy.png)
-->

## Panels

- **Use Galaxy**
- **Global**
- **Galaxy Background**
- **Stars**
- **Alternative Fresnel**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Use Galaxy

*Inputs in the Use Galaxy panel.*

#### Use Galaxy

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Galaxy
- Default: `False`

#### Galaxy Channel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Galaxy
- Default: `(1, 0, 0, 1)`

### Global

*Inputs in the Global panel.*

#### Galaxy_GlobalBrightness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Global
- Default: `1`

#### Star Brightness

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Global
- Default: `(300, 300, 300, 1)`

#### Star Brightness 1

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Global
- Default: `(9.5, 9.5, 9.5, 1)`

#### Star Saturation

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Global
- Default: `0.5`

#### Galaxy Roughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Global
- Default: `1`

#### Galaxy Specular

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Global
- Default: `0`

### Galaxy Background

*Inputs in the Galaxy Background panel.*

#### GalaxyTexture

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Galaxy Background

#### Galaxy Warp Mask Channel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Galaxy Background
- Default: `(1, 0, 0, 1)`

#### WarpIntensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Galaxy Background
- Default: `0.012`

#### Galaxy Tiling

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Galaxy Background
- Default: `0.3`

#### GalaxyAxisFade

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Galaxy Background
- Default: `6`

#### Galaxy Rotation Speed

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Galaxy Background
- Default: `0.002`

#### Galaxy Rotation Speed 1

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Galaxy Background
- Default: `-0.002`

#### Galaxy Rotation Speed 2

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Galaxy Background
- Default: `0.01`

### Stars

*Inputs in the Stars panel.*

#### Stars

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Stars

#### Small Star Tiling

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Stars
- Default: `5`

#### Small Star Rotation Speed

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Stars
- Default: `-0.025`

#### Bright Star Tiling

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Stars
- Default: `2`

### Alternative Fresnel

*Inputs in the Alternative Fresnel panel.*

#### GalaxyEF

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Alternative Fresnel
- Default: `(0, 0, 0, 1)`

#### Galaxy_FresEx

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Alternative Fresnel
- Default: `10`

#### GalaxyFlameFresnel Intensite

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Alternative Fresnel
- Default: `1`

#### AccentRimBrightness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Alternative Fresnel
- Default: `8`

#### EdgeFresnel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Alternative Fresnel
- Default: `(1, 1, 1, 1)`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 TriplanarCameraVector_Rotated](/blender/nodes/utilities/fpv4-triplanarcameravector-rotated)
- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 Fresnel](/blender/nodes/utilities/fpv4-fresnel)
- [FPv4 Normals](/blender/nodes/utilities/fpv4-normals)
- [FPv4 Panner](/blender/nodes/utilities/fpv4-panner)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
- [FPv4 Time](/blender/nodes/utilities/fpv4-time)
