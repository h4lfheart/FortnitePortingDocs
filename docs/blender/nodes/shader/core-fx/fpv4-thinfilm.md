---
title: "FPv4 ThinFilm"
description: "The FPv4 ThinFilm node group from Fortnite Porting."
---

# FPv4 ThinFilm

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 ThinFilm node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/core-fx/fpv4-thinfilm.png then uncomment:
![FPv4 ThinFilm](/blender/nodes/shader/core-fx/fpv4-thinfilm.png)
-->

## Panels

- **Use Thin Film**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Use Thin Film

*Inputs in the Use Thin Film panel.*

#### Use Thin Film

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Thin Film
- Default: `False`

#### ThinFilmMaskChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Thin Film
- Default: `(1, 0, 0, 1)`

#### ThinFilm_Texture

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Use Thin Film

#### ThinFilm_Warp

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Thin Film
- Default: `0.5`

#### ThinFilm_Scale

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Thin Film
- Default: `1`

#### ThinFilm_Offset

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Thin Film
- Default: `0`

#### ThinFilm_Intensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Thin Film
- Default: `0.5`

#### ThinFilm_Exponent

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Thin Film
- Default: `2`

#### RoughnessInfluence

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Thin Film
- Default: `0`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 Fresnel](/blender/nodes/utilities/fpv4-fresnel)
- [FPv4 Normals](/blender/nodes/utilities/fpv4-normals)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
