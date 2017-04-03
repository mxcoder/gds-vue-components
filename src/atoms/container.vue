<template>
    <div :class="finalClassName">
        <slot></slot>
    </div>
</template>

<script>
import {ui_contexts, ui_breakpoints} from 'System';

const baseclass = 'gds-container';

export default {
    name: 'container',
    props: {
        context: {
            type: String,
            validator: function(value) {
                return (ui_contexts.indexOf(value) >= 0);
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
            if (this.context) {
                classList.push(`${baseclass}--${this.context}`);
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
