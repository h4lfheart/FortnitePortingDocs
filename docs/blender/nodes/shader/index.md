---
title: Shader
description: Node groups that output a shader, used as the surface of a material
order: 10
---

# Shader

These groups output a shader and are used as the surface of a material. They are split the same way the plugin classifies them in `mappings.py`:

| Type | Contains |
| --- | --- |
| [Base](/blender/nodes/shader/base/) | Top-level material groups selected as the starting shader |
| [Layer](/blender/nodes/shader/layer/) | Extra material layers stacked on a base group |
| [Core FX](/blender/nodes/shader/core-fx/) | Common surface effects mixed into a base material |
| [Advanced FX](/blender/nodes/shader/advanced-fx/) | Specialized effects used by specific masters and material setups |
| [Etc](/blender/nodes/shader/etc/) | Shader groups that are not listed in the mappings registry |
| [Utilities](/blender/nodes/shader/utilities/) | Helper groups used inside the other shader groups |
