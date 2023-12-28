<template>
  <h2>Counter!!</h2>
  <p> {{ counter }} <sup>2</sup> = {{ squaredCounter }}</p>
  <button @click="increase()">+1</button>
  <button @click="decrease()">-1</button>
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
        },
        increase() {
            this.counter = this.counter + 1
        }, 
        decrease() {
            this.counter = this.counter - 1
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
    button {
        background-color: #64B687;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover {
        background-color: #5AA67B;
        transition: 0.3s ease-in-out;
    }
</style>