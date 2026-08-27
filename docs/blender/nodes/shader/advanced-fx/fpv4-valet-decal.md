---
title: "FPv4 Valet Decal"
description: "The FPv4 Valet Decal node group from Fortnite Porting."
---

# FPv4 Valet Decal

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Valet Decal node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-valet-decal.png then uncomment:
![FPv4 Valet Decal](/blender/nodes/shader/advanced-fx/fpv4-valet-decal.png)
-->

## Panels

- **Use Decal**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Use Decal

*Inputs in the Use Decal panel.*

#### Use Decal

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Decal
- Default: `False`

#### Decal Texture

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: Use Decal

#### Use Second UV Channel for Decal

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Use Decal
- Default: `0`

#### Decal Metallic

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Decal
- Default: `1`

#### Decal Roughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Decal
- Default: `1`

#### Decal Specular

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Decal
- Default: `1`

#### Decal Clearcoat

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use Decal
- Default: `0`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
