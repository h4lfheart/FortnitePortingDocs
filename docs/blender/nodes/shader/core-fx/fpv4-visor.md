---
title: "FPv4 Visor"
description: "The FPv4 Visor node group from Fortnite Porting."
---

# FPv4 Visor

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Visor node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/core-fx/fpv4-visor.png then uncomment:
![FPv4 Visor](/blender/nodes/shader/core-fx/fpv4-visor.png)
-->

## Panels

- **Use Manual Frame**
- **UseAnimatedVisor**

## Inputs

### Material Attributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Use Manual Frame

*Inputs in the Use Manual Frame panel.*

#### Use Manual Frame

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Manual Frame
- Default: `False`

#### Frame

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Manual Frame
- Default: `0`

### UseAnimatedVisor

*Inputs in the UseAnimatedVisor panel.*

#### UseAnimatedVisor

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseAnimatedVisor
- Default: `False`

#### Visor_Emissive

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: UseAnimatedVisor

#### Visor_EmissiveDistanceField

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: UseAnimatedVisor

#### Emissive Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: UseAnimatedVisor
- Default: `(1, 1, 1, 1)`

#### Visor_SubUV_Frames

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `NONE`
- Panel: UseAnimatedVisor
- Default: `2`

#### Visor_SubUV_Speed

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseAnimatedVisor
- Default: `2`

#### Visor_LineThick

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseAnimatedVisor
- Default: `-0.48`

#### VisorHeight

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseAnimatedVisor
- Default: `0`

#### VisorLayerHeightRatio

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseAnimatedVisor
- Default: `0.015`

#### Visor_Layer1_Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseAnimatedVisor
- Default: `5`

#### Visor_Layer2_Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseAnimatedVisor
- Default: `2`

## Outputs

### Material Attributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Visor Layer](/blender/nodes/utilities/fpv4-visor-layer)
- [FPv4 BumpOffset](/blender/nodes/utilities/fpv4-bumpoffset)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
- [FPv4 Time](/blender/nodes/utilities/fpv4-time)
