<template>
  <div class="tickets-wys">
    <div class="main-xJd">
      <div class="auto-group-outer">
        <div class="auto-group-inner">
          <div class="tickets-vuf">
            <div class="d-flex justify-space-between">
              <p class="tickets-Gid">Tickets</p>
              <v-btn
                variant="flat"
                class="text-none text-white rounded-lg"
                color="#84D95E"
                size="large"
                prepend-icon
                style="width: 10%"
              >
                <v-icon>mdi-plus</v-icon>
                New
              </v-btn>
            </div>

            <div class="ticket-card" @click="goToDetail('1')">
              <div class="ticket-card-inner">
                <div class="ticket-date">
                  <img class="calendar" src="@/assets/images/calendar-Bub.png" />
                  <p class="calender-date">2023-11-15 12:53</p>
                  <img class="alarm" src="@/assets/images/alarm-light-1-HMj.png" />
                </div>
                <div class="ticket-content">
                  <p class="ticket-title">
                    <span class="ticket-title-sub-0">Row Data Please in mileage menu </span>
                    <span class="ticket-title-sub-1">#230021</span>
                  </p>
                  <p class="ticket-target">admin mileage &gt; manage mileage</p>
                </div>
              </div>
              <div class="status-button-wait">
                <p class="wait-deployment">Wait Deployment</p>
                <p class="scheduled-date">scheduled: 2023-11-27</p>
              </div>
              <img class="bell-outline-black" src="@/assets/images/bell-outline-1-EQ1.png" />
            </div>
            <div class="ticket-card" @click="goToDetail('2')">
              <div class="ticket-card-inner">
                <div class="ticket-date">
                  <img class="calendar" src="@/assets/images/calendar-RB7.png" />
                  <p class="calender-date">2023-11-15 12:53</p>
                </div>
                <div class="ticket-content">
                  <p class="ticket-title">
                    <span class="ticket-title-sub-0"
                      >I want to change Main page Title!
                    </span>
                    <span class="ticket-title-sub-1">#230011</span>
                  </p>
                  <p class="ticket-target">Client Main menu</p>
                </div>
              </div>
              <div class="status-button-Recieved">Receieved</div>
              <img class="bell-outline-black" src="@/assets/images/bell-outline-1-bQV.png" />
            </div>
            <div class="ticket-card" @click="goToDetail('3')">
              <div class="ticket-card-inner">
                <div class="ticket-date">
                  <img class="calendar" src="@/assets/images/calendar-Bub.png" />
                  <p class="calender-date">2023-11-15 12:53</p>
                  <img class="alarm" src="@/assets/images/alarm-light-1-HMj.png" />
                </div>
                <div class="ticket-content">
                  <p class="ticket-title">
                    <span class="ticket-title-sub-0">Row Data Please in mileage menu </span>
                    <span class="ticket-title-sub-1">#230021</span>
                  </p>
                  <p class="ticket-target">admin mileage &gt; manage mileage</p>
                </div>
              </div>
              <div class="status-button-complete">Complete</div>
              <img class="bell-outline-black" src="@/assets/images/bell-outline-1-EQ1.png" />
            </div>
            <div class="ticket-card" @click="goToDetail('4')">
              <div class="ticket-card-inner">
                <div class="ticket-date">
                  <img class="calendar" src="@/assets/images/calendar-YzV.png" />
                  <p class="calender-date">2023-11-15 12:53</p>
                </div>
                <div class="ticket-content">
                  <p class="ticket-title">
                    <span class="ticket-title-sub-0">Row Data Please in mileage menu </span>
                    <span class="ticket-title-sub-1">#230001</span>
                  </p>
                  <p class="ticket-target">live streaming menu</p>
                </div>
              </div>
              <div class="status-button-progress">In Progress</div>
              <img class="bell-badge-outline-alarm" src="@/assets/images/bell-badge-outline-2.png" />
            </div>
            <div class="ticket-card" @click="goToDetail('5')">
              <div class="ticket-card-inner">
                <div class="ticket-date">
                  <img class="calendar" src="@/assets/images/calendar-CbB.png" />
                  <p class="calender-date">2023-11-15 12:53</p>
                </div>
                <div class="ticket-content">
                  <p class="ticket-title">
                    <span class="ticket-title-sub-0">I want to change Main page Title! </span>
                    <span class="ticket-title-sub-1">#230001</span>
                  </p>
                  <p class="ticket-target">live streaming menu</p>
                </div>
              </div>
              <div class="status-button-cancel">Canceled</div>
              <img class="bell-outline-black" src="@/assets/images/bell-outline-1.png" />
            </div>
          </div>

          <div class="filters-ADX">
            <p class="filters-title">Filters</p>
            <div class="filters-content">
              <div class="filters-search-area">
                <div class="filters-search-area-inner">
                  <p class="search-title">Title</p>
                  <input type="text" class="search-input" placeholder="write the title" />
<!--                  <p >write the title</p>-->
                </div>
              </div>
              <div class="filters-search-area-2">
                <div class="filters-search-area-inner">
                  <p class="search-title">Menu path</p>
                  <input type="text" class="search-input" placeholder="write the menu pat" />
                </div>
              </div>
              <div class="status-filter">
                <p class="status-filter-title">Status</p>
                <select class="selectbox-TLM">
                  <option value="1">All</option>
                  <option value="2">Latte</option>
                  <option value="3">Green Tea</option>
                </select>
              </div>
              <div class="status-filter2">
                <p class="status-filter-title">Priority</p>
                <select class="selectbox-TLM">
                  <option value="1">All</option>
                  <option value="2">Latte</option>
                  <option value="3">Green Tea</option>
                </select>
              </div>
              <div class="date-filter">
                <p class="date-gjb">Date</p>
                <div class="startdate-DUd">
                  <VueDatePicker v-model="date1" placeholder="startDate"></VueDatePicker>
                </div>
                <div class="auto-group-fjqf-LSm">
                  <p class="item--UJ5">~</p>
                  <div class="enddate-CE5">
                    <VueDatePicker v-model="date2" placeholder="endDate"></VueDatePicker>
                  </div>
                </div>
              </div>
              <div class="unread-ticket">
                <input type="checkbox" id="check" v-model="checked" />
                <label for="check" />
                <p class="only-unread-ticket">Only Unread Ticket</p>
              </div>
              <div class="button-box">
                <v-btn variant="outlined" class="text-none rounded-lg" color="#84D95E" size="large" prepend-icon style="width: 45%;">
                  <v-icon>mdi-restart</v-icon>
                  Reset
                </v-btn>
                <v-btn variant="flat" class="text-none text-white rounded-lg" color="#84D95E" size="large" prepend-icon style="width: 45%;">
                  <v-icon>mdi-check</v-icon>
                  Search
                </v-btn>
<!--                <div class="search-button">검색</div>-->

              </div>
            </div>
          </div>
        </div>
<!--        <img class="image-1-q1T" src="@/assets/images/image-1.png" />-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      title: "MAIN TITLE",
      date1: "",
      date2: "",
      checked: false,
    };
  },
  computed: {},
  methods: {
    goToDetail(code) {
      let vm = this;
      vm.$routerPush(`/client/tickets/detail/${code}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/ticket.scss";
</style>
