<template>
    <figure :class="toggleClass">
      <img v-if="!toggleGif" @click="hdlclick" :src="image">
      <img v-else @click="hdlclick" :src="gif">
    </figure>
</template>

<script> 
export default {
  name: "ToggleGif",
  props: ["srcImg", "srcGif"],
  data() {
    return {
      toggleGif: false
    };
  },
  computed: {
    image() {
      return require("../assets/" + this.srcImg + ".png");
    },
    gif() {
      return require("../assets/" + this.srcGif + ".gif");
    },
    toggleClass(){
      return this.toggleGif ? 'active' : 'toggle-gif'
    }
  },
  methods: {
    hdlclick() {
      this.toggleGif = !this.toggleGif;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toggle-gif {
  width: 45%;
  display: flex;
}
.toggle-gif img, .active img{
  width: 100%;
  height: 100%;
}
.active {
  width: 90%;
}
</style>
