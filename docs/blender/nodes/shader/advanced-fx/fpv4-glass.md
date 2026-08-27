---
title: "FPv4 Glass"
description: "The FPv4 Glass node group from Fortnite Porting."
---

# FPv4 Glass

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Glass node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-glass.png then uncomment:
![FPv4 Glass](/blender/nodes/shader/advanced-fx/fpv4-glass.png)
-->

## Panels

- **Tint**
- **Diffuse**
- **Specular**
- **Use SRM**
- **Fresnel**
- **Texture Opacity**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Tint

*Inputs in the Tint panel.*

#### Color_DarkTint

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Tint
- Default: `(0, 0, 0, 1)`

#### Tint Amount

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Tint
- Default: `0`

### Diffuse

*Inputs in the Diffuse panel.*

#### Diffuse

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Diffuse
- Default: `False`

#### GlassDiffuse

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Diffuse
- Default: `(0, 0, 0, 1)`

#### DiffuseTextureBlend

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Diffuse
- Default: `1`

### Specular

*Inputs in the Specular panel.*

#### GlassSpecular

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `1`

#### GlassRoughness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `0`

#### GlassMetallic

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Specular
- Default: `0.1`

### Use SRM

*Inputs in the Use SRM panel.*

#### Use SRM

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use SRM
- Default: `False`

#### SpecularTextureBlend

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Use SRM
- Default: `1`

#### RoughnessTextureBlend

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Use SRM
- Default: `1`

#### MetallicTextureBlend

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Use SRM
- Default: `1`

### Fresnel

*Inputs in the Fresnel panel.*

#### Thickness

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Fresnel
- Default: `1`

#### InnerTransparency

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Fresnel
- Default: `0`

#### Inner Transparency Max Tint

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Fresnel
- Default: `0.9`

#### OuterTransparency

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Fresnel
- Default: `0.85`

#### FresnelExponentTransparency

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Fresnel
- Default: `1`

### Texture Opacity

*Inputs in the Texture Opacity panel.*

#### Texture Opacity

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Texture Opacity
- Default: `False`

#### TextureOpacityChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Texture Opacity
- Default: `(1, 0, 0, 1)`

#### TextureOpacityAdd

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Texture Opacity
- Default: `1`

#### TextureOpacityBlend

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `FACTOR`
- Panel: Texture Opacity
- Default: `0`

#### Mask

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Texture Opacity
- Default: `0`

#### Mask Opacity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Texture Opacity
- Default: `1`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 Fresnel](/blender/nodes/utilities/fpv4-fresnel)
- [FPv4 Normals](/blender/nodes/utilities/fpv4-normals)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
