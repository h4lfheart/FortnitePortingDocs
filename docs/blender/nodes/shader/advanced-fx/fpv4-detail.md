---
title: "FPv4 Detail"
description: "The FPv4 Detail node group from Fortnite Porting."
---

# FPv4 Detail

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Detail node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-detail.png then uncomment:
![FPv4 Detail](/blender/nodes/shader/advanced-fx/fpv4-detail.png)
-->

## Panels

- **Mask**
- **Tiling**
- **Use Detail Diffuse**
- **Use Detail Normal**
- **Use Detail SRM**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Mask

*Inputs in the Mask panel.*

#### Detail Texture - Channel Mask

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Mask
- Default: `(0, 0, 0, 1)`

### Tiling

*Inputs in the Tiling panel.*

#### Detail Texture - Use UV2

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Tiling
- Default: `0`

#### Detail Texture - Tiling

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Tiling
- Default: `1`

#### Detail Texture - UV Rotation

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Tiling
- Default: `0`

### Use Detail Diffuse

*Inputs in the Use Detail Diffuse panel.*

#### Use Detail Diffuse

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Detail Diffuse
- Default: `False`

#### Detail Diffuse

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Use Detail Diffuse

#### Detail Diffuse - Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Use Detail Diffuse
- Default: `0.1`

### Use Detail Normal

*Inputs in the Use Detail Normal panel.*

#### Use Detail Normal

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Detail Normal
- Default: `False`

#### Detail Normal

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Use Detail Normal

#### Detail Normal - Flatten Normal

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Use Detail Normal
- Default: `0.1`

### Use Detail SRM

*Inputs in the Use Detail SRM panel.*

#### Use Detail SRM

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Detail SRM
- Default: `False`

#### Detail SRM

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Use Detail SRM

#### Detail Specular - Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Use Detail SRM
- Default: `0.1`

#### Detail Roughness - Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Use Detail SRM
- Default: `0.1`

#### Detail Metallic - Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Use Detail SRM
- Default: `0.1`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 CustomRotator](/blender/nodes/utilities/fpv4-customrotator)
- [FPv4 Blend Angle Corrected Normals](/blender/nodes/utilities/fpv4-blend-angle-corrected-normals)
- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 Flatten Normals](/blender/nodes/utilities/fpv4-flatten-normals)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
