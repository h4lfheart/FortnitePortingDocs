---
title: "FPv4 CustomColor"
description: "The FPv4 CustomColor node group from Fortnite Porting."
---

# FPv4 CustomColor

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 CustomColor node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-customcolor.png then uncomment:
![FPv4 CustomColor](/blender/nodes/shader/advanced-fx/fpv4-customcolor.png)
-->

## Panels

- **Base Color**
- **Advanced Blend**
- **Masks**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Base Color

*Inputs in the Base Color panel.*

#### Base Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(1, 1, 1, 1)`

#### Primary Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(1, 1, 1, 1)`

#### Secondary Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(1, 1, 1, 1)`

#### Tertiary Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(1, 1, 1, 1)`

#### Pattern Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(1, 1, 1, 1)`

### Advanced Blend

*Inputs in the Advanced Blend panel.*

#### UseAdvancedColorBlend

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Advanced Blend
- Default: `0`

#### BaseColorValueChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Advanced Blend
- Default: `(0, 1, 0, 1)`

#### BaseColorValueBias

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Advanced Blend
- Default: `0`

#### BaseColorValuePow

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Advanced Blend
- Default: `1`

#### BaseColorAdvancedBlendChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Advanced Blend
- Default: `(1, 0, 0, 1)`

#### Base Blend Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Advanced Blend
- Default: `(1, 1, 1, 1)`

#### Primary Blend Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Advanced Blend
- Default: `(1, 1, 1, 1)`

#### Secondary Blend Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Advanced Blend
- Default: `(1, 1, 1, 1)`

#### Tertiary Blend Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Advanced Blend
- Default: `(1, 1, 1, 1)`

### Masks

*Inputs in the Masks panel.*

#### Tech Art Mask Channel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Masks
- Default: `(1, 0, 0, 1)`

#### Custom Color Mask

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Masks
- Default: `(0, 0, 0, 1)`

#### PrimaryMaskChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Masks
- Default: `(1, 0, 0, 1)`

#### SecondaryMaskChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Masks
- Default: `(0, 1, 0, 1)`

#### TertiaryMaskChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Masks
- Default: `(0, 0, 1, 1)`

#### Pattern Mask

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Masks
- Default: `(0, 0, 0, 1)`

#### Pattern Mask Channel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Masks
- Default: `(0, 0, 0, 1)`

#### Pattern Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Masks
- Default: `0`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
