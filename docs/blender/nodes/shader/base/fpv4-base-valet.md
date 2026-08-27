---
title: "FPv4 Base Valet"
description: "The FPv4 Base Valet node group from Fortnite Porting."
---

# FPv4 Base Valet

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Base Valet node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/base/fpv4-base-valet.png then uncomment:
![FPv4 Base Valet](/blender/nodes/shader/base/fpv4-base-valet.png)
-->

## Panels

- **Emissive**
- **AddDiffuseToEmissive**

## Inputs

### Mask

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0, 0, 0, 1)`

### Mask Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Default: `0`

### Diffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(1, 1, 1, 1)`

### Gmap/Emissive/Lights

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0, 0, 0, 1)`

### Gmap/Emissive/Lights Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Default: `0`

### Specular Mask

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0.5, 0, 0.5, 1)`

### Normal

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0.5, 0.5, 1, 1)`

### Normal Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Default: `1`

### Clearcoat Base Weight

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Default: `0`

### Clearcoat Base Roughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Default: `0.4`

### Emissive

*Inputs in the Emissive panel.*

#### Emissive Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Emissive
- Default: `(0, 0, 0, 1)`

#### Emissive Texture Power

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Emissive
- Default: `1`

#### Override Emissive Mask Full

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Emissive
- Default: `0`

### AddDiffuseToEmissive

*Inputs in the AddDiffuseToEmissive panel.*

#### AddDiffuseToEmissive

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: AddDiffuseToEmissive
- Default: `False`

#### DiffuseToEmissiveColorScale

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: AddDiffuseToEmissive
- Default: `(1, 1, 1, 0)`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Material Attributes](/blender/nodes/utilities/fpv4-material-attributes)
