---
title: "FPv4 Valet ScratchGrime"
description: "The FPv4 Valet ScratchGrime node group from Fortnite Porting."
---

# FPv4 Valet ScratchGrime

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Valet ScratchGrime node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-valet-scratchgrime.png then uncomment:
![FPv4 Valet ScratchGrime](/blender/nodes/shader/advanced-fx/fpv4-valet-scratchgrime.png)
-->

## Panels

- **Grime**
- **Scratch**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Scratch/Grime/EMPTY

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0, 0, 0, 1)`

### Grime

*Inputs in the Grime panel.*

#### Grime

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Grime
- Default: `True`

#### Grime Tint

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Grime
- Default: `(1, 1, 1, 1)`

#### Grime Spread

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Grime
- Default: `1`

#### Grime Intensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Grime
- Default: `0.5`

#### Grime Tint Override

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Grime
- Default: `0`

#### Grime Metallic Multiplier

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Grime
- Default: `1`

#### Grime Roughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Grime
- Default: `1`

#### Grime Spec

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Grime
- Default: `0.35`

### Scratch

*Inputs in the Scratch panel.*

#### Scratch

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Scratch
- Default: `True`

#### Scratch Tint

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Scratch
- Default: `(1, 1, 1, 1)`

#### Scratch Intensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Scratch
- Default: `0.5`

#### Scratch Tint Override

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Scratch
- Default: `0`

#### Scratch Base Color Desaturation

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Scratch
- Default: `0.4`

#### Scratch Metalness Multiplier

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Scratch
- Default: `1`

#### Scratch Roughness Multiplier

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Scratch
- Default: `0.25`

#### Scratch Specular Multiplier

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Scratch
- Default: `1`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Vector Saturate](/blender/nodes/utilities/fpv4-vector-saturate)
- [FPv4 Desaturate](/blender/nodes/utilities/fpv4-desaturate)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
