---
title: "FPv4 PBW Build Effect"
description: "The FPv4 PBW Build Effect node group from Fortnite Porting."
---

# FPv4 PBW Build Effect

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 PBW Build Effect node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-pbw-build-effect.png then uncomment:
![FPv4 PBW Build Effect](/blender/nodes/shader/advanced-fx/fpv4-pbw-build-effect.png)
-->

## Panels

- **Use Build Effect**
- **Masks**
- **Use 2 Materials**
- **Use 3 Materials**

## Inputs

### MaterialAttributes

Value of the first color input

- Type: `Bundle`

### Build Stage

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `NONE`
- Default: `20`

### Use Build Effect

*Inputs in the Use Build Effect panel.*

#### Use Build Effect

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Build Effect
- Default: `False`

#### BlueprintColor1

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Build Effect
- Default: `(0, 0.100336, 0.694971, 1)`

#### BlueprintColor2

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Build Effect
- Default: `(1, 1, 1, 1)`

#### Emissive Brightness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Build Effect
- Default: `1`

#### Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Use Build Effect
- Default: `0.5`

### Masks

*Inputs in the Masks panel.*

#### Blueprint_Outline_Texture_Channel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Masks
- Default: `(1, 0, 0, 1)`

### Use 2 Materials

*Inputs in the Use 2 Materials panel.*

#### Use 2 Materials

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use 2 Materials
- Default: `False`

#### Blueprint_Outline_Texture_Channel2

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use 2 Materials
- Default: `(1, 0, 0, 1)`

### Use 3 Materials

*Inputs in the Use 3 Materials panel.*

#### Use 3 Materials

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use 3 Materials
- Default: `False`

#### Blueprint_Outline_Texture_Channel3

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use 3 Materials
- Default: `(1, 0, 0, 1)`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
