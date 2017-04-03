import Vue from 'vue';
import { play } from 'vue-play';

import modal from 'Components/molecules/modal';
import button from 'Components/atoms/button';
Vue.component('gds-button', button);
Vue.component('gds-modal', modal);

import ModalDefault from './modal.default.vue';
import ModalDefaultSrc from '!raw-loader!./modal.default.vue';

import ModalFooter from './modal.footer.vue';
import ModalFooterSrc from '!raw-loader!./modal.footer.vue';

play('Modal')
    .displayName('gds-modal')
    .add('Default', {
        ...ModalDefault,
        example: ModalDefaultSrc
    })
    .add('With custom footer', {
        ...ModalFooter,
        example: ModalFooterSrc
    })
