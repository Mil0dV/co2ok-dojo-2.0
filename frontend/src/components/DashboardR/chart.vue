<script>
import {Line, mixins} from 'vue-chartjs'
const {reativeProp} = mixins
export default {
    
   extends: Line,
   mixins: [reativeProp],
   prop: ['options'],

   mounted() {
       this.renderChart(this.chartData, tis.options)
   }

}
</script>
