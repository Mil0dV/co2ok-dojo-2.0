<script>
import {Line, mixins} from 'vue-chartjs'
const {reactiveProp} = mixins
export default {
    
   extends: Line,
   mixins: [mixins.reactiveProp],
  //  props: ['options'],

  props: {
    // chartData: {
    //   type: Object,
    //   default: null
    // },
    options: {
      type: Object,
      default: null
    }
  },

data () {
  return {

  }
},

   mounted() {
       this.renderChart(this.chartData, this.options)
   }

}
</script>
