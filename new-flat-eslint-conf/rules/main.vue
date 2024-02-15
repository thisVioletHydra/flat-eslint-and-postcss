<template>
  <div class="box" :class="{ opened: dropState }">
    <BoardSearchInput v-model="inputValue" v-bind="{ dropState }" @update:drop-state="handlerBlur" @update:model-value="handlerValue" @input="recordSearchField" />
  </div>
</template>

<script lang="ts" setup ns>
  import { onClickOutside } from '@vueuse/core';
  import { useSearchAppsPhraseStore } from '~~stores/app/searchAppsPhraseStore';

  const filterStore = useSearchAppsPhraseStore();
  const inputValue = ref('');
  const dropState = ref(false);
  const search = ref(undefined);
  const recordSearchField = () => filterStore.setFilter(inputValue.value);

  onClickOutside(search, () => (dropState.value = false));

  function handlerValue() {
    if (inputValue.value.length === 0) {
      return filterStore.setFilter(inputValue.value);
    }

    return false;
  }

  function handlerBlur(childValue: boolean) {
    dropState.value = childValue;
  } 
</script>
 
<style lang="css" module>
.box {
  position: relative;
  display: grid;
  margin: 0;
}
</style>  