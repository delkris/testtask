<template>
	<div class="content">
		<span class="header"> {{ item.name }}</span>

    <!-- в input использовала v-model, ибо не работало редактирование -->
		<div class="detail" v-for="attr in item.attributes" :key="attr.id">
			<div class="field">
				<span class="title">code:</span>
				<input v-model="attr.code"/>
			</div>

			<div class="field">
				<span class="title">name:</span>
				<input v-model="attr.name"/>
			</div>

			<div v-if="attr.color" class="field">
				<span class="title">color:</span>
				<input v-model="attr.color"/>
			</div>

			<div v-if="attr.size" class="field">
				<span class="title">size:</span>
				<span>
					<input v-model="attr.size.width" type="number"/> x <input v-model="attr.size.height" type="number"/>
				</span>

			</div>

			<div v-if="attr.weight" class="field">
				<span class="title">weight:</span>
				<input v-model="attr.weight" type="number"/>
			</div>
		</div>

		<div class="add">
			<label>
				type
        <!--   предпочтительно использовать v-model вместо ref -->
				<select v-model="selectType">
					<option value="color">color</option>
					<option value="size">size</option>
					<option value="weight">weight</option>
				</select>
			</label>

       <!-- кнопка не активна, если не выбран select-->
      <button @click="addAttr" :disabled="selectType === ''">
        Add
      </button>
		</div>
	</div>
</template>

<script setup lang="ts">
// удалила watch и переменную innerItem, они были лишними.
import {defineProps, defineEmits, ref, PropType} from "vue";
import {Product} from "@/components/types";

const emit = defineEmits(['addAttr']);

defineProps({
  item: {
    required: true,
    type: Object as PropType<Product>,
  }
})

const selectType = ref("")

const addAttr = () => {
  emit('addAttr', selectType.value)
}
</script>

<style scoped lang="css">
.header {
	font-weight: bold;
}
.content {
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 20px;
}
.detail {
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.field {
	display: flex;
	gap: 5px;
}
.title {
	font-weight: bold;
}
.add {
	display: flex;
	gap: 10px;
}
</style>
