<template>
  <div class="list">
    <!--  в качестве key лучше подходит item.id и сравнивать лучше по id-->
    <button v-for="item in items" :key="item.id" class="list__item"
            :class="{ 'list__item_selected': item.id === selectedId}" @click="onClick(item)">
      {{ item.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, ref, PropType, Ref} from 'vue';
import {Product} from "@/components/types";

const emit = defineEmits(['click']);

defineProps({
  items: {
    type: Array as PropType<Product[]>,
  },
});

const selectedId: Ref<number | undefined> = ref(undefined);

const onClick = (item: Product) => {
  selectedId.value = item.id;
  emit('click', item);
}
</script>

<style scoped lang="css">
.list {
  display: flex;
  flex-direction: column;
  border: 1px solid lightblue;
}

.list__item {
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  min-width: 250px;
  background-color: transparent;
  border: none;
  text-align: left;
}

.list__item_selected {
  background-color: lightskyblue;
}

.list__item:hover {
  background-color: #f0f0ff;
}
</style>
