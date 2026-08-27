---
title: "FPv4 Base Material"
description: "The FPv4 Base Material node group from Fortnite Porting."
---

# FPv4 Base Material

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Base Material node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/base/fpv4-base-material.png then uncomment:
![FPv4 Base Material](/blender/nodes/shader/base/fpv4-base-material.png)
-->

## Panels

- **Base Color**
- **Normal**
- **Specular**
- **UseMetalMaskPower**
- **Emission**
- **Use Emission Color**
- **Transparency**

## Inputs

### FX Mask

<!-- TODO: describe this socket -->

- Type: `Color`
- Default: `(0, 0, 0, 1)`

### Base Color

*Inputs in the Base Color panel.*

#### Diffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0.8, 0.8, 0.8, 1)`

#### Background Diffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(1, 1, 1, 1)`

#### Background Diffuse Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Base Color
- Default: `1`

#### M

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(1.00017, 0.502865, 0, 1)`

### Normal

*Inputs in the Normal panel.*

#### Normals

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Normal
- Default: `(0.5, 0.5, 1, 1)`

#### Normal Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Normal
- Default: `1`

### Specular

*Inputs in the Specular panel.*

#### SpecularMasks

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Specular
- Default: `(0.5, 0, 0.5, 1)`

#### Specular Tint

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Specular
- Default: `(1, 1, 1, 1)`

#### SwizzleRoughnessToGreen

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Specular
- Default: `0`

#### Roughness Min

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Specular
- Default: `0`

#### Roughness Max

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Specular
- Default: `1`

#### Roughness Multiplier

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `1`

#### Metallic Multiplier

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `1`

### UseMetalMaskPower

*Inputs in the UseMetalMaskPower panel.*

#### UseMetalMaskPower

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: UseMetalMaskPower
- Default: `False`

#### MetalMaskPower

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: UseMetalMaskPower
- Default: `1`

### Emission

*Inputs in the Emission panel.*

#### Emission

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Emission
- Default: `(0, 0, 0, 1)`

#### Emission Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Emission
- Default: `1`

#### Emission Multiplier

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Emission
- Default: `(1, 1, 1, 1)`

### Use Emission Color

*Inputs in the Use Emission Color panel.*

#### Use Emission Color

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use Emission Color
- Default: `False`

#### Emission Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use Emission Color
- Default: `(0, 0, 0, 1)`

### Transparency

*Inputs in the Transparency panel.*

#### MaskTexture

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Transparency
- Default: `(1, 1, 1, 1)`

#### Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Transparency
- Default: `1`

## Outputs

### Material Attributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Background Diffuse](/blender/nodes/utilities/fpv4-background-diffuse)
- [FPv4 Material Attributes](/blender/nodes/utilities/fpv4-material-attributes)
- [FPv4 SpecularMasks](/blender/nodes/utilities/fpv4-specularmasks)
