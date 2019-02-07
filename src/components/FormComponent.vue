<template>
  <div>
    <label for="color">Enter the color : </label>
    <input type="text" @input="colorChanged" name="color" />
  </div>
</template>

<script>
export default {
  methods: {
    colorChanged: function(event) {
      //alert(event.target.value);
      this.$store.commit("updateColor", event.target.value);
    }
  }
};
</script>
