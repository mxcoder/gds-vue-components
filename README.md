GumGum Design System - Vue compontents library
==============================================

Reusable VueJS components for GDS

Run locally
-----------

Run `run-docker` bash script to create a docker container where then you can:

Run `yarn` to install deps

Run:

- `yarn default` : for HMR dev env using App.vue as entry
- `yarn play` : for vue-play env
- `yarn build:play` : to build vue-play static in build-play/
- `yarn build:umd` : to build UMD libraries in build-umd/

Use as Vue (.vue) dependencies
------------------------------

In your package.json, include:
```
"gds-vue-components": "git+ssh://git@github.com:mxcoder/gds-vue-components.git"
```

In your .vue files import them as:
```
import button from 'gds-vue-components/src/atoms/button';
```
And in your component you can register it as:
```
{
    components: {
        'gds-button': button
    }
}
```
`'gds-button'` can be anything you want, its what your template tags are going to be.

Use as UMD (.js) dependencies
------------------------------

In your html file, include:

```
<link rel="stylesheet" href="https://ds.gumgum.com/stable/theme-blue.css">
<script src="https://unpkg.com/vue"></script>
<script src="{hostname}/umd/atoms-button.js"></script>
```
Then you can use them in your components or apps:
```
{
    components: {
        'gds-button': gds['atoms-button']
    }
}
```
or for global registration:
```
Vue.component('gds-button', gds['atoms-button']);
```

*For a quick check on UMD functionality:*

- Run `yarn && yarn all-umd`
- Open in a browser: `tests/umd/index.html` with `file://` protocol
