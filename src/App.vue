<template>
	<LayoutContainer>
		<Row>
            <Column sm="6">
                <div>Hello</div>
            </Column>
            <Column sm="6">
                <div>World</div>
            </Column>
        </Row>
	</LayoutContainer>
</template>

<script>
import LayoutContainer from './subatomic/LayoutContainer';
import Column from './subatomic/Column';
import Row from './subatomic/Row';

export default {
  name: 'App',
  data () {
    return {
    };
  },
  components: {
  	LayoutContainer,
    Column,
    Row
  }
};
</script>

<style lang="css" scoped>
</style>
