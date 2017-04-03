<template>
    <div class="gds-layout__container">
        <gds-button @click="openModal" context="primary">Open Modal</gds-button>
        <gds-modal uid="modal-default" :shown="modal" v-on:close="closeModal" v-on:esc="closeModal">
            <div slot="footer">
                <gds-button context="danger" @click="closeModal">Cancel</gds-button>
            </div>
        </gds-modal>
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
