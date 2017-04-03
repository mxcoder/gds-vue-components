<template>
    <div :class="finalClassName">
        <slot></slot>
    </div>
</template>

<script>
import {ui_breakpoints} from 'System';

// Column Sizes go from 1 to 12
let columnSizeValidator = function (value) {
    if (value === false) return true;
    let intvalue = isNaN(value) ? parseInt(value, 10) : value;
    return (intvalue > 0 && intvalue <= 12);
};

let props = {
    all: {default: false, validator: columnSizeValidator}
};
ui_breakpoints.forEach(function(bp) {
    props[bp] = {default: false, validator: columnSizeValidator};
    props[`${bp}-offset`] = {default: false, validator: columnSizeValidator};
    props[`${bp}-push`] = {default: false, validator: columnSizeValidator};
    props[`${bp}-pull`] = {default: false, validator: columnSizeValidator};
});
props.xs.default = 12;

export default {
    name: 'gds-column',
    props: props,
    computed: {
        finalClassName: function () {
            let props = this.$props,
                allsize = this.all,
                className = [];
            Object.keys(props).forEach(function(key) {
                let colsize = props[key];
                // if all props is used, it overrides all per-breakpoint settings
                if (ui_breakpoints.indexOf(key) >= 0) {
                    colsize = allsize || props[key];
                }
                if (colsize !== false) {
                    className.push(`gds-layout__column--${key}-${colsize}`);
                }
            })
            return className;
        }
    }
};
</script>

<style lang="css" scoped></style>
