---
title: Shader
description: Node groups that output a shader, used as the surface of a material
order: 10
---

# Shader

These groups output a shader and are used as the surface of a material. They are split the same way the plugin classifies them in `mappings.py`:

<!-- TODO: Screenshot + overview of what makes up the v4 node system. -->


| Type | Contains |
| --- | --- |
| [Base](/blender/nodes/shader/base/) | Top-level material groups selected as the starting shader |
| [Layer](/blender/nodes/shader/layer/) | Extra material layers stacked on a base group |
| [Core FX](/blender/nodes/shader/core-fx/) | Common surface effects mixed into a base material |
| [Advanced FX](/blender/nodes/shader/advanced-fx/) | Specialized effects used by specific masters and material setups |
| [Build](/blender/nodes/shader/build/) | Shader groups that finalize the material and convert to a Blender shader |
| [World](/blender/nodes/shader/world/) | Material groups specifically for World materials |
| [Utilities](/blender/nodes/shader/utilities/) | Helper groups used inside the other shader groups |
