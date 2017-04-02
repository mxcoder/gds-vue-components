<template>
    <container>
        <row>
            <column sm="6">
                <div>Hello</div>
            </column>
            <column sm="6">
                <div>World</div>
            </column>
        </row>
    </container>
</template>

<script>
import container from 'Components/subatomic/layout/container';
import column from 'Components/subatomic/layout/column';
import row from 'Components/subatomic/layout/row';

export default {
    name: 'App',
    data () {
        return {
        };
    },
    components: {
        container,
        column,
        row
    }
};
</script>

<style lang="css" scoped></style>
