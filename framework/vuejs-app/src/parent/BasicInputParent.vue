<template>
    <div>
        <AppBasicInput msg="I am message" />
    </div>
</template>

<script>
import AppBasicInput from '../components/AppBasicInput';

export default {
  name: 'BasicInputParent',
    components: {
        AppBasicInput
    }
}
</script>
