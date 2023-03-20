
<template>
  <section>
    <header class="header">
      <h1 class="title">Votre poids en <span class="pouet">BigMac</span>, ça donne quoi ?</h1>
    </header>
    <div class="form">
      <label for="yourWeight" class="label">Votre poids</label>
      <input type="text" v-model="userInput" placeholder="Votre poids en kg">
      <button @click.prevent="handleConversion" type="submit" :class="[ userInput ? '' : 'inactiveBtn']">Convertir</button>
      <div v-if="checkInput">
        <div class="result" v-if="userInput !== null">
          <h1 class="numbered">{{ converted }}</h1>
          <img src="@/assets/Fixedbigmac.png" alt="Illustration d'un BigMac" :class="[ userInput ? 'bigmac' : 'inactiveBigmac']">
        </div>
      </div>
      <div v-else>
        <p>{{ message }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';



const userInput = ref('');
let converted = ref('');
const message = ref('Tu dois rentrer un nombre');
const zero = ref('Tu dois rentrer un nombre supérieur à 0');




const checkInput = () => {

  const regex = new RegExp(/^[0-9]+$/);

  if(!regex.exec(userInput.value) || userInput.value <= 0) {
    return false;
  } else {
    return true;
  }
};

const handleConversion = () => {
  // poids BigMac : 224g
  if(checkInput()) {
    message.value = 'Tu dois rentrer un nombre';
    zero.value = 'Tu dois rentrer un nombre supérieur à 0';
  } else if(userInput.value === 0) {
    message.value = zero.value;
  } else {
    message.value = 'Tu dois rentrer un nombre';
  };

  userInput.value = parseInt(userInput.value);

  const inGrams = userInput.value*100000;
  converted = Math.round((inGrams/224))/100;
  return {
    converted
  }
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
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
  label {
    justify-content: flex-start;
  }

}
.inactiveBigmac 
{
  display: none;
}

.inactiveBtn {
  background-color: #84b0e2;
  opacity: 0.5;
  cursor: not-allowed;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #84b0e2;
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

span.pouet {
    color: #84b0e2;
    font-weight: bold;
}

.errorMsg {
  color: red;
  font-weight: bold;
  margin: 0.5rem 0;
}

@media (max-width: 1023px) {
  .bigmac {
    width: 100%;
    max-width: 300px;
    margin: 0 2rem;
  }
  h1.title {
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 2rem;
    margin-right: 1rem;
    text-align: right;
  }

  .result {
    display : flex;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
  }

  h1.numbered {
    font-size: 5rem;
    font-weight: bold;
    margin: 0 1rem;
  }
}
</style>
