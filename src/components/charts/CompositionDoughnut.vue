<script>
import { Doughnut } from 'vue-chartjs';
// import 'chartjs-plugin-labels';
import datalabels from 'chartjs-plugin-datalabels';
Chart.plugins.unregister(datalabels);
export default {
    extends: Doughnut,
    props: ['data', 'options'],
    mounted () {
        this.addPlugin(datalabels);
        this.renderChart(this.data, this.options)
    }
}
</script>