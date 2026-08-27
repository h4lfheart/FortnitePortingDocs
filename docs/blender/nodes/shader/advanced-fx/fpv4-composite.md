---
title: "FPv4 Composite"
description: "The FPv4 Composite node group from Fortnite Porting."
---

# FPv4 Composite

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Composite node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-composite.png then uncomment:
![FPv4 Composite](/blender/nodes/shader/advanced-fx/fpv4-composite.png)
-->

## Panels

- **Mask**
- **UseUV2Diffuse**
- **UseUV2Normals**
- **UseUV2SRM**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### UseUV2Composite

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Default: `0`

### Mask

*Inputs in the Mask panel.*

#### UV2Composite_AlphaTextureUseUV1

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Mask
- Default: `0`

#### UV2Composite_AlphaTexture

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Mask

#### UV2Composite_AlphaChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Mask
- Default: `(0, 0, 0, 1)`

#### UseTechArtMaskAsAlpha

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Mask
- Default: `0`

#### UseDiffuseAlphaChannel

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Mask
- Default: `0`

#### UV2Composite_AlphaStrength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Mask
- Default: `1`

### UseUV2Diffuse

*Inputs in the UseUV2Diffuse panel.*

#### UseUV2Diffuse

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseUV2Diffuse
- Default: `False`

#### UV2Composite_Diffuse

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: UseUV2Diffuse

### UseUV2Normals

*Inputs in the UseUV2Normals panel.*

#### UseUV2Normals

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseUV2Normals
- Default: `False`

#### UV2Composite_Normals

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: UseUV2Normals

### UseUV2SRM

*Inputs in the UseUV2SRM panel.*

#### UseUV2SRM

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseUV2SRM
- Default: `False`

#### UV2Composite_SRM

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: UseUV2SRM

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
