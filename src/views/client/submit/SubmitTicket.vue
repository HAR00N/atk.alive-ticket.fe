<template>
  <v-container class="d-flex justify-space-between position-relative">
    <div style="width: 65%; position: relative;">
      <v-text-field label="Title" variant="underlined"></v-text-field>
      <div class="d-flex justify-space-between w-100">
        <div class="d-block" style="width: 30%">
          <span>Menu Path</span>
          <v-text-field label="please menu path" variant="underlined"></v-text-field>
        </div>
        <div class="d-block" style="width: 30%">
          <span>Priority</span>
          <select class="selectbox-TLM">
            <option value="1">All</option>
            <option value="2">Latte</option>
            <option value="3">Green Tea</option>
          </select>
        </div>
        <div class="d-block" style="width: 30%">
          <span>Division</span>
          <select class="selectbox-TLM">
            <option value="1">All</option>
            <option value="2">Latte</option>
            <option value="3">Green Tea</option>
          </select>
        </div>

      </div>
      <div>
        <QuillEditor theme="snow" toolbar="full" />
      </div>
      <div>
        <v-file-input :rules="rules" label="File input" variant="underlined" multiple></v-file-input>
      </div>
    </div>
    <div class="filters-content" style="width: 30%; position: fixed; left: 66%; top: 35%;">
      <div style="padding: 15px; position: relative; height: 100%;">
        <div>
          <span>DashBoard</span>
          <v-table density="compact">
            <tbody>
              <tr>
                <td>Duration</td>
                <td>2023.03.01 ~ 2024.02.28</td>
              </tr>
              <tr>
                <td>Remain Dev Cnt</td>
                <td>3/5</td>
              </tr>
              <tr>
                <td>Remain Urgent Cnt</td>
                <td>7/15</td>
              </tr>
              <tr>
                <td>Install contract</td>
                <td></td>
              </tr>
              <tr>
                <td>Recieved Cnt</td>
                <td>23</td>
              </tr>
              <tr>
                <td>Progress Cnt</td>
                <td>3</td>
              </tr>
            </tbody>
          </v-table>
        </div>
        <div>
          <span>Contact</span>
          <div class="d-block" style="padding-left: 10px;">
            <span>Agent Mr.Oh</span><br />
            <p>● agent@google.com 070 1234 5678</p>
          </div>
          <div class="d-block" style="padding-left: 10px;">
            <span>Agent Mr.Oh</span><br />
            <p>● agent@google.com 070 1234 5678</p>
          </div>
          <div class="d-block" style="padding-left: 10px;">
            <span>Agent Mr.Oh</span><br />
            <p>● agent@google.com 070 1234 5678</p>
          </div>
        </div>
        <div style="padding-left: 10px; position: absolute; bottom: 0;">
          ◆ Please submit yout ticket before contact us. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Thank you.
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rules: [
      (value) => {
        return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/submitticket.scss";
</style>
