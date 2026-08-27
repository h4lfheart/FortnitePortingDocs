---
title: "FPv4 GMap Detail Blend"
description: "The FPv4 GMap Detail Blend node group from Fortnite Porting."
---

# FPv4 GMap Detail Blend

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 GMap Detail Blend node group from Fortnite Porting.

::: info Hidden from Add menu
This node group's name starts with a `.` in Blender, so it does not appear in the Add menu.
:::

<!-- Add a node screenshot at docs/public/blender/nodes/shader/utilities/fpv4-gmap-detail-blend.png then uncomment:
![FPv4 GMap Detail Blend](/blender/nodes/shader/utilities/fpv4-gmap-detail-blend.png)
-->

## Panels

- **Base Color**
- **Masks**
- **R**
- **G**
- **B**

## Inputs

### Base Color

*Inputs in the Base Color panel.*

#### Uses ColorVariety/Scratch/Dirt Mask

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Base Color
- Default: `0`

#### Color Variety Mask: Opacity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Base Color
- Default: `1`

#### Colorized GMap

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0, 0, 0, 1)`

### Masks

*Inputs in the Masks panel.*

#### GMap

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Masks
- Default: `0`

#### Color Mask

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Masks
- Default: `(0.8, 0.8, 0.8, 1)`

### R

*Inputs in the R panel.*

#### A

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: R
- Default: `(0, 0, 0, 1)`

#### B

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: R
- Default: `(0, 0, 0, 1)`

#### C

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: R
- Default: `(0, 0, 0, 1)`

### G

*Inputs in the G panel.*

#### A

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: G
- Default: `(0, 0, 0, 1)`

#### B

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: G
- Default: `(0, 0, 0, 1)`

### B

*Inputs in the B panel.*

#### A

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: B
- Default: `(0, 0, 0, 1)`

#### B

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: B
- Default: `(0, 0, 0, 1)`

## Outputs

### Colorized GMap

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0.8, 0.8, 0.8, 1)`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 3 Color Lerp](/blender/nodes/utilities/fpv4-3-color-lerp)
