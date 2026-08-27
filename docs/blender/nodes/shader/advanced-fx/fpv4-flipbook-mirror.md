---
title: "FPv4 Flipbook Mirror"
description: "The FPv4 Flipbook Mirror node group from Fortnite Porting."
---

# FPv4 Flipbook Mirror

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Flipbook Mirror node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-flipbook-mirror.png then uncomment:
![FPv4 Flipbook Mirror](/blender/nodes/shader/advanced-fx/fpv4-flipbook-mirror.png)
-->

## Panels

- **MirrorLeftUV**
- **Use Flipbook**
- **UseNonUniformScale**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Left Frame

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `NONE`
- Default: `0`

### MirrorLeftUV

*Inputs in the MirrorLeftUV panel.*

#### MirrorLeftUV

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: MirrorLeftUV
- Default: `False`

#### Right Frame

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `NONE`
- Panel: MirrorLeftUV
- Default: `0`

### Use Flipbook

*Inputs in the Use Flipbook panel.*

#### Use Flipbook

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Flipbook
- Default: `False`

#### Flipbook

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Use Flipbook

#### FlipbookTint

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Flipbook
- Default: `(1, 1, 1, 1)`

#### Use Second UV

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Use Flipbook
- Default: `0`

#### Flipbook X

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Flipbook
- Default: `0`

#### Flipbook Y

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Flipbook
- Default: `0`

#### Flipbook Scale

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Flipbook
- Default: `1`

#### SubImages

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Flipbook
- Default: `3`

#### Affects Base Color

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Use Flipbook
- Default: `1`

#### Multiply Flipbook Emission

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Use Flipbook
- Default: `0`

### UseNonUniformScale

*Inputs in the UseNonUniformScale panel.*

#### UseNonUniformScale

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseNonUniformScale
- Default: `False`

#### Scale X

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseNonUniformScale
- Default: `1`

#### Scale Y

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseNonUniformScale
- Default: `1`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Preskinned](/blender/nodes/utilities/fpv4-preskinned)
- [FPv4 Scale UVs by Center](/blender/nodes/utilities/fpv4-scale-uvs-by-center)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
- [FPv4 SubUV](/blender/nodes/utilities/fpv4-subuv)
