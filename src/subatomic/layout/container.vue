<template>
    <div :class="finalClassName">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'gds-container',
    props: {
        className: {
            default: '',
            type: String
        },
        fullWidth: {
            default: false,
            type: Boolean
        }
    },
    computed: {
        finalClassName: function() {
            let classList = `gds-layout__container ${this.className}`;
            if (this.fullWidth) {
                classList += ' gds-layout__container--full-width';
            }
            return classList;
        }
    }
};
</script>

<style lang="css" scoped></style>
