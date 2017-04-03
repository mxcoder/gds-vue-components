<template>
    <div :class="finalClassName" :dataElement="uid">
        <div :class="finalModalClassName">
            <div :class="finalHeaderClassName">
                <slot name="header">
                    <h2 class="gds-modal__title gds-text--header-sm">{{title}}</h2>
                    <button class="gds-modal__close-button" @click.capture="open = false"></button>
                </slot>
            </div>
            <div class="gds-modal__body">
                <slot>
                    <p class="-m-b-1">You're missing to put some content in here.</p>
                </slot>
            </div>
            <div :class="finalFooterClassName">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
const ESC_KEY = 27;

let instances = {};

// makes body modifications required by DS styles,
// also attaches global ESC listener
let applyHasModalToBody = function(state) {
    if (window && window.document && window.document.body) {
        let body = window.document.body;
        let bodyClasses = body.classList;
        if (state) {
            bodyClasses.add('-has-modal');
            body.addEventListener('keyup', triggerOnEsc);
        } else {
            bodyClasses.remove('-has-modal');
            body.removeEventListener('keyup', triggerOnEsc);
        }
    }
};
// Trigger 'esc' event on all open modals
let triggerOnEsc = function(evt) {
    if (evt.keyCode === ESC_KEY) {
        Object.keys(instances).forEach(function(uid) {
            if (instances[uid].$data.open) {
                instances[uid].$emit('esc', {type: 'esc'});
            }
        });
    }
};

export default {
    name: 'modal',
    props: {
        uid: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: 'Dialog'
        },
        shown: {
            type: Boolean,
            default: false
        },
        modalClassName: {
            type: [String, Array],
            default: 'gds-layout__column--md-12'
        },
        headerClassName: {
            type: [String, Array],
            default: ''
        },
        footerClassName: {
            type: [String, Array],
            default: ''
        }
    },
    data: function() {
        return {
            open: false
        }
    },
    beforeMount: function() {
        instances[this.uid] = this;
        this.open = this.shown;
    },
    watch: {
        shown: function(new_state) {
            this.open = new_state;
        },
        open: function(new_state) {
            let event = new_state === true ? 'open' : 'close';
            this.$emit(event, { type: event });
            applyHasModalToBody(new_state);
        }
    },
    computed: {
        finalClassName: function() {
            let classList = ['gds-modal__overlay'];
            if (this.open) {
                classList.push('gds-modal--shown');
            }
            return classList;
        },
        finalModalClassName: function() {
            let classList = ['gds-modal'];
            if (this.headerClassName.length) {
                classList.push(typeof this.headerClassName === 'string' ? this.headerClassName : this.headerClassName.join(' '));
            }
            return classList;
        },
        finalHeaderClassName: function() {
            let classList = ['gds-modal__header'];
            if (this.headerClassName.length) {
                classList.push(typeof this.headerClassName === 'string' ? this.headerClassName : this.headerClassName.join(' '));
            }
            return classList;
        },
        finalFooterClassName: function() {
            let classList = ['gds-modal__footer'];
            if (this.footerClassName.length) {
                classList.push(typeof this.footerClassName === 'string' ? this.footerClassName : this.footerClassName.join(' '));
            }
            return classList;
        }
    }
};
</script>

<style lang="css" scoped></style>
