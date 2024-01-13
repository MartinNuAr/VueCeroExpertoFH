<template>
  <h2>{{ customTitle }}</h2>
  <p datatest-id="counter"> {{ counter }}</p>
  <p> {{ counter }} <sup>2</sup> = {{ squaredCounter }}</p>
  <div class="buttons-container">
    <button @click="increase()">+1</button>
    <button @click="decrease()">-1</button>
  </div>
</template>

<script>
export default {
    name: 'Counter',
    props: {
        title: String,
        start: {
            type: Number,
            default: 10,
            validator(value){
                return value >= 100
            }
        }
    },
    data() {
        return {
            counter: this.start
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
        },
        customTitle() {
            return this.title ? this.title : 'Counter'
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