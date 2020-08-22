<template></template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  asyncData({ redirect }) {
    return redirect('/');
  }
});
</script>