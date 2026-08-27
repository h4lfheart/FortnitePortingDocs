---
title: "FPv4 MetalLUT"
description: "The FPv4 MetalLUT node group from Fortnite Porting."
---

# FPv4 MetalLUT

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 MetalLUT node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/core-fx/fpv4-metallut.png then uncomment:
![FPv4 MetalLUT](/blender/nodes/shader/core-fx/fpv4-metallut.png)
-->

## Panels

- **Use MetalLUT**

## Inputs

### MaterialAttributes

Value of the first color input

- Type: `Bundle`

### Use MetalLUT

*Inputs in the Use MetalLUT panel.*

#### Use MetalLUT

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Use MetalLUT
- Default: `False`

#### MetalLUTMaskChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use MetalLUT
- Default: `(1, 0, 0, 1)`

#### Metal LUT Curve

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `NONE`
- Panel: Use MetalLUT
- Default: `0`

#### LUTChannel

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Use MetalLUT
- Default: `(1, 0, 0, 1)`

#### MetalLutIntensity

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Use MetalLUT
- Default: `1`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 FX Mask](/blender/nodes/utilities/fpv4-fx-mask)
- [FPv4 Normals](/blender/nodes/utilities/fpv4-normals)
- [FPv4 SampleCurveAtlas](/blender/nodes/utilities/fpv4-samplecurveatlas)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
