# Casper DevDark

A dark version of the default theme for [Ghost](http://github.com/tryghost/ghost/).

&nbsp;

![screenshot-desktop](https://raw.githubusercontent.com/null-dev/Casper-DarkDev/master/assets/screenshot-desktop.png)

&nbsp;

# Live demo
You can view a live demo of the theme here: https://blog.nulldev.xyz/

# DevDark specific features

Casper DevDark also includes some new features not found in Casper:
- Syntax highlighting:
   
   Simply put the name of the language after your three ticks in markdown to activate it:

    ```
    	```java
        System.out.println("Hello, World!");
        ```
    ```
- Mark support in syntax highlighted code (powered by: http://prismjs.com/plugins/keep-markup/):
   
   Put `<==MARK==>` where you want to begin your mark and `<==/MARK==>` where you want to end your mark:
    ```
        ```css
		@media <==MARK==>screen<==/MARK==> {        ```
    	```
    ```
    
    The example above renders something like this:&nbsp;
    ![mark result](https://user-images.githubusercontent.com/9571936/38475948-299813c8-3b79-11e8-915c-17a24bce26cf.png)

- Post width boosting:
   
   Increase the display width of an individual post by placing `<script>DEVDARK_WIDE()</script>` into the post **footer's** code injection box.

   Helps make large chunks of code with very long lines much easier to read.

# First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

We've documented our default theme pretty heavily so that it should be fairly easy to work out what's going on just by reading the code and the comments. Once you feel comfortable with how everything works, we also have full [theme API documentation](https://themes.ghost.org) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The main template file
- `index.hbs` - Used for the home page
- `post.hbs` - Used for individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives
- `author.hbs` - Used for author archives

One really neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive


# Development

Casper styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need Node and Gulp installed globally. After that, from the theme's root directory:

```bash
$ npm install
$ gulp
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
$ gulp zip
```

# PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
- Variables - Simple pure CSS variables
- [Color Function](https://github.com/postcss/postcss-color-function)


# SVG Icons

Casper uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.


# Copyright & License

Copyright (c) 2013-2018 Ghost Foundation - Released under the [MIT license](LICENSE).
Copyright (c) 2018 Andy Bao.
