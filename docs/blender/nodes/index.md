---
title: Nodes
description: Material nodes and the Blender material system for Fortnite Porting
---

# Nodes

Fortnite Porting builds Blender materials out of **FPv4** node groups. Each group has its own page, laid out like [Blender's own node docs](https://docs.blender.org/manual/en/latest/render/shader_nodes/displacement/bump.html): a short intro, then **Inputs**, **Outputs**, and **Examples**.

Groups are split into categories in the sidebar:

| Category | Contains |
| --- | --- |
| Shader | Material groups, split into Base, Layer, Core FX, Advanced FX, Etc, and Utilities |
| Geometry | Geometry Nodes groups used by the Fortnite Porting modifiers |

<SectionLinks />

::: tip Contributing
Page stubs are generated from Blender by [`scripts/blender/dump_fpv4_node_groups.py`](https://github.com/h4lfheart/FortnitePortingDocs/blob/main/scripts/blender/dump_fpv4_node_groups.py). Socket types, defaults, and internal wiring are captured automatically; the descriptions are written by hand. See the [script README](https://github.com/h4lfheart/FortnitePortingDocs/blob/main/scripts/blender/README.md).
:::
