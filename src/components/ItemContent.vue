<template>
  <div class="content">
    <span class="content__header"> {{ item.name }}</span>

    <!-- в input использовала v-model, ибо не работало редактирование -->
    <div class="content__detail" v-for="attr in item.attributes" :key="attr.id">
      <label class="field">
        <span class="field__title">code:</span>
        <input v-model="attr.code"/>
      </label>

      <label class="field">
        <span class="field__title">name:</span>
        <input v-model="attr.name"/>
      </label>

      <label v-if="attr.color" class="field">
        <span class="field__title">color:</span>
        <input v-model="attr.color"/>
      </label>

      <div v-if="attr.size" class="field">
        <span class="field__title">size:</span>
        <div>
          <label>
            <span class="field__title field__title_hidden">width:</span>
            <input v-model="attr.size.width" type="number"/>
          </label>
          x
          <label>
            <span class="field__title field__title_hidden">height:</span>
            <input v-model="attr.size.height" type="number"/>
          </label>
        </div>
      </div>

      <label v-if="attr.weight" class="field">
        <span class="field__title">weight:</span>
        <input v-model="attr.weight" type="number"/>
      </label>
    </div>

    <div class="content__add">
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
.content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
}

.content__header {
  font-weight: bold;
}

.content__detail {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.content__add {
  display: flex;
  gap: 10px;
}

.field {
  display: flex;
  gap: 5px;
}

fieldset.field {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

.field__title {
  font-weight: bold;
}

legend.field__title {
  padding: 0;
}

.field__title_hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>
