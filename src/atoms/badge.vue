<template>
    <div :class="finalClassName">
        <slot></slot>
    </div>
</template>

<script>
const types = ['success', 'info', 'warning', 'danger'];
export default {
    name: 'badge',
    props: {
        type: {
            type: String,
            validator: function(value) {
                return (types.indexOf(value) >= 0);
            }
        },
        inverse: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        finalClassName: function() {
            let classList = ['gds-badge'];
            if (this.type) {
                classList.push(`gds-badge--${this.type}`)
            }
            if (this.inverse) {
                if (this.type) {
                    classList.push(`gds-badge--${this.type}-inverse`);
                } else {
                    classList.push(`gds-badge--inverse`);
                }
            }
            if (this.empty || Object.keys(this.$slots).length === 0) {
                classList.push(`gds-badge--empty`)
            }
            return classList;
        }
    }
};
</script>

<style lang="css" scoped></style>
