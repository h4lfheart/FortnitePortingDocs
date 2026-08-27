---
title: "FPv4 ClearCoat"
description: "The FPv4 ClearCoat node group from Fortnite Porting."
---

# FPv4 ClearCoat

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 ClearCoat node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/core-fx/fpv4-clearcoat.png then uncomment:
![FPv4 ClearCoat](/blender/nodes/shader/core-fx/fpv4-clearcoat.png)
-->

## Panels

- **Use Clear Coat**

## Inputs

### MaterialAttributes

Value of the first color input

- Type: `Bundle`

### Use Clear Coat

*Inputs in the Use Clear Coat panel.*

#### Use Clear Coat

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Clear Coat
- Default: `False`

#### ClearCoatMaskChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Clear Coat
- Default: `(1, 0, 0, 1)`

#### Use Roughness Map

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Use Clear Coat
- Default: `0`

#### UnderCoatRoughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Clear Coat
- Default: `0.1`

#### UnderCoatMetallicMultiplier

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Clear Coat
- Default: `1`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
