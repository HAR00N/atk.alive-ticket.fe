<template>
  <div class="d-block w-100">
    <v-card variant="tonal" color="green-lighten-2" class="client-title-area">
      <div class="d-flex w-100">
        <div class="position-relative w-50 d-flex">
          <div class="position-relative w-75 px-5 py-3">
            <p class="date">Date</p>
<!--            <VueDatePicker v-model="date1" placeholder="startDate"></VueDatePicker>-->
            <VDataInput></VDataInput>
          </div>
          <div class="position-relative between-dash">
            <span>~</span>
          </div>
          <div class="position-relative w-75 px-5 py-3">
            <p class="date">Date2</p>
            <VueDatePicker v-model="date2" placeholder="endDate"></VueDatePicker>
          </div>
        </div>
        <div class="position-relative w-50 d-flex">
          <div class="status-filter">
            <p class="status-filter-title">Status</p>
            <select class="selectbox-TLM">
              <option value="1">All</option>
              <option value="2">Latte</option>
              <option value="3">Green Tea</option>
            </select>
          </div>
          <div class="status-filter" style="margin-left: 25px">
            <p class="status-filter-title">Priority</p>
            <select class="selectbox-TLM">
              <option value="1">All</option>
              <option value="2">Latte</option>
              <option value="3">Green Tea</option>
            </select>
          </div>
        </div>
      </div>
      <div class="d-flex" style="width: 100%">
        <div class="position-relative w-50 d-flex">
          <div class="filters-search-area">
            <div class="filters-search-area-inner">
              <p class="search-title">Title</p>
              <input type="text" class="search-input" placeholder="write the title" />
            </div>
          </div>
          <div class="filters-search-area" style="margin-left: 2rem">
            <div class="filters-search-area-inner">
              <p class="search-title">Menu Path</p>
              <input type="text" class="search-input" placeholder="write the Menu Path" />
            </div>
          </div>
        </div>
        <div class="position-relative w-50 d-flex">
          <div class="status-filter2" style="margin-right: 45px">
            <p class="status-filter-title">Division</p>
            <select class="selectbox-TLM2">
              <option value="1">All</option>
              <option value="2">Latte</option>
              <option value="3">Green Tea</option>
            </select>
          </div>
          <div class="d-block" style="transform: translateY(-15%)">
            <div class="unread-ticket">
              <input type="checkbox" id="check" v-model="checked" />
              <label for="check" />
              <p class="only-unread-ticket">Only Additional Dev Ticket</p>
            </div>
            <div class="unread-ticket">
              <input type="checkbox" id="check2" v-model="checked2" />
              <label for="check2" />
              <p class="only-unread-ticket">Only Unread Ticket</p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex w-100 justify-end" style="padding: 20px; transform: translateX(2%)">
        <v-btn
          variant="outlined"
          class="text-none rounded-lg"
          color="#84D95E"
          size="large"
          prepend-icon
          style="width: 10%; margin-right: 20px"
        >
          <v-icon>mdi-restart</v-icon>
          Reset
        </v-btn>
        <v-btn
          variant="flat"
          class="text-none text-white rounded-lg"
          color="#84D95E"
          size="large"
          prepend-icon
          style="width: 10%"
        >
          <v-icon>mdi-check</v-icon>
          Search
        </v-btn>
      </div>
    </v-card>
    <v-container class="d-block w-100 h-100">
      <div class="d-block w-100">
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
        <div class="filters-content">
          <v-table style="padding: 30px 15px 30px">
            <thead>
              <tr>
                <th class="text-center" style="width: 100px">Key</th>
                <th class="text-center" style="width: 150px">Date</th>
                <th class="text-center" style="width: 30%">Title</th>
                <th class="text-center" style="width: 300px">Requester</th>
                <th class="text-center" style="width: 150px">Division</th>
                <th class="text-center" style="width: 200px">ETE</th>
                <th class="text-center" style="width: 150px">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in ticketList" :key="item.key">
                <td class="text-center">{{ item.key }}</td>
                <td class="text-center">{{ item.date }}</td>
                <td class="table-title">
                  <div class="d-flex table-title">
                    <v-icon icon="mdi:mdi-new-box" style="color: #ff4d4d; margin-right: 3px" />
                    <span class="ticket-title" @click="goToDetail('1')">{{ item.title }}</span>
                    <div style="margin: 1px; margin-left: 5px !important">
                      <img width="15" height="15" src="/src/assets/images/urgent-red.png" />
                    </div>
                    <div style="margin: 1px; margin-left: 5px !important">
                      <img width="15" height="15" src="/src/assets/images/dev_gray.png" />
                    </div>
                  </div>
                </td>
                <td class="text-center">
                  <v-icon icon="mdi:mdi-account-circle-outline" style="color: #84d95e; margin-right: 3px" />
                  <span>{{ item.requester }}</span>
                </td>
                <td class="text-center">{{ item.division }}</td>
                <td class="text-center">{{ item.ete }}</td>
                <td class="text-center">
                  <v-chip
                    :id="item.status_class"
                    variant="outlined"
                    size="large"
                    :class="`${item.status_class} fix-area`"
                  >
                    <span style="line-height: 100%;">
                      {{ item.status_class }}
                      <br v-if="item.status == '4'" />
                      <span style="color: #787070; font-size: small">{{ item.status == 4 ? item.deadline : "" }}</span>
                    </span>
                  </v-chip>
                  <!--                  <v-btn rounded="lg" variant="outlined" color="blue" style="background-color: #D6F8FA;">{{ item.status }}</v-btn>-->
                </td>
              </tr>
            </tbody>
          </v-table>
          <pager :pass="pager"></pager>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Pager from "@/components/pager.vue";
