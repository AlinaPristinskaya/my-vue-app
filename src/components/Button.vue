<template>
  <button class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-block;
  background: #fff;
  color: black;
  padding: 8px 15px;
  border-radius: 10px;
  border: none;
  font-size: 24px;
}
</style>
