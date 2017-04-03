<template>
    <container>
        <row>
            <column sm="6">
                <div>Hello <badge :inverse="true">10</badge> </div>
            </column>
            <column sm="6">
                <div>World <badge type="danger">10</badge> <badge></badge> </div>
            </column>
        </row>
    </container>
</template>

<script>
import container from 'Components/subatomic/layout/container';
import column from 'Components/subatomic/layout/column';
import row from 'Components/subatomic/layout/row';
import badge from 'Components/atoms/badge';

export default {
    name: 'App',
    data () {
        return {
        };
    },
    components: {
        container,
        column,
        row,
        badge,
    }
};
</script>

<style lang="css" scoped></style>
