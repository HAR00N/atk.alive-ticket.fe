<template>
  <div class="d-block">
    <v-card
      variant="tonal"
      color="green-lighten-2"
      class="client-title-area"
      v-if="toPath.indexOf('detail') !== -1"
    >
      <p class="detail-route">Home &gt; Tickets</p>
      <div class="detail-title-area">
        <img class="alarm-light" src="@/assets/images/alarm-light-1.png" />
        <p class="detail-title">Row Data Please in Mileage menu #230001</p>
      </div>
      <p class="detail-date">2023-11-15 12:53</p>
    </v-card>

    <v-card variant="tonal" color="green-lighten-2" class="client-title-area" v-else>
      <p class="d-flex justify-center">{{ toPath }}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: "MAIN TITLE",
    };
  },
  computed: {
    toPath() {
      const vm = this;
      console.log(vm.$route.fullPath.indexOf("detail"));
      return vm.$route.fullPath;
    },
  },
};
</script>

<style scoped>
.client-title-area {
  /*margin-bottom: 3rem;*/
  box-sizing: border-box;
  padding: 3.2rem 8.806rem 7rem 8.806rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #eff8f0;
  flex-shrink: 0;
}
.client-title-area .detail-route {
  margin: 0rem 0rem 3.1rem 2.394rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.2125;
  color: #1b5e20;
  font-family: Inter, 'Source Sans Pro';
  white-space: nowrap;
  flex-shrink: 0;
}
.client-title-area .detail-title-area {
  margin: 0rem 51.594rem 0.5rem 0rem;
  width: calc(100% - 51.5938rem);
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
}
.client-title-area .detail-title-area .alarm-light {
  margin: 0.071rem 0.906rem 0rem 0rem;
  width: 1.4875rem;
  height: 1.4875rem;
  object-fit: contain;
  vertical-align: top;
  transform: translateY(50%);
  flex-shrink: 0;
}
.client-title-area .detail-title-area .detail-title {
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1.2125;
  color: #40443f;
  font-family: Inter, 'Source Sans Pro';
  white-space: nowrap;
  flex-shrink: 0;
}
.client-title-area .detail-date {
  margin-left: 2.3938rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.2125;
  color: #817a7a;
  font-family: Inter, 'Source Sans Pro';
  white-space: nowrap;
  flex-shrink: 0;
}
</style>
