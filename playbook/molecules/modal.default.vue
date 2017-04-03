<template>
    <div class="gds-layout__container">
        <gds-button @click="openModal" state="primary">Open Modal</gds-button>
        <gds-modal uid="modal-default" :shown="modal" v-on:close="closeModal" v-on:esc="closeModal"></gds-modal>
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
        openModal: function() {
            this.modal = true;
        },
        closeModal: function() {
            this.modal = false;
        }
    }
};
</script>
