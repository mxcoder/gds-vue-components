<template>
    <div :class="finalClassName">
        <slot></slot>
    </div>
</template>

<script>
import {ui_states} from 'System';

const baseclass = 'gds-badge';

export default {
    name: 'gds-badge',
    props: {
        state: {
            type: String,
            validator: function(value) {
                return (ui_states.indexOf(value) >= 0);
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
            if (this.state) {
                classList.push(`${baseclass}--${this.state}`)
            }
            if (this.inverse) {
                if (this.state) {
                    classList.push(`${baseclass}--${this.state}-inverse`);
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
