---
title: "FPv4 Hair"
description: "The FPv4 Hair node group from Fortnite Porting."
---

# FPv4 Hair

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Hair node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-hair.png then uncomment:
![FPv4 Hair](/blender/nodes/shader/advanced-fx/fpv4-hair.png)
-->

## Panels

- **Base Color**
- **Color Variation**
- **Masks**
- **Specular**
- **Emission**
- **Anisotropy**
- **Normals**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Base Color

*Inputs in the Base Color panel.*

#### Hair_Color_Variation

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(1, 0.033493, 0, 1)`

#### Paint_Hair_Color_Darkness

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(0.5, 0.5, 0.5, 1)`

#### Paint_Hair_Color_Brightness

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Base Color
- Default: `(1, 1, 1, 1)`

#### AmbientOcclusion_Black

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Base Color
- Default: `0.6`

### Color Variation

*Inputs in the Color Variation panel.*

#### BaseColor_Fresnel_Brightness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Color Variation
- Default: `0.5`

#### Basecolor_Fresnel_Exponent

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Color Variation
- Default: `3.5`

#### Fresnel_Brightness_Multiple

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Color Variation
- Default: `8`

### Masks

*Inputs in the Masks panel.*

#### Hair Mask

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Masks
- Default: `(0, 0, 0, 1)`

#### Paint_Hair_Contrast

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Masks
- Default: `0`

#### Gmap_intensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Masks
- Default: `0`

### Specular

*Inputs in the Specular panel.*

#### Specular_POWER

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `1`

#### Hair_Specular_MIN

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `0.3`

#### Hair_Specular_MAX

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `0.5`

#### Hair_Metallic

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `0.05`

#### Metallic Multiplier

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `1`

#### Roughness_power

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `1`

#### Roughness Multiplier

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `1`

#### Roughness Min

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `0.75`

#### Roughness Max

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `0.84`

#### Roughness_Noise_Tiling

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `90`

#### Hair_Noise_Roughness_Min

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `0.75`

### Emission

*Inputs in the Emission panel.*

#### Emissive_Brightness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Emission
- Default: `1`

### Anisotropy

*Inputs in the Anisotropy panel.*

#### UseAnisotropicShading

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Anisotropy
- Default: `0`

#### AnisotropicTangentWeight

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Anisotropy
- Default: `(0.063009, 0.456411, 0.450786, 1)`

#### AnisotropicTangentWeight Alpha

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Anisotropy
- Default: `0`

#### AnisotropyMaxWeight

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Anisotropy
- Default: `1`

#### Hair_Anisotropy_Min

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Anisotropy
- Default: `0.5`

#### Hair_Anisotropy_Max

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Anisotropy
- Default: `0.75`

#### Scraggle

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Anisotropy
- Default: `0.25`

### Normals

*Inputs in the Normals panel.*

#### Hair_Mesh_Normal_Flatness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Normals
- Default: `0.6`

#### Strands Normal

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Normals
- Default: `(0.5, 0.5, 1, 1)`

#### Paint_Hair_Normal_Flatness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Normals
- Default: `0.6`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Anisotropic Shading](/blender/nodes/utilities/fpv4-anisotropic-shading)
- [FPv4 CheapContrast](/blender/nodes/utilities/fpv4-cheapcontrast)
- [FPv4 Vector Saturate](/blender/nodes/utilities/fpv4-vector-saturate)
- [FPv4 Blend Angle Corrected Normals](/blender/nodes/utilities/fpv4-blend-angle-corrected-normals)
- [FPv4 Flatten Normals](/blender/nodes/utilities/fpv4-flatten-normals)
- [FPv4 Fresnel FX](/blender/nodes/utilities/fpv4-fresnel-fx)
- [FPv4 Hueshift](/blender/nodes/utilities/fpv4-hueshift)
- [FPv4 Normals](/blender/nodes/utilities/fpv4-normals)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
