<template>
    <div class="widget-container">
        <div class="widget-core">
            <div class="widget-txt">
                <h3>Free for Webshops</h3>
                <p>
                    The first time we got called about the CO₂ok-plugin, we didn’t like the idea at all. (The second, third and fourth times neither, by the way). I knew about the concept of CO₂ compensation already and like the idea. But hey, extra text and images costs visitors – they say. And also: ‘Keep your customer journey short.’ But this plug-in contributes to the sustainable story of my online shop. It enhances our credibility and thus contributes to our revenue. And more customers than expected compensate CO₂. That’s why I’m happy with the CO₂ok-plugin
                </p>
            </div>

            <div class="widgets">
                <div class="co2-widget">
                    <h1>491</h1>
                    <div style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;height:auto;margin-left: 15px;">
                        <div style="display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;height:auto;margin-top: -5px;">
                            <img src="" alt="" class="compensate-icon">
                            <p style="font-size: 25px;font-weight:bold;margin-left: 10px;">CO2-Reductie</p>
                        </div>
                        <p style="font-size: 14px;margin-top: -5px;">x duizend ton CO2 gereduceerd</p>
                    </div>
                    
                </div>

                <div class="wood-widget">
                    <h1>256</h1>
                    <div style="display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;height:auto;margin-left: 15px;">
                        
                        <div style="display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;height:auto;margin-top: -5px;">
                            <img src="" alt="" class="compensate-icon">
                            <p style="font-size: 25px;font-weight:bold;margin-left: 10px;">HOUT</p>
                        </div>
                        <p style="font-size: 14px;margin-top: -5px;">x 1 milijoen kg hout ( = 723.000 bomen) bespaard</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
.widget-container{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px 50px 0px;
}

.widget-core{
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.widget-txt{
    width: 45%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.widget-tx h3{
    text-align: left;
}

.widget-txt p{
    text-align: left;
    font-size: 16px;
    margin-top: 10px;
}

.widgets{
    width: 47%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.co2-widget, .wood-widget{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

.wood-widget h1, .co2-widget h1{
    text-align: right;
    font-size: 50px;
    color: green;
}

.wood-widget p, .co2-widget p{
    text-align: left;
    /* font-size: 16px; */
}

.compensate-icon{
    width: 20px;
    height: 20px;
    border: 1px solid red;
}

</style>