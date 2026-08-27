---
title: "FPv4 Eyelash"
description: "The FPv4 Eyelash node group from Fortnite Porting."
---

# FPv4 Eyelash

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Eyelash node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-eyelash.png then uncomment:
![FPv4 Eyelash](/blender/nodes/shader/advanced-fx/fpv4-eyelash.png)
-->

## Panels

- **Use Eyelashes**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Use Eyelashes

*Inputs in the Use Eyelashes panel.*

#### Use Eyelashes

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Eyelashes
- Default: `False`

#### EyelashMask

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Eyelashes
- Default: `(0, 0, 0, 1)`

#### EyelashColor

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Eyelashes
- Default: `(0, 0, 0, 1)`

#### EyelashVertexColorMaskChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Eyelashes
- Default: `(0, 1, 0, 1)`

#### EyelashMetallic

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Eyelashes
- Default: `0`

#### EyelashRoughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Eyelashes
- Default: `0.6`

#### EyelashSpec

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Eyelashes
- Default: `0.5`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
