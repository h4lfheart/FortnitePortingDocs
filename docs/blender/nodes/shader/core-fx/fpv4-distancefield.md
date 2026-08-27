---
title: "FPv4 DistanceField"
description: "The FPv4 DistanceField node group from Fortnite Porting."
---

# FPv4 DistanceField

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 DistanceField node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/core-fx/fpv4-distancefield.png then uncomment:
![FPv4 DistanceField](/blender/nodes/shader/core-fx/fpv4-distancefield.png)
-->

## Panels

- **Use Manual Frame**
- **UseAnimatedEmissive**

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

### UseAnimatedEmissive

*Inputs in the UseAnimatedEmissive panel.*

#### UseAnimatedEmissive

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseAnimatedEmissive
- Default: `False`

#### EmissiveDistanceField

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: UseAnimatedEmissive

#### SubUV_Frames

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `NONE`
- Panel: UseAnimatedEmissive
- Default: `2`

#### SubUV_Speed

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseAnimatedEmissive
- Default: `2`

## Outputs

### Material Attributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Visor Layer](/blender/nodes/utilities/fpv4-visor-layer)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
- [FPv4 Time](/blender/nodes/utilities/fpv4-time)
