<template>
  <v-footer style="padding: 100px 160px; text-align: left; background: chartreuse; display: block;">
<!--    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} <strong>Alive-Ticket</strong>
    </v-col>-->
    <div style="display: block">
      <ul class="w-100 d-block overflow-hidden mb-10">
        <li class="float-left font-weight-bold pr-10" style="font-size: 1.125rem">
          {{ new Date().getFullYear() }} <strong>Alive-Ticket</strong>
        </li>
      </ul>
      <div class="m-0 p-0 border-0 text-black">
        <p style="font-size: 1rem; font-weight: 500; line-height: 220%; letter-spacing: -0.64px;">
          123455236q2346dlkfhgnlsadkfnghlsdkn<br />
          slkdgnalsdfkngladskfnglaskdngalskdngl<br />
          sdljgknasldkgnalsdkgnlaskdnglaskdnglaksdng
        </p>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {};
</script>
<style scoped>
div {
  line-height: normal;
  vertical-align: baseline;
  letter-spacing: -0.04em;
  font-size: 16px;
  box-sizing: border-box;
}
</style>
