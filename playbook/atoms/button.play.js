import Vue from 'vue';
import { play } from 'vue-play';

import button from 'Components/atoms/button';
Vue.component('gds-button', button);

import ButtonPlaybook from './button.vue';
import ButtonPlaybookSrc from '!raw-loader!./button.vue';

play('Button')
    .displayName('gds-button')
    .add('Default', {
        ...ButtonPlaybook,
        example: ButtonPlaybookSrc
    })

