<template>
	<div class="list">
		<span v-for="item in items" :key="item.id" class="item" :class="{ itemSelected: item.id === selectedItem}" @click="onClick(item)">
			{{ item.name }}
		</span>
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

const selectedItem: Ref<number | undefined> = ref(undefined);

const onClick = (item: Product) => {
	selectedItem.value = item.id;
	emit('click', item);
}
</script>

<style lang="css">
.list {
	display: flex;
	flex-direction: column;
	border: 1px solid lightblue;
}

.item {
	padding: 10px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	min-width: 250px;
}

.itemSelected {
	padding: 10px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	min-width: 250px;
	background: lightskyblue;
}

.item:hover {
	background: #f0f0ff;
}
</style>
