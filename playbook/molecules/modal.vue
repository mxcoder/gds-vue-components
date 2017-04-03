<template>
    <div class="gds-layout__container">
        <gds-button @click="toggleModal" state="primary">Toggle Modal</gds-button>
        <gds-modal uid="modal-default" :shown="modal" v-on:close="toggleModal"></gds-modal>
    </div>
</template>

<script>
export default {
    data () {
        return {
            modal: false
        };
    },
    methods: {
        toggleModal: function() {
            this.modal = !this.modal;
        }
    }
};
</script>
