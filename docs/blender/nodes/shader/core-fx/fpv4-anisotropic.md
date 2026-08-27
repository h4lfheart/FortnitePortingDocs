---
title: "FPv4 Anisotropic"
description: "The FPv4 Anisotropic node group from Fortnite Porting."
---

# FPv4 Anisotropic

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Anisotropic node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/core-fx/fpv4-anisotropic.png then uncomment:
![FPv4 Anisotropic](/blender/nodes/shader/core-fx/fpv4-anisotropic.png)
-->

## Panels

- **Use AnisotropicShading**

## Inputs

### MaterialAttributes

Value of the first color input

- Type: `Bundle`

### Use AnisotropicShading

*Inputs in the Use AnisotropicShading panel.*

#### Use AnisotropicShading

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use AnisotropicShading
- Default: `False`

#### AnisotropicTangentWeight

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use AnisotropicShading
- Default: `(0.063009, 0.456411, 0.450786, 1)`

#### AnisotropicTangentWeight Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use AnisotropicShading
- Default: `0`

#### AnisotropyMaxWeight

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use AnisotropicShading
- Default: `1`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Anisotropic Shading](/blender/nodes/utilities/fpv4-anisotropic-shading)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
