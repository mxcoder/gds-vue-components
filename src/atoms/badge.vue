<template>
    <div :class="finalClassName">
        <slot></slot>
    </div>
</template>

<script>
import {ui_contexts} from 'System';

const baseclass = 'gds-badge';

export default {
    name: 'gds-badge',
    props: {
        context: {
            type: String,
            validator: function(value) {
                return (ui_contexts.indexOf(value) >= 0);
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
            let classList = [baseclass];
            if (this.context) {
                classList.push(`${baseclass}--${this.context}`)
            }
            if (this.inverse) {
                if (this.context) {
                    classList.push(`${baseclass}--${this.context}-inverse`);
                } else {
                    classList.push(`${baseclass}--inverse`);
                }
            }
            if (this.empty || Object.keys(this.$slots).length === 0) {
                classList.push(`${baseclass}--empty`)
            }
            return classList;
        }
    }
};
</script>

<style lang="css" scoped></style>
