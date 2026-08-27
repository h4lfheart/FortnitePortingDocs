---
title: "FPv4 Valet Lights"
description: "The FPv4 Valet Lights node group from Fortnite Porting."
---

# FPv4 Valet Lights

<!-- TODO: replace this intro with a short description of what the node does. -->
The FPv4 Valet Lights node group from Fortnite Porting.

<!-- Add a node screenshot at docs/public/blender/nodes/shader/advanced-fx/fpv4-valet-lights.png then uncomment:
![FPv4 Valet Lights](/blender/nodes/shader/advanced-fx/fpv4-valet-lights.png)
-->

## Panels

- **Headlight**
- **Taillight**
- **Brake Light**
- **Turn Signals**
- **ReverseLight**

## Inputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

### Headlight

*Inputs in the Headlight panel.*

#### Headlight

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Headlight
- Default: `False`

#### Headlight Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Headlight
- Default: `(1, 1, 1, 1)`

#### Headlight Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Headlight
- Default: `1`

### Taillight

*Inputs in the Taillight panel.*

#### Taillight Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Taillight
- Default: `(1, 0.132868, 0.132868, 1)`

#### Taillight Strength

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Taillight
- Default: `1`

#### ModulateEmissiveAgainstBaseColor

<!-- TODO: describe this socket -->

- Type: `Int`
- Subtype: `FACTOR`
- Panel: Taillight
- Default: `1`

### Brake Light

*Inputs in the Brake Light panel.*

#### Brake Light

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Brake Light
- Default: `False`

#### Taillight Brake Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: Brake Light
- Default: `(1, 0.132868, 0.132868, 1)`

### Turn Signals

*Inputs in the Turn Signals panel.*

#### Left Signal

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Turn Signals
- Default: `False`

#### Right Signal

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: Turn Signals
- Default: `False`

#### BlinkRate

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: Turn Signals
- Default: `1`

### ReverseLight

*Inputs in the ReverseLight panel.*

#### ReverseLight

<!-- TODO: describe this socket -->

- Type: `Bool`
- Panel: ReverseLight
- Default: `False`

#### ReverseLight Mask

<!-- TODO: describe this socket -->

- Type: `Closure`
- Panel: ReverseLight

#### ReverseLight Color

<!-- TODO: describe this socket -->

- Type: `Color`
- Panel: ReverseLight
- Default: `(1, 1, 1, 1)`

#### ReverseLight Contrast

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: ReverseLight
- Default: `3`

#### ReverseLight UV_TopLeft_X

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: ReverseLight
- Default: `0`

#### ReverseLight UV_TopLeft_Y

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: ReverseLight
- Default: `0`

#### ReverseLight UV_BottomRight_X

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: ReverseLight
- Default: `0.25`

#### ReverseLight UV_BottomRight_Y

<!-- TODO: describe this socket -->

- Type: `Float`
- Subtype: `NONE`
- Panel: ReverseLight
- Default: `0.625`

## Outputs

### MaterialAttributes

<!-- TODO: describe this socket -->

- Type: `Bundle`

## Examples

<!-- TODO: add a typical node setup and when to use this group. -->

## See also

- [FPv4 Desaturate](/blender/nodes/utilities/fpv4-desaturate)
- [FPv4 Preskinned](/blender/nodes/utilities/fpv4-preskinned)
- [FPv4 SetMaterialAttributes](/blender/nodes/utilities/fpv4-setmaterialattributes)
- [FPv4 Texture Cropping](/blender/nodes/utilities/fpv4-texture-cropping)
- [FPv4 Time](/blender/nodes/utilities/fpv4-time)
