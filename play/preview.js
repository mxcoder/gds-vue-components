/* eslint-disable import/no-unassigned-import */
import preview from 'vue-play/preview'

// Load all playbooks
const load = requireContext => requireContext.keys().map(requireContext)
load(require.context('Playbooks', true, /.play.js$/))

preview()
