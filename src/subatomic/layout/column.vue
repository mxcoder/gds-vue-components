<template>
    <div :class="finalClassName">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'column',
    props: {
        xs: {default: 12},
        sm: {default: false},
        md: {default: false},
        lg: {default: false},
        xl: {default: false},
        'xs-offset': {default: false},
        'sm-offset': {default: false},
        'md-offset': {default: false},
        'lg-offset': {default: false},
        'xl-offset': {default: false},
        'xs-push': {default: false},
        'sm-push': {default: false},
        'md-push': {default: false},
        'lg-push': {default: false},
        'xl-push': {default: false},
        'xs-pull': {default: false},
        'sm-pull': {default: false},
        'md-pull': {default: false},
        'lg-pull': {default: false},
        'xl-pull': {default: false},
    },
    computed: {
        finalClassName: function () {
            let props = this.$props,
                className = [];
            Object.keys(props).forEach(function(key) {
                if (props[key]) {
                    className.push(`gds-layout__column--${key}-${props[key]}`);
                }
            })
            return className.join(' ');
        }
    }
};
</script>

<style lang="css" scoped></style>
