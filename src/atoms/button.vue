<template>
    <button @click="nativeClick" :class="finalClassName"><slot>Click Here</slot></button>
</template>

<script>
import {ui_contexts, ui_breakpoints} from 'System';

const baseclass = 'gds-button';

const displays = ['link', 'block'];

export default {
    name: 'gds-button',
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
        },
        display: {
            type: String,
            validator: function(value) {
                return (displays.indexOf(value) >= 0);
            }
        }
    },
    computed: {
        finalClassName: function() {
            let classList = [baseclass];
            if (this.context) {
                classList.push(`${baseclass}--${this.context}`);
            } else {
                classList.push(`${baseclass}--default`);
            }
            if (this.size) {
                classList.push(`${baseclass}--${this.size}`);
            }
            if (this.display) {
                classList.push(`${baseclass}--${this.display}`);
            }
            return classList;
        }
    },
    methods: {
        nativeClick: function(evt) {
            this.$emit('click', evt);
        }
    }
};
</script>

<style lang="css" scoped></style>
