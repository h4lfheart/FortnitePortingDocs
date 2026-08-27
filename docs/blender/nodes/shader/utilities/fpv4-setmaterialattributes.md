---
title: "FPv4 SetMaterialAttributes"
description: "The FPv4 SetMaterialAttributes node group from Fortnite Porting."
---

# FPv4 SetMaterialAttributes

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 SetMaterialAttributes node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/utilities/fpv4-setmaterialattributes.png then uncomment:
![FPv4 SetMaterialAttributes](/blender/nodes/shader/utilities/fpv4-setmaterialattributes.png)
-->

## Panels

- **M**
- **Base Color**
- **Metallic**
- **Roughness**
- **Alpha**
- **Normal Map**
- **Normal Strength**
- **Subsurface Weight**
- **Specular**
- **Specular Tint**
- **Anisotropic**
- **Anisotropic Rotation**
- **Anisotropic Tangent**
- **Clearcoat Weight**
- **Clearcoat Roughness**
- **Clearcoat Normals**
- **Emission**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Factor

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Default: `1`

### M

*Inputs in the M panel.*

#### M

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: M
- Default: `False`

#### Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: M
- Default: `(0.5, 0.5, 0, 1)`

### Base Color

*Inputs in the Base Color panel.*

#### Base Color

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Base Color
- Default: `False`

#### Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0.8, 0.8, 0.8, 1)`

### Metallic

*Inputs in the Metallic panel.*

#### Metallic

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Metallic
- Default: `False`

#### Value

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Metallic
- Default: `0`

### Roughness

*Inputs in the Roughness panel.*

#### Roughness

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Roughness
- Default: `False`

#### Value

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Roughness
- Default: `0.5`

### Alpha

*Inputs in the Alpha panel.*

#### Alpha

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Alpha
- Default: `False`

#### Value

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Alpha
- Default: `1`

### Normal Map

*Inputs in the Normal Map panel.*

#### Normal Map

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Normal Map
- Default: `False`

#### Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Normal Map
- Default: `(0.5, 0.5, 1, 1)`

### Normal Strength

*Inputs in the Normal Strength panel.*

#### Normal Strength

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Normal Strength
- Default: `False`

#### Value

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Normal Strength
- Default: `0`

### Subsurface Weight

*Inputs in the Subsurface Weight panel.*

#### Subsurface Weight

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Subsurface Weight
- Default: `False`

#### Value

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Subsurface Weight
- Default: `0`

### Specular

*Inputs in the Specular panel.*

#### Specular

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Specular
- Default: `False`

#### Value

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `0.5`

### Specular Tint

*Inputs in the Specular Tint panel.*

#### Specular Tint

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Specular Tint
- Default: `False`

#### Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Specular Tint
- Default: `(0.8, 0.8, 0.8, 1)`

### Anisotropic

*Inputs in the Anisotropic panel.*

#### Anisotropic

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Anisotropic
- Default: `False`

#### Value

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Anisotropic
- Default: `0`

### Anisotropic Rotation

*Inputs in the Anisotropic Rotation panel.*

#### Anisotropic Rotation

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Anisotropic Rotation
- Default: `False`

#### Value

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Anisotropic Rotation
- Default: `0`

### Anisotropic Tangent

*Inputs in the Anisotropic Tangent panel.*

#### Anisotropic Tangent

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Anisotropic Tangent
- Default: `False`

#### Vector

<!-- TODO: describe this socket -->

- Type: `Vector`
- Subtype: `NONE`
- Panel: Anisotropic Tangent
- Default: `(0, 0, 0)`

### Clearcoat Weight

*Inputs in the Clearcoat Weight panel.*

#### Clearcoat Weight

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Clearcoat Weight
- Default: `False`

#### Value

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Clearcoat Weight
- Default: `0`

### Clearcoat Roughness

*Inputs in the Clearcoat Roughness panel.*

#### Clearcoat Roughness

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Clearcoat Roughness
- Default: `False`

#### Value

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Clearcoat Roughness
- Default: `0`

### Clearcoat Normals

*Inputs in the Clearcoat Normals panel.*

#### Clearcoat Normals

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Clearcoat Normals
- Default: `False`

#### Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Clearcoat Normals
- Default: `(0.5, 0.5, 1, 1)`

### Emission

*Inputs in the Emission panel.*

#### Emission

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Emission
- Default: `False`

#### Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Emission
- Default: `(0, 0, 0, 1)`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Material Attributes](/blender/nodes/utilities/fpv4-material-attributes)
