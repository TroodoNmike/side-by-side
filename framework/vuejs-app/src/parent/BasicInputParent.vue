<template>
    <div>
        <BasicInput msg="I am message" />
    </div>
</template>

<script>
import BasicInput from '../components/BasicInput';

export default {
  name: 'BasicInputParent',
    components: {
        BasicInput
    }
}
</script>
