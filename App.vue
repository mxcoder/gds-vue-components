<template>
<div>
    <gds-layout-container>
        <gds-row>
            <gds-column sm="6">
                <div>Hello <gds-badge :inverse="true">10</gds-badge> </div>
            </gds-column>
            <gds-column sm="6">
                <div>World <gds-badge type="danger">10</gds-badge> <gds-badge></gds-badge> </div>
            </gds-column>
        </gds-row>
        <gds-row>
            <gds-column md="6">
                <gds-button @click="onButtonClick" data-id="Default"></gds-button>
                <gds-button @click="onButtonClick" data-id="Disabled" disabled>Cant click me!</gds-button>
                <gds-button @click="onButtonClick" data-id="Home" context="info"><span class="fa fa-home"></span> Home</gds-button>
                <span class="gds-tooltip--right" data-tooltip="I am a tooltip!">
                    <gds-button @click="onButtonClick" @mouseover.native="onButtonHover" data-id="LinkMDWarning" display="link" size="md" context="warning">Hover me!</gds-button>
                </span>
                <gds-container>
                    <p>Some paragraph in a container</p>
                </gds-container>
            </gds-column>
            <gds-column md="6">
                <gds-button @click="onButtonClick" data-id="BlockXLDanger" display="block" size="xl" context="danger">AH! Click me!</gds-button>
                <gds-button @click="onButtonClick" data-id="BlockXLPrimary" display="block" size="xl" context="primary">Yes. Click me!</gds-button>
            </gds-column>
        </gds-row>
        <gds-row>
            <div style="position:relative;width:100%;height:2em;">
                <gds-loading></gds-loading>
            </div>
            <div style="position:relative;width:100%;height:4em;">
                <gds-loading size="lg"></gds-loading>
            </div>
        </gds-row>
        <gds-row>
            <gds-column all="6">
                <gds-button display="block" size="lg" context="success" @click="modalA = true">Open Modal A</gds-button>
            </gds-column>
            <gds-column all="6">
                <gds-button display="block" size="lg" context="info" @click="modalB = true">Open Modal B</gds-button>
            </gds-column>
        </gds-row>
    </gds-layout-container>
    <gds-modal uid="modalA" :shown="modalA" title="Modal A" v-on:esc="modalA = false"></gds-modal>
    <gds-modal uid="modalB" :shown="modalB" title="Modal B" v-on:open="shoutEventType" v-on:close="shoutEventType" v-on:esc="shoutEventType">
        <p>This is the Modal B</p>
        <div slot="footer">
            <gds-button display="block" context="danger" @click="modalB = false">Close modal</gds-button>
        </div>
    </gds-modal>
</div>
</template>

<script>
import layout_container from 'Components/subatomic/layout/container';
import column from 'Components/subatomic/layout/column';
import row from 'Components/subatomic/layout/row';

import badge from 'Components/atoms/badge';
import button from 'Components/atoms/button';
import container from 'Components/atoms/container';
import loading from 'Components/atoms/loading';

import modal from 'Components/molecules/modal';

export default {
    name: 'App',
    data () {
        return {
            modalA: false,
            modalB: false,
        };
    },
    methods: {
        shoutEventType: function(evt) {
            alert(evt.type);
        },
        onButtonClick: function(evt) {
            alert('Clicked: ' + evt.target.dataset.id);
        },
        onButtonHover: function(evt) {
            alert('Hovered: ' + evt.target.dataset.id);
        }
    },
    components: {
        'gds-layout-container': layout_container,
        'gds-column': column,
        'gds-row': row,
        'gds-badge': badge,
        'gds-button': button,
        'gds-container': container,
        'gds-loading': loading,
        'gds-modal': modal,
    }
};
</script>

<style lang="css" scoped></style>
