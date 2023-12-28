<template>
  <h2>Counter!!</h2>
  <p> {{ counter }} <sup>2</sup> = {{ squaredCounter }}</p>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            counter: 5
        }
    },
    methods: {
        getSquaredValue() {
            return this.counter * this.counter
        }
    },
    computed: {
        squaredCounter() {
            return this.counter * this.counter
        }
    }

}
</script>

<style>

</style>