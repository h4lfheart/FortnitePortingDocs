---
title: "FPv4 ClothFuzz"
description: "The FPv4 ClothFuzz node group from Fortnite Porting."
---

# FPv4 ClothFuzz

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 ClothFuzz node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/core-fx/fpv4-clothfuzz.png then uncomment:
![FPv4 ClothFuzz](/blender/nodes/shader/core-fx/fpv4-clothfuzz.png)
-->

## Panels

- **Use Cloth Fuzz**
- **Use Scattering**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Use Cloth Fuzz

*Inputs in the Use Cloth Fuzz panel.*

#### Use Cloth Fuzz

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Cloth Fuzz
- Default: `False`

#### Cloth Channel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Cloth Fuzz
- Default: `(1, 0, 0, 1)`

#### ClothFuzz Texture

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Use Cloth Fuzz

#### Fuzz Tiling

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Cloth Fuzz
- Default: `4`

#### ClothFuzz Tint

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Cloth Fuzz
- Default: `(1, 1, 1, 1)`

#### Fuzz Exponent

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Cloth Fuzz
- Default: `4`

#### Fuzz Fresnel Blend

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Cloth Fuzz
- Default: `0`

#### Cloth Base Color Intensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Cloth Fuzz
- Default: `0.9`

#### Cloth Roughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Cloth Fuzz
- Default: `1`

### Use Scattering

*Inputs in the Use Scattering panel.*

#### Use Scattering

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Scattering
- Default: `False`

#### Cloth Scattering Min

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Scattering
- Default: `0.75`

#### Cloth Scattering Max

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Scattering
- Default: `1`

#### Cloth Shader Intensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Scattering
- Default: `1`

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
