<template>
  <div class="header flex flex-row flex-nowrap">
    <o-divider title-placement="left" class="w-1/2">
      {{ title }}
    </o-divider>
    <o-divider title-placement="right" style="width: 50%">
      <x-icon name="add" color="#18A058" class="action" @click="addParams()" />
      <x-icon name="clear" color="#F76560" class="action" @click="clearParams()" />
      <x-icon name="edit" color="#2080F0" class="action" @click="editParams()" />
    </o-divider>
  </div>
  <div v-for="(item, index) in formData" :key="item.id">
    <div class="mb-0.5 flex-nowrap flex flex-row items-center justify-center">
      <o-input
        class="w-1/2"
        size="small"
        :input-props="{
          autocomplete: 'disabled'
        }"
        :value="formData[index]['key']"
        :allow-input="noSideSpace"
        :placeholder="`参数${index + 1}`"
        @update:value="(value) => changed(index, 'key', value)"
      />
      <o-input
        class="w-1/2"
        size="small"
        :value="formData[index]['value']"
        :allow-input="noSideSpace"
        :placeholder="`值${index + 1}`"
        @update:value="(value) => changed(index, 'value', value)"
      />
      <o-button size="small" @click="disableParams(index)">
        <template #icon>
          <x-icon
            :name="item.disable ? 'close' : 'check'"
            :color="item.disable ? '#333639' : '#2080F0'"
          />
        </template>
      </o-button>
      <o-button size="small" @click="removeParams(index)">
        <template #icon>
          <x-icon name="delete" color="#F76560" />
        </template>
      </o-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { OButton, ODivider, OInput } from '@open-data-v/ui'
import { ref, watch } from 'vue'

import { uuid } from '../utils'
import type { KV } from './type'

const props = withDefaults(defineProps<{ value: Array<KV>; title: string; options?: string[] }>(), {
  title: '',
  value: () => [
    {
      key: '',
      value: '',
      disable: false,
      id: uuid(),
      options: []
    }
  ]
})

const emits = defineEmits<{
  (e: 'update:value', value: KV[]): void
}>()

const formData = ref<KV[]>(props.value)

const changed = (index: number, param: string, value: any) => {
  formData.value[index][param] = value

  emits('update:value', formData.value)
}

const addParams = () => {
  const index = formData.value.length
  formData.value.splice(index, 0, { key: '', value: '', disable: false, id: uuid() })
  emits('update:value', formData.value)
}
const removeParams = (index: number) => {
  formData.value.splice(index, 1)
  if (formData.value.length === 0) {
    formData.value.push({ key: '', value: '', disable: false, id: uuid() })
  }
  emits('update:value', formData.value)
}
const clearParams = () => {
  formData.value = [{ key: '', value: '', disable: false, id: uuid() }]
  emits('update:value', formData.value)
}

const editParams = () => {
  emits('update:value', formData.value)
}
const disableParams = (index: number) => {
  formData.value[index].disable = !formData.value[index].disable
  emits('update:value', formData.value)
}
const noSideSpace = (value: string) => {
  return !value.startsWith(' ') && !value.endsWith(' ')
}

watch(
  () => props.value,
  () => {
    if (props.value) {
      formData.value = props.value
    }
  }
)
</script>
<style lang="less" scoped>
.action {
  &:hover {
    scale: 1.2;
  }
  transition: transform 2s ease-in-out;
}
</style>
