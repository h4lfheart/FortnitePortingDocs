---
title: "FPv4 Gradient"
description: "The FPv4 Gradient node group from Fortnite Porting."
---

# FPv4 Gradient

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Gradient node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-gradient.png then uncomment:
![FPv4 Gradient](/blender/nodes/shader/advanced-fx/fpv4-gradient.png)
-->

## Panels

- **Use Gmap Gradient Layers**
- **Masks**
- **Colors**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Use Gmap Gradient Layers

*Inputs in the Use Gmap Gradient Layers panel.*

#### Use Gmap Gradient Layers

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Gmap Gradient Layers
- Default: `False`

#### GmapSkinCustomization_Channel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Gmap Gradient Layers
- Default: `(1, 0, 0, 1)`

### Masks

*Inputs in the Masks panel.*

#### Layer Mask

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Masks
- Default: `(1, 1, 1, 1)`

#### Layer Mask Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Masks
- Default: `0`

#### Use Layer Mask Alpha

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Masks
- Default: `0`

### Colors

*Inputs in the Colors panel.*

#### Layer1_Gradient

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Colors

#### Layer2_Gradient

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Colors

#### Layer3_Gradient

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Colors

#### Layer4_Gradient

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Colors

#### Layer5_Gradient

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Colors

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
