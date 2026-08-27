---
title: "FPv4 GMap Layer Blend"
description: "The FPv4 GMap Layer Blend node group from Fortnite Porting."
---

# FPv4 GMap Layer Blend

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 GMap Layer Blend node group from Fortnite Porting.

::: info Hidden from Add menu
This node group's name starts with a `.` in Blender, so it does not appear in the Add menu.
:::

<!-- Add a node screenshot at docs/public/blender/nodes/shader/utilities/fpv4-gmap-layer-blend.png then uncomment:
![FPv4 GMap Layer Blend](/blender/nodes/shader/utilities/fpv4-gmap-layer-blend.png)
-->

## Panels

- **Base Color**
- **Color Mask 1**
- **Color Mask 2**
- **Color Mask 3**

## Inputs

### Base Color

*Inputs in the Base Color panel.*

#### Colorized Base GMap

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0, 0, 0, 1)`

#### Use Diffuse as Base Color

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `NONE`
- Panel: Base Color
- Default: `0`

#### Diffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0, 0, 0, 1)`

### Color Mask 1

*Inputs in the Color Mask 1 panel.*

#### Color Mask 1

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Color Mask 1
- Default: `0`

#### Colorized GMap 1

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Color Mask 1
- Default: `(0.5, 0.5, 0.5, 1)`

### Color Mask 2

*Inputs in the Color Mask 2 panel.*

#### Use 2+ Color Masks

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `NONE`
- Panel: Color Mask 2
- Default: `1`

#### Color Mask 2

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Color Mask 2
- Default: `0`

#### Colorized GMap 2

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Color Mask 2
- Default: `(0.5, 0.5, 0.5, 1)`

### Color Mask 3

*Inputs in the Color Mask 3 panel.*

#### Use 3 Color Masks

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `NONE`
- Panel: Color Mask 3
- Default: `0`

#### Color Mask 3

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Color Mask 3
- Default: `0`

#### Colorized GMap 3

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Color Mask 3
- Default: `(0.5, 0.5, 0.5, 1)`

## Outputs

### Colorized GMap

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0.8, 0.8, 0.8, 1)`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->
