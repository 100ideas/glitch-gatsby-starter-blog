---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
path: "/hello-world/"
---

This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on [salted duck eggs](http://en.wikipedia.org/wiki/Salted_duck_egg).

>A salted duck egg is a Chinese preserved food product made by soaking duck eggs in brine, or packing each egg in damp, salted charcoal. In Asian supermarkets, these eggs are sometimes sold covered in a thick layer of salted charcoal paste. The eggs may also be sold with the salted paste removed, wrapped in plastic, and vacuum packed. From the salt curing process, the salted duck eggs have a briny aroma, a gelatin-like egg white and a firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg](./.glitch-assets/salty_egg.jpg) `<-- the following is broken b/c we don't know how tell gatsby the proper CDN path to images yet`

![Chinese Salty Egg (Gatsby CDN)](https://cdn.glitch.com/bdfc8122-4cab-49af-be19-8cdb52c71a6e/salty_egg.jpg?1500449197089) `<-- gatsby cdn hard-coded` 

**NOTE**: pasting glitch assets CDN path directly into markdown source causes some kind of url-encoding escaping of the already-url-encoded asset URL. To fix, replace the **`%2F`** in the URL with **`/`** . Example:

```
broken: 
https://cdn.glitch.com/bdfc8122-4cab-49af-be19-8cdb52c71a6e%2Fsalty_egg.jpg?1500449197089

fixed: 
https://cdn.glitch.com/bdfc8122-4cab-49af-be19-8cdb52c71a6e/salty_egg.jpg?1500449197089
```