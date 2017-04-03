<template>
    <div class="gds-layout__container">
        <gds-button state="primary" @click="onClick" :data-something="something">Click me</gds-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            something: 'Yada Yada'
        };
    },
    methods: {
        onClick: function(evt) {
            alert('Clicked: ' + evt.target.dataset.something);
        }
    }
};
</script>

<style lang="css" scoped></style>
