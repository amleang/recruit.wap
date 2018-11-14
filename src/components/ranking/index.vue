<template>
    <div>
        <div v-if="dialog" class="mui-popup-backdrop"></div>
        <div class="dialogranking">

        </div>
    </div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data(){
      return{

      }
  },
  watch:{
      dialog(){
          if(this.dialog){

          }
      }
  }
};
</script>

<style scoped>
.dialogranking{
    position:absolute;
    
}
</style>
