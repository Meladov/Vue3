<template>
<div class="wrapper">
  <headerOne />
  <div class="wrapper-content">
    <div class="container">
      <router-view />
    </div>
  </div>
  <footerOne />
</div>
</template>

<script>
import HeaderOne from '@/components/HeaderOne'
import FooterOne from '@/components/FooterOne'
export default {
  components: {
    HeaderOne,
    FooterOne
  },
}
</script>