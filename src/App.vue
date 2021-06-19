<template>
  <div id="nav">
    <user />
  </div>
  <router-view />
</template>

<script>
import user from "@/views/User";
export default {
  components: { user },
};
</script>
