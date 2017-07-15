glitch-gatsby-starter-blog
==========================

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

---

### Changelog

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