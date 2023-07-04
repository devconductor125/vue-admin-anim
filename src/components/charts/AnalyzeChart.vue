<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,

  props: ["data", "options"],
  data: () => ({
    htmlLegend: null
  }),
  mounted() {
    this.addPlugin({
      id: "my-plugin",

      beforeDraw: function (chart, easing) {
        if (
          chart.config.options.chartArea &&
          chart.config.options.chartArea.backgroundColor
        ) {
          // const helpers = Chart.helpers;
          const ctx = chart.chart.ctx;
          const chartArea = chart.chartArea;
          const incomes = chart.data.datasets.find(
            (dataset) => dataset.label === "Income"
          ).data;
          const expenses = chart.data.datasets.find(
            (dataset) => dataset.label === "Expenses"
          ).data;

          const values = chart.data.datasets[0].data; // Added
          // const columnCount = chart.data.datasets[0].data.length;
          const columnCount = chart.controller.scales["x-axis-0"].ticks.length;
          const rowCount = chart.controller.scales["y-axis-0"].ticks.length; //values.length;// Math.ceil(Math.max.apply(null, values) / 10); // Replace by the number of rows you need
          const yTicks = chart.controller.scales["y-axis-0"].ticks;

          const width = chart.controller.scales["x-axis-0"].width; //chartArea.right - chartArea.left;
          const height = chartArea.bottom - chartArea.top;

          const columnWidth = width / columnCount;
          const rowHeight = height / rowCount;
          ctx.save();
          ctx.fillStyle = chart.config.options.chartArea.backgroundColor;

          let startPoint = chartArea.left;
          for (let index = 0; index < incomes.length; index++) {
            const income = incomes[index];
            const expense = expenses[index];
            if (income < Math.abs(expense)) {
              ctx.fillRect(startPoint, chartArea.top, columnWidth, height);
            }
            startPoint += columnWidth;
          }
          for (let index = 0; index < yTicks.length; index++) {
            if (yTicks[index] < 1) {
              ctx.fillStyle = "black";
            } else {
              ctx.fillStyle = "red";
            }
          }
          //   while (startPoint < chartArea.right) {
          //     ctx.fillRect(startPoint, chartArea.top, columnWidth, height);
          //     startPoint += columnWidth * 2;
          //   }
          //   if (!chart.config.options.chartArea.isHorizontal) {
          //     //vertical background
          //     console.log("vertical: " + columnCount);
          //     let startPoint = chartArea.left;
          //     while (startPoint < chartArea.right) {
          //       ctx.fillRect(startPoint, chartArea.top, columnWidth, height);
          //       startPoint += columnWidth * 2;
          //     }
          //   } else {
          //     //horizontal background
          //     console.log("horizontal: " + columnCount);
          //     let startPoint = chartArea.top;
          //     while (startPoint < chartArea.bottom) {
          //       ctx.fillRect(chartArea.left, startPoint, width, rowHeight);
          //       startPoint += rowHeight * 2;
          //     }
          //   }

          ctx.restore();
        }
        let text = [];
        text.push("<ul>");
        for (let i = 0; i < chart.data.datasets.length; i++) {
          text.push("<li>");
          text.push(
            '<span style="background-color:' +
              chart.data.datasets[i].borderColor +
              '">' +
              chart.data.datasets[i].label +
              "</span>"
          );
          text.push("</li>");
        }
        text.push("</ul>");
        return text.join("");
      },
    });

    this.renderChart(this.data, { ...this.options });
    // this.htmlLegend = this.generateLegend();
    // this.$emit('sendLegend', htmlLegend);
    // this.htmlLegend = function (chart) {
    //         let text = [];
    //         text.push("<ul>");
    //         for (const i = 0; i < chart.data.datasets.length; i++) {
    //           console.log(chart.data.datasets[i]); // see what's inside the obj.
    //           text.push("<li>");
    //           text.push(
    //             '<span style="background-color:' +
    //               chart.data.datasets[i].borderColor +
    //               '">' +
    //               chart.data.datasets[i].label +
    //               "</span>"
    //           );
    //           text.push("</li>");
    //         }
    //         text.push("</ul>");
    //         return text.join("");
    //       };
  },
};
</script>