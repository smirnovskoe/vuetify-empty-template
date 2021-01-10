<template>
  <v-row>
    <v-col cols="12" sm="2">
      <!-- Поиск и инструменты -->
      <v-sheet rounded="lg" min-height="130">
        <v-col cols="12" sm="12">
          <!-- Форма поиска -->
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="identif"
              :counter="14"
              :rules="identifRules"
              label="Введите идентификатор"
              required
            ></v-text-field>
          </v-form>
          <v-btn color="success" class="mr-4" @click="validate"> Поиск </v-btn>
        </v-col>
      </v-sheet>
      <v-row class="mb-6" no-gutters></v-row>
      <v-sheet v-if="!loading" rounded="lg" min-height="130">
        <v-col cols="12" sm="12">
          <!-- Инструменты -->
          <Tools />
        </v-col>
      </v-sheet>
    </v-col>

    <v-col cols="12" sm="10">
      <RightChartBar v-model="rightBarValue" />
      <Loader v-if="loading" />
      <!-- Краткая информация и график -->
      <div v-else>
        <v-sheet min-height="31vh" rounded="lg">
          <v-row v-if="!load">
            <v-col cols="12" sm="3">
              <ShortInfo />
            </v-col>
            <v-col cols="12" sm="9">
              <BarChart :closedCreditData="chartData" />
            </v-col>
          </v-row>
        </v-sheet>
        <v-row class="mb-6" no-gutters></v-row>
        <!-- Таблица -->
        <v-sheet min-height="31vh" rounded="lg">
          <v-row v-if="!load">
            <v-col cols="12" sm="12">
              <CreditTable @click="isRightBarOpen = !isRightBarOpen" />
            </v-col>
          </v-row>
        </v-sheet>
      </div>
    </v-col>
  </v-row>
</template>


<script>
import CreditTable from "@/components/Physical/CreditTable";
import ShortInfo from "@/components/Physical/ShortInfo";
import Tools from "@/components/Physical/Tools";
import BarChart from "@/components/Physical/BarChart";
import RightChartBar from "@/components/Physical/RightChartBar";

import moment from "moment";

export default {
  name: "physical",
  components: {
    Tools,
    CreditTable,
    ShortInfo,
    BarChart,
    RightChartBar,
  },
  computed: {
    chartData() {
      return this.barChartData;
    },
    rightBarValue() {
      return this.isRightBarOpen;
    },
  },
  data: () => ({
    loading: false,
    isRightBarOpen: false,
    valid: true,
    identif: "",
    identifRules: [
      (v) => !!v || "Данное поле является обязательным",
      (v) => (v && v.length <= 14) || "Идентификатор имеет менее 14 символов",
    ],
    load: false, // ПОТОМ УДАЛИТЬ, ЭТО ЗАГЛУШКА
    temp: ["01.01.2001", "05.05.2005", "07.07.2007"],
    barChartData: [],
  }),
  methods: {
    validate() {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.barChartData = this.temp.map((c) => ({
        x: moment(c, "MM/DD/YYYY").format(),
        t: 500,
      }));

      console.log(
        "test 1",
        this.temp.map((c) => new Date(c))
      );
    },
  },
};
</script>


