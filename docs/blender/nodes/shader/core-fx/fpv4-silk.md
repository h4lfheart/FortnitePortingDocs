---
title: "FPv4 Silk"
description: "The FPv4 Silk node group from Fortnite Porting."
---

# FPv4 Silk

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Silk node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/core-fx/fpv4-silk.png then uncomment:
![FPv4 Silk](/blender/nodes/shader/core-fx/fpv4-silk.png)
-->

## Panels

- **Use Silk**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Use Silk

*Inputs in the Use Silk panel.*

#### Use Silk

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Silk
- Default: `False`

#### SilkMaskChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Silk
- Default: `(1, 0, 0, 1)`

#### Silk Fresnel

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Silk
- Default: `2`

#### SilkFresnelMax

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Silk
- Default: `1`

#### SilkFresnelMin

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Silk
- Default: `0`

#### SilkEdgeAniso

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Silk
- Default: `0.5`

#### SilkBaseColorBrightness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Silk
- Default: `1`

#### SilkEdgeTint

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Silk
- Default: `(0.0109601, 0.0109601, 0.0109601, 1)`

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
