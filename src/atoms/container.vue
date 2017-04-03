<template>
    <div :class="finalClassName">
        <slot></slot>
    </div>
</template>

<script>
import {ui_states, ui_breakpoints} from 'System';

const baseclass = 'gds-container';

export default {
    name: 'container',
    props: {
        state: {
            type: String,
            validator: function(value) {
                return (ui_states.indexOf(value) >= 0);
            }
        },
        size: {
            type: String,
            validator: function(value) {
                return (ui_breakpoints.indexOf(value) >= 0);
            }
        }
    },
    computed: {
        finalClassName: function() {
            let classList = [baseclass];
            if (this.state) {
                classList.push(`${baseclass}--${this.state}`);
            } else {
                classList.push(`${baseclass}--gray`);
            }
            if (this.size) {
                classList.push(`${baseclass}--${this.size}`);
            }
            return classList;
        }
    }
};
</script>

<style lang="css" scoped></style>
