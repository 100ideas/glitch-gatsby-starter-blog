---
title: gatsby-starter-blog on glitch
date: "2017-07-15T00:34:31-07:00"
path: "/glitch-readme/"
---

Gatsby.js glitch starter
========================

Will [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) work on glitch? I wasn't able to get a direct import of the repo working (see broken app at [glitch.com/edit/#!/gatsby-lobster](https://glitch.com/edit/#!/gatsby-lobster)), but after stripping out `sharp` plugins & the fonts (which did work initially, mysteriously), it's running.

**see [github.com/gatsbyjs/gatsby/issues/1515](https://github.com/gatsbyjs/gatsby/issues/1515) for further discussion.**

---

What's not working:
- `gatsby-plugin-sharp` - sharp won't compile
- `gatsby-transformer-sharp`
- `typeface-merriweather` - see `components/Bio.js`
- `typeface-montserrat`
- `gatsby-remark-images` - not sure if it will work / needed
- `gatsby-remark-copy-linked-files` - not sure if needed

Not sure how useful it is to configure gatsby to use markdown source files in the pages directory when it is hosted here on glitch. I think most users would prefer gh-pages since then the content is revisioned local + github locations :) And gatsby can deal with copying images/assets in the markdown folders into their proper places.

So for gatsby-on-glitch, it probably makes more sense to check out the [gatsby-source-contentful plugin](https://www.gatsbyjs.org/docs/packages/gatsby-source-contentful/)

for getting images etc stored in the `assets` folder, I guess we need a `gatsby-source-glitch-assets` plugin - we could base it on the glitch [assets-lib](https://glitch.com/edit/#!/assets-lib) example: *"Assets.js allows you to use relative paths to serve your assets on Glitch."*