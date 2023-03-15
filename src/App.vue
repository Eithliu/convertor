
<template>
  <section>
    <header class="header">
      <h1 class="title">Votre poids en <span class="pouet">BigMac</span>, ça donne quoi ?</h1>
    </header>
    <div class="form">
      <label for="yourWeight" class="label">Votre poids</label>
      <input type="text" v-model="userInput" placeholder="Votre poids en kg">
      <button @click.prevent="handleConversion" type="submit">Convertir</button>
      <div class="result" v-if="userInput !== null">
        <h1 class="numbered">{{ converted }}</h1>
        <img src="@/assets/Fixedbigmac.png" alt="Illustration d'un BigMac" class="bigmac">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const userInput = ref('');
let converted = ref('');

const handleConversion = () => {
  // poids BigMac : 224g
  if(typeof (userInput.value) !== Number) {
    userInput.value = parseInt(userInput.value);
    
  }
  const inGrams = userInput.value*100000;
  converted = Math.round((inGrams/224)/100);
  return {
    converted
  }
};
</script>

<style scoped>
.header {
  width: 50%;
}
section {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.label {
  align-items: center;
}
h1.title {
  text-align: center;
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 5rem;
  margin-right: 1rem;
  text-align: right;
}
h1.numbered {
  font-size: 5rem;
  font-weight: bold;
  margin: 0 1rem;
}

span.pouet {
  color: #84b0e2;
  font-weight: bold;
}

.result {
  display : flex;
  flex-direction: row;
  align-items: center;
  font-size: 5rem;
}

.bigmac {
  width: 100%;
  max-width: 300px;
  margin: 0 2rem;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 30vw;
}
button {
  margin: 0.5rem 0;
  width: 100%;
  padding: 0.5rem;
  background-color: #84b0e2;
  border: 0;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #5e8ab8;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #84b0e2;
}
label {
  justify-content: flex-start;
}
</style>
