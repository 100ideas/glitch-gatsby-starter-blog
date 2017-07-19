---
title: glitch.com README
date: "2017-07-15T00:34:37.121Z"
path: "/glitch-readme/"
---

glitch-gatsby-starter-blog
==========================

[gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) boilerplate running on glitch.com. 

- visit demo: https://gatsby-starter-blog.glitch.me
- look at source: https://glitch.com/edit/#!/gatsby-starter-blog
- [remix on glitch](https://glitch.com/edit/#!/remix/gatsby-starter-blog) to get your own temporary, anonymous live copy of the app

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/gatsby-starter-blog)

#### Enabling HMR
glitch by default restarts & reloads the app server on code edits. This prevents webpack Hot Module Replacement from working. To fix:
  - If you are "remixing" anonymously, open the URL of your running app in a new browser tab. DON'T use the "Show Live" button in the editor.
  - If you have an account, click circular user icon in upper-right of window > turn off "Refresh App on Changes".

Also check [github.com/gatsbyjs/gatsby/issues/1515](https://github.com/gatsbyjs/gatsby/issues/1515) for further discussion.

---

### Glitch.com?

"[Glitch](https://glitch.com/about/)" by Fog Creek Software: 

> With working example apps to remix, a code editor to modify them, instant hosting and deployment - anybody can build a web app on Glitch, for free.

Terrific, we can all stop doing dev the old fashioned way with our cumbersome "laptops" and "terminals" and "operating systems" etc etc 👴 

But can it run the mighty [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)?! :trollface: 💪 
- demo: https://gatsby-starter-blog.glitch.me
- glitch source: https://glitch.com/edit/#!/gatsby-starter-blog

### UX Impressions

- in-browser glitch editor can be used create/edit markdown files in `src/pages/<date>-<post-name>/index.md`
  - but can't (easily) upload image files to src/pages/ folders
  - because images etc are supposed to be put into glitch's `assets` folder, which is served by cdn
  - maybe someone will make a `gatsby-source-glitch-assets` plugin to help
- authoring content & uploading / hosting media is possible, but not as simple off-the-shelf
- gatsby/glitch live-reloads changes quickly, but currently running in dev mode
- in general, glitch seems designed to make collaborative editing & instant hosting of app painless

### Implementation Notes

Will [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) work on glitch? I wasn't able to get a direct import of the repo working (see broken app at [glitch.com/edit/#!/gatsby-lobster](https://glitch.com/edit/#!/gatsby-lobster)), but after stripping out `sharp` plugins & the fonts (which did work initially, mysteriously), it's running.

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

### Future Directions

- mash up `gatsby-starter-blog` w/ [using-contentful](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-contentful) gatsby example to simplify content authoring
- figure out how to get assets from `.glitch-assets/`. Here's a good starting point: [glitch app using  express to serve assets](https://glitch.com/edit/#!/assets-lib?path=assets.js:1:0)

### Conclusion

**For newcomers to gatsby, [glitch-gatsby-starter-blog](https://glitch.com/edit/#!/gatsby-starter-blog) is potentially a painless way to explore running gatsby code with minimal friction.**

---

### Changelog

**17-7-18**:

- Consolidate content from https://github.com/gatsbyjs/gatsby/issues/1515 into README.
- Add entry to https://github.com/gatsbyjs/gatsby/edit/master/docs/docs/gatsby-starters.md

**17-7-12**:

got webpack hot module replacement working in dev mode
- [helpful glitch forum thread](https://support.glitch.com/t/webpack-hotreload-for-react-redux-not-working-i-think-i-know-why/1012/16)
- modifing webpack-hot-middleware client path via [UGLY HACK in gatsby-node.js](https://glitch.com/edit/#!/gatsby-starter-blog?path=gatsby-node.js:9:33)

```
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === `develop`) {
    config._config.entry.commons[1] = `/app/node_modules/webpack-hot-middleware/client?path=https://${process.env.PROJECT_DOMAIN}.glitch.me/__webpack_hmr&reload=true`
    config._config.output.publicPath = `https://${process.env.PROJECT_DOMAIN}.glitch.me/`
    // console.dir(config, {depth: 3})
  }
  return config
}
```

trying to figure out how to run gatsby in production mode. [glitch kitchen-sink-reference](https://glitch.com/edit/#!/kitchen-sink-reference) project shows how.

Tried the following in `package.json`, didn't work...
```
"postinstall": "gatsby build",
"production": "gatsby serve -p $PORT"
```
