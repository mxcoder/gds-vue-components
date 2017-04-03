const load = requireContext => requireContext.keys().map(requireContext)
// load files which end with `.play.js` in `../src/components` folder
load(require.context('Playbooks', true, /.play.js$/))