import VDataInput from "@/components/VDateInput.vue"
import { code, getCodeValue } from "@/assets/js/code.js";
export default {
  name: "TicketList2",
  components: {
    Pager,
    VDataInput,
  },
  data: () => {
    return {
      pager: {
        model: {},
        pageNo: 1,
        pageNum: 1,
        totalSize: 100,
        rowSize: 10,
        blockSize: 5,
        endSize: 0,
        list: [],
        href: "javascript:void(0);",
        callBack: function (n) {
          this.model.getList(n);
          //this.model.fnOnPostSearchList(n);
        },
      },

      title: "MAIN TITLE",
      date1: "",
      date2: "",
      checked: false,
      checked2: false,

      code: code,

      ticketList: [
        {
          key: "#230005",
          date: "23-12-04",
          title: "New Ticket Number 5 UrgentUrgentUrgentUrgentUrgentUrgentUrgentUrgentUrgentUrgentUrgentUrgent",
          requester: "system Manager 1",
          division: "Error",
          ete: "23-12-06",
          status: "1",
        },
        {
          key: "#230005",
          date: "23-12-04",
          title: "New Ticket Number 5 Urgent",
          requester: "system Manager 1",
          division: "Error",
          ete: "23-12-06",
          status: "2",
        },
        {
          key: "#230005",
          date: "23-12-04",
          title: "New Ticket Number 5 Urgent",
          requester: "system Manager 1",
          division: "Error",
          ete: "23-12-06",
          status: "2",
        },
        {
          key: "#230005",
          date: "23-12-04",
          title: "New Ticket Number 5 Urgent",
          requester: "system Manager 1",
          division: "Error",
          ete: "23-12-06",
          status: "3",
        },
        {
          key: "#230005",
          date: "23-12-04",
          title: "New Ticket Number 5 Urgent",
          requester: "system Manager 1",
          division: "Error",
          ete: "23-12-06",
          status: "3",
        },
        {
          key: "#230005",
          date: "23-12-04",
          title: "New Ticket Number 5 Urgent",
          requester: "system Manager 1",
          division: "Error",
          ete: "23-12-06",
          status: "4",
          deadline: "2023-11-27",
        },
        {
          key: "#230005",
          date: "23-12-04",
          title: "New Ticket Number 5 Urgent",
          requester: "system Manager 1",
          division: "Error",
          ete: "23-12-06",
          status: "4",
          deadline: "2023-11-27",
        },
        {
          key: "#230005",
          date: "23-12-04",
          title: "New Ticket Number 5 Urgent",
          requester: "system Manager 1",
          division: "Error",
          ete: "23-12-06",
          status: "5",
        },
        {
          key: "#230005",
          date: "23-12-04",
          title: "New Ticket Number 5 Urgent",
          requester: "system Manager 1",
          division: "Error",
          ete: "23-12-06",
          status: "99",
        },
        {
          key: "#230005",
          date: "23-12-04",
          title: "New Ticket Number 5 Urgent",
          requester: "system Manager 1",
          division: "Error",
          ete: "23-12-06",
          status: "1",
        },
      ],
    };
  },
  computed: {},
  created() {
    let vm = this;
    console.log("12345");
    vm.getList(1);
  },
  methods: {
    getList(n) {
      let vm = this;

      ////// json 정의
      ////// list api 실행

      vm.pager.totalSize = 100;

      for (let i in vm.ticketList) {
        vm.ticketList[i].status_class = getCodeValue("ticket_status", vm.ticketList[i].status);
      }

      vm.pager.pageNum = vm.pager.pageNo * vm.pager.rowSize - vm.pager.rowSize;
      vm.pager = Pager.methods.createPager(vm.pager, vm, "list");
    },
    goToDetail(code) {
      let vm = this;
      vm.$routerPush(`/client/tickets/detail/${code}`);
    },
    // getcodevalue(value, target) {
    //   let item = this.code.find((content) => content.code_name == value);
    //
    //   if(item == null){
    //     return "";
    //   } else {
    //     return item.code[target];
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/ticket2.scss";
</style>
