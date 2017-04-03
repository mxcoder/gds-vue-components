<template>
    <div class="gds-loading">
        <div :class="finalClassName"></div>
    </div>
</template>

<script>
import {ui_breakpoints} from 'System';

const baseclass = 'gds-loading__dot';

export default {
    name: 'loading',
    props: {
        size: {
            type: String,
            validator: function(value) {
                return (ui_breakpoints.indexOf(value.toLowerCase()) >= 0);
            }
        },
    },
    computed: {
        finalClassName: function() {
            let classList = [baseclass];
            if (this.size) {
                classList.push(`${baseclass}--${this.size}`);
            }
            return classList;
        }
    }
};
</script>

<style lang="css" scoped></style>
