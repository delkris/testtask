<template>
	<div class="main">
		<item-list :items="data" class="sidebar" @click="selectedItem = $event" />
		<item-content v-if="selectedItem" :item="selectedItem" @addAttr="addAttr"/>
	</div>
</template>

<script setup lang="ts">
import { ref, Ref} from "vue";
import ItemList from './components/ItemList.vue';
import ItemContent from './components/ItemContent.vue';
import Data from './components/mockData';

import {Product} from "@/components/types";

const data: Ref<Product[]> = ref(Data);
const selectedItem: Ref<Product | undefined>= ref();

const addAttr = (value: string) => {
  const element = data.value.find(el => el.id === selectedItem.value?.id)

  if (element) {
    // uniqId - простая генирация id
    const uniqId = element.attributes.length + 1;

    switch (value) {
      case 'color': {
        element.attributes.push({
          id: uniqId,
          code: 'new code',
          name: 'new field',
          color: 'color'
        });
        break;
      }
      case 'size': {
        element.attributes.push({
          id: uniqId,
          code: 'new code',
          name: 'new field',
          size: {
            width: 0,
            height: 0
          }
        });
        break;
      }
      case 'weight': {
        element.attributes.push({
          id: uniqId,
          code: 'new code',
          name: 'new field',
          weight: 0
        });
        break;
      }
    }
  }
}

</script>

<style scoped lang="css">
.main {
	display: flex;
	gap: 20px;
}
.sidebar {
	width: auto;
}
</style>
