<template>
    <div>
        <v-card
                class="mx-auto text-xs-center"
                color="green"
                dark
                max-width="600">
            <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline
                            :value="value"
                            color="rgba(255, 255, 255, .7)"
                            height="100"
                            padding="24"
                            stroke-linecap="round"
                            smooth>
                        <template v-slot:label="item">
                            ${{ item.value }}
                        </template>
                    </v-sparkline>
                </v-sheet>
            </v-card-text>

            <v-card-text>
                <div class="display-1 font-weight-thin">Sales Last 24h</div>
            </v-card-text>

            <v-divider></v-divider>
        </v-card>

        <p @click="value = [423, 224, 123, 423, 234, 231, 122] ">test</p>
    </div>
</template>

<script>
    export default {
        name: "Transactions",
        data: () => ({
            value: [
                423,
                446,
                675,
                510,
                590,
                610,
                760
            ]
        })
    }
</script>

<style scoped>

</style>