import { play } from 'vue-play'
import Vue from 'vue'

// components
import button from 'Components/atoms/button';
import modal from 'Components/molecules/modal';

// playbooks
Vue.component('gds-button', button);
Vue.component('gds-modal', modal);

import ButtonPlaybook from 'Playbooks/atoms/button.vue';
import ButtonPlaybookSrc from '!raw-loader!Playbooks/atoms/button.vue';

play('Button')
    .displayName('gds-button')
    .add('Default', {
        ...ButtonPlaybook,
        example: ButtonPlaybookSrc
    })

import ModalPlaybook from 'Playbooks/molecules/modal.vue';
import ModalPlaybookSrc from '!raw-loader!Playbooks/molecules/modal.vue';

play('Modal')
    .displayName('gds-modal')
    .add('Default', {
        ...ModalPlaybook,
        example: ModalPlaybookSrc
    })
