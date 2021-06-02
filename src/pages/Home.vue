<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <p class="title">Find your dream job today</p>
        <p class="subtitle">Apply for any vacancies below</p>
      </div>
    </section>
    <NewVaceny @save="handleSubmit" />
    <Vecancy
      v-for="vacancy in vacancies"
      v-bind:key="vacancy.id"
      v-bind:vacancy="vacancy"
      @delete="handleDelete"
    />
  </div>
</template>

<script>
import NewVaceny from "../components/NewVaceny.vue";
import Vecancy from "../components/Vacancy.vue";
import { vacancies } from "../data";
export default {
  data() {
    return {
      vacancies,
    };
  },
  components: {
    NewVaceny,
    Vecancy,
  },
  methods: {
    handleSubmit(formData) {
      this.vacancies.unshift(formData);
    },
    handleDelete(vacencyId) {
      this.vacancies = this.vacancies.filter((vac) => vac.id !== vacencyId);
    },
  },
};
</script>

<style scoped></style>
